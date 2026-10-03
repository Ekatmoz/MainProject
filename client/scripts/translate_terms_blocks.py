#!/usr/bin/env python3
"""Translate Hungarian blocks in terms.hu.jsx to build terms.en.jsx."""
import json
import re
import sys
import time
import urllib.parse
import urllib.request
from pathlib import Path

SCRIPT_DIR = Path(__file__).resolve().parent
sys.path.insert(0, str(SCRIPT_DIR))

from finalize_terms_en import apply_rules  # noqa: E402

ROOT = SCRIPT_DIR.parent
HU = ROOT / "src/content/terms.hu.jsx"
EN = ROOT / "src/content/terms.en.jsx"
BLOCKS_HU = SCRIPT_DIR / "terms_blocks_hu.json"
BLOCKS_EN = SCRIPT_DIR / "terms_blocks_en.json"
HUN = re.compile(r"[áéíóöőúüűÁÉÍÓÖŐÚÜŮ]")


def translate_google(text: str) -> str:
    if not text.strip():
        return text
    import subprocess

    q = text[:4500]
    for attempt in range(5):
        proc = subprocess.run(
            [
                "curl",
                "-sG",
                "https://translate.googleapis.com/translate_a/single",
                "--data-urlencode",
                "client=gtx",
                "--data-urlencode",
                "sl=hu",
                "--data-urlencode",
                "tl=en",
                "--data-urlencode",
                "dt=t",
                "--data-urlencode",
                f"q={q}",
            ],
            capture_output=True,
            text=True,
            timeout=60,
        )
        if proc.returncode != 0 or not proc.stdout.strip():
            time.sleep(1.5 + attempt)
            continue
        try:
            data = json.loads(proc.stdout)
            parts = [chunk[0] for chunk in data[0] if chunk[0]]
            translated = "".join(parts)
            if translated and translated != text:
                return translated
        except json.JSONDecodeError:
            pass
        time.sleep(1.5 + attempt)
    return text


def collect_blocks(text: str) -> list[str]:
    lines = text.splitlines()
    blocks, buf = [], []
    for line in lines:
        if HUN.search(line):
            buf.append(line)
        else:
            if buf:
                blocks.append("\n".join(buf))
                buf = []
    if buf:
        blocks.append("\n".join(buf))
    return sorted(set(blocks), key=len, reverse=True)


def main() -> None:
    hu_text = HU.read_text(encoding="utf-8")
    blocks = collect_blocks(hu_text)
    BLOCKS_HU.write_text(json.dumps(blocks, ensure_ascii=False, indent=0), encoding="utf-8")

    en_map: dict[str, str] = {}
    if BLOCKS_EN.exists():
        raw = json.loads(BLOCKS_EN.read_text(encoding="utf-8"))
        en_map = {k: v for k, v in raw.items() if v and v != k}

    for i, block in enumerate(blocks):
        if block in en_map and en_map[block] != block:
            continue
        print(f"Translating block {i + 1}/{len(blocks)} ({len(block)} chars)...")
        try:
            en_map[block] = translate_google(block)
        except Exception as exc:  # noqa: BLE001
            print(f"  failed: {exc}", file=sys.stderr)
            en_map[block] = block
        time.sleep(0.6)
        if (i + 1) % 10 == 0:
            BLOCKS_EN.write_text(json.dumps(en_map, ensure_ascii=False, indent=0), encoding="utf-8")

    BLOCKS_EN.write_text(json.dumps(en_map, ensure_ascii=False, indent=0), encoding="utf-8")

    text = hu_text.replace("const TermsHu", "const TermsEn").replace(
        "export default TermsHu", "export default TermsEn"
    )
    for block in sorted(en_map.keys(), key=len, reverse=True):
        text = text.replace(block, en_map[block])
    text = apply_rules(text)
    EN.write_text(text, encoding="utf-8")
    remaining = sum(1 for line in text.splitlines() if HUN.search(line))
    print(f"Wrote {EN}; lines with Hungarian characters: {remaining}")


if __name__ == "__main__":
    main()
