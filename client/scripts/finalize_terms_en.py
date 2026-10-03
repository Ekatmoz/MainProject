#!/usr/bin/env python3
"""Build terms.en.jsx from terms.hu.jsx with label rules and block replacements."""
import re
import sys
from pathlib import Path

SCRIPT_DIR = Path(__file__).resolve().parent
sys.path.insert(0, str(SCRIPT_DIR))

from build_terms_en import REPLACEMENTS  # noqa: E402

try:
    from terms_en_replacements_extra import EXTRA_REPLACEMENTS  # noqa: E402
except ImportError:
    EXTRA_REPLACEMENTS = []

ROOT = SCRIPT_DIR.parent
HU = ROOT / "src/content/terms.hu.jsx"
EN = ROOT / "src/content/terms.en.jsx"
HUN = re.compile(r"[áéíóöőúüűÁÉÍÓÖŐÚÜŮ]")

LABEL_RULES: list[tuple[str, str]] = [
    (r"Székhely:", "Registered office:"),
    (r"Levelezési cím:", "Mailing address:"),
    (r"Név:", "Name:"),
    (r"Cégjegyzékszám:", "Company registration number:"),
    (r"Adószám:", "Tax number:"),
    (r"Képviselő neve:", "Name of representative:"),
    (r"Telefonszám:", "Phone:"),
    (r"Honlap:", "Website:"),
    (r"Internet cím:", "Website:"),
    (r"Cím:", "Address:"),
    (r"Megyei Békéltető Testület", "County Conciliation Board"),
    (r"Budapesti Békéltető Testület", "Budapest Conciliation Board"),
    (r"Bács-Kiskun Megyei Békéltető Testület", "Bács-Kiskun County Conciliation Board"),
    (r"Békés Megyei Békéltető Testület", "Békés County Conciliation Board"),
    (r"Borsod-Abaúj-Zemplén Megyei Békéltető Testület", "Borsod-Abaúj-Zemplén County Conciliation Board"),
    (r"Csongrád Megyei Békéltető Testület", "Csongrád County Conciliation Board"),
    (r"Fejér Megyei Békéltető Testület", "Fejér County Conciliation Board"),
    (r"Győr-Moson-Sopron Megyei Békéltető Testület", "Győr-Moson-Sopron County Conciliation Board"),
    (r"Hajdú-Bihar Megyei Békéltető Testület", "Hajdú-Bihar County Conciliation Board"),
    (r"Heves Megyei Békéltető Testület", "Heves County Conciliation Board"),
    (r"Komárom-Esztergom Megyei Békéltető Testület", "Komárom-Esztergom County Conciliation Board"),
    (r"Nógrád Megyei Békéltető Testület", "Nógrád County Conciliation Board"),
    (r"Pest Megyei Békéltető Testület", "Pest County Conciliation Board"),
    (r"Somogy Megyei Békéltető Testület", "Somogy County Conciliation Board"),
    (r"Szabolcs-Szatmár-Bereg Megyei Békéltető Testület", "Szabolcs-Szatmár-Bereg County Conciliation Board"),
    (r"Tolna Megyei Békéltető Testület", "Tolna County Conciliation Board"),
    (r"Vas Megyei Békéltető Testület", "Vas County Conciliation Board"),
    (r"Veszprém Megyei Békéltető Testület", "Veszprém County Conciliation Board"),
    (r"Zala Megyei Békéltető Testület", "Zala County Conciliation Board"),
    (r"Baranya Megyei Békéltető Testület", "Baranya County Conciliation Board"),
]


def apply_rules(text: str) -> str:
    reps = sorted(EXTRA_REPLACEMENTS + REPLACEMENTS, key=lambda p: len(p[0]), reverse=True)
    for hu, en in reps:
        text = text.replace(hu, en)
    for pattern, repl in LABEL_RULES:
        text = re.sub(pattern, repl, text)
    return text


def main() -> None:
    text = HU.read_text(encoding="utf-8")
    text = text.replace("const TermsHu", "const TermsEn").replace(
        "export default TermsHu", "export default TermsEn"
    )
    text = apply_rules(text)
    EN.write_text(text, encoding="utf-8")
    remaining = sum(1 for line in text.splitlines() if HUN.search(line))
    print(f"Wrote {EN}; lines with Hungarian characters: {remaining}")


if __name__ == "__main__":
    main()
