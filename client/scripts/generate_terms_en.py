#!/usr/bin/env python3
"""Generate terms.en.jsx from terms.hu.jsx using replacement tables."""
import re
import sys
from pathlib import Path

SCRIPT_DIR = Path(__file__).resolve().parent
sys.path.insert(0, str(SCRIPT_DIR))

from build_terms_en import REPLACEMENTS  # noqa: E402

ROOT = SCRIPT_DIR.parent
HU = ROOT / "src/content/terms.hu.jsx"
EN = ROOT / "src/content/terms.en.jsx"
HUN = re.compile(r"[áéíóöőúüűÁÉÍÓÖŐÚÜŮ]")


def main() -> None:
    text = HU.read_text(encoding="utf-8")
    text = text.replace("const TermsHu", "const TermsEn").replace("export default TermsHu", "export default TermsEn")
    reps = sorted(REPLACEMENTS, key=lambda p: len(p[0]), reverse=True)
    for hu, en in reps:
        text = text.replace(hu, en)
    EN.write_text(text, encoding="utf-8")
    remaining = sum(1 for line in text.splitlines() if HUN.search(line))
    print(f"Wrote {EN}; lines with Hungarian chars: {remaining}")


if __name__ == "__main__":
    main()
