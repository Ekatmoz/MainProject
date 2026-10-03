#!/usr/bin/env python3
"""Translate remaining Hungarian lines in terms.en.jsx using Google Translate."""
import re
import sys
import time
from pathlib import Path

try:
    from deep_translator import GoogleTranslator
except ImportError:
    print("Install deep-translator: pip install deep-translator", file=sys.stderr)
    sys.exit(1)

ROOT = Path(__file__).resolve().parents[1]
PATH = ROOT / "src/content/terms.en.jsx"
HUN = re.compile(r"[áéíóöőúüűÁÉÍÓÖŐÚÜŮ]")
SKIP_PREFIXES = (
    "import ",
    "export default",
    "const TermsEn",
    "  return (",
    "    <Stack",
    "      <Box",
    "        <VStack",
    "          <Container",
    "          <Divider",
    "          <Heading",
    "          <SimpleGrid",
    "          <OrderedList",
    "          <UnorderedList",
    "          <ListItem",
    "          <a ",
    "          </",
    "  );",
    "};",
)


def should_translate(line: str) -> bool:
    if not HUN.search(line):
        return False
    stripped = line.lstrip()
    if stripped.startswith(SKIP_PREFIXES) and ">" not in line:
        return False
    return True


def main() -> None:
    lines = PATH.read_text(encoding="utf-8").splitlines()
    tr = GoogleTranslator(source="hu", target="en")
    cache: dict[str, str] = {}
    out: list[str] = []

    for line in lines:
        if not should_translate(line):
            out.append(line)
            continue
        if line not in cache:
            for attempt in range(4):
                try:
                    cache[line] = tr.translate(line)
                    break
                except Exception as exc:  # noqa: BLE001
                    if attempt == 3:
                        print(f"Failed: {exc}", file=sys.stderr)
                        cache[line] = line
                    time.sleep(1.0 + attempt)
            time.sleep(0.08)
        out.append(cache[line])

    PATH.write_text("\n".join(out) + "\n", encoding="utf-8")
    print(f"Translated {PATH}")


if __name__ == "__main__":
    main()
