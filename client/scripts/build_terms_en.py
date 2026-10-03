#!/usr/bin/env python3
"""Apply English translations to terms.en.jsx (copied from terms.hu.jsx)."""
import sys
from pathlib import Path

SCRIPT_DIR = Path(__file__).resolve().parent
sys.path.insert(0, str(SCRIPT_DIR))

ROOT = SCRIPT_DIR.parent
EN = ROOT / "src/content/terms.en.jsx"

# Longest strings first to avoid partial replacement issues.
REPLACEMENTS = [
    (
        "Alulírott kijelentem hogy gyakorlom elállási/felmondási jogomat az alábbi termék/ek adásvételére:",
        "I, the undersigned, hereby exercise my right of withdrawal/termination regarding the purchase of the following product(s):",
    ),
    (
        "(csak a szerződéstől való elállási szándék esetén töltse ki és juttassa vissza)",
        "(complete and return only if you intend to withdraw from the contract)",
    ),
    (
        "A jelen ÁSZF-ben írt szavatossági és jótállási jogok gyakorlásának határideje attól a naptól indul, amikor a\n            Vásárló a terméket átveszi.",
        "The time limit for exercising the warranty and guarantee rights set out in these GTC starts on the day the Buyer receives the product.",
    ),
    (
        "Az EURÓPAI PARLAMENT ÉS A TANÁCS (EU) 2016/679 RENDELETE (2016. április 27.) a természetes személyeknek a\n              személyes adatok kezelése tekintetében történő védelméről és az ilyen adatok szabad áramlásáról, valamint\n              a 95/46/EK rendelet hatályon kívül helyezéséről (általános adatvédelmi rendelet)",
        "REGULATION (EU) 2016/679 OF THE EUROPEAN PARLIAMENT AND OF THE COUNCIL (27 April 2016) on the protection of natural persons with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC (General Data Protection Regulation)",
    ),
    (
        "AZ EURÓPAI PARLAMENT ÉS A TANÁCS (EU) 2018/302 RENDELETE (2018. február 28.) a belső piacon belül a vevő\n              állampolgársága, lakóhelye vagy letelepedési helye alapján történő indokolatlan területi alapú\n              tartalomkorlátozással és a megkülönböztetés egyéb formáival szembeni fellépésről, valamint a 2006/2004/EK\n              és az (EU) 2017/2394 rendelet, továbbá a 2009/22/EK irányelv módosításáról",
        "REGULATION (EU) 2018/302 OF THE EUROPEAN PARLIAMENT AND OF THE COUNCIL (28 February 2018) on addressing unjustified geo-blocking and other forms of discrimination based on customers' nationality, place of residence or place of establishment within the internal market",
    ),
    ("Általános Szerződési Feltételek (ÁSZF)", "General Terms and Conditions (GTC)"),
    ("Hatályos ettől a naptól:", "Effective from:"),
    ("A szolgáltató (Eladó, Vállalkozó) adatai:", "Service provider (Seller, Business) details:"),
    (
        "Nyilvántartásba vevő hatóság: Belügyminisztérium Nyilvántartások Vezetéséért Felelős Helyettes Államtitkár\n              Okmányfelügyeleti Főosztály",
        "Registering authority: Document Management Department, Deputy State Secretariat responsible for registries, Ministry of Interior",
    ),
    ("Név:", "Name:"),
    ("Székhely:", "Registered office:"),
    ("Levelezési cím:", "Mailing address:"),
    ("Cégjegyzékszám:", "Company registration number:"),
    ("Adószám:", "Tax number:"),
    ("Képviselő neve:", "Name of representative:"),
    ("Telefonszám:", "Phone:"),
    ("Honlap:", "Website:"),
    ("Fogalmak", "Definitions"),
    ("Felek:", "Parties:"),
    ("Eladó és Vevő együttesen", "Seller and Buyer jointly"),
    (
        "Fogyasztó:",
        "Consumer:",
    ),
    (
        "a szakmája, önálló foglalkozása vagy üzleti tevékenysége körén kívül eljáró természetes személy",
        "a natural person acting outside their trade, profession, or business activity",
    ),
    (
        "Fogyasztói szerződés:",
        "Consumer contract:",
    ),
    (
        "olyan szerződés, melynek egyik alanya fogyasztónak minősül",
        "a contract where one of the parties qualifies as a consumer",
    ),
    (
        "Honlap: a jelen weboldal, amely a szerződés megkötésére szolgál",
        "Website: this website used to conclude the contract",
    ),
    (
        "Szerződés:",
        "Contract:",
    ),
    (
        "Eladó és Vevő között a Honlap és elektronikus levelezés igénybevételével létrejövő adásvételi\n              szerződés",
        "a sales contract between Seller and Buyer concluded via the Website and electronic mail",
    ),
    (
        "Távollévők közötti kommunikációt lehetővé tévő eszköz:",
        "Means of distance communication:",
    ),
    (
        "olyan eszköz, amely alkalmas a felek távollétében –\n              szerződés megkötése érdekében – szerződési nyilatkozat megtételére. Ilyen eszköz különösen a címzett vagy\n              a címzés nélküli nyomtatvány, a szabványlevél, a sajtótermékben közzétett hirdetés megrendelőlappal, a\n              katalógus, a telefon, a telefax és az internetes hozzáférést biztosító eszköz",
        "any device suitable for making contractual statements while the parties are apart for the purpose of concluding a contract, including in particular addressed or unaddressed forms, standard letters, order forms published in the press with advertisements, catalogues, telephone, fax, and devices providing internet access",
    ),
    (
        "Távollévők között kötött szerződés:",
        "Distance contract:",
    ),
    (
        "olyan fogyasztói szerződés, amelyet a szerződés szerinti termék vagy\n              szolgáltatás nyújtására szervezett távértékesítési rendszer keretében a felek egyidejű fizikai jelenléte\n              nélkül úgy kötnek meg, hogy a szerződés megkötése érdekében a szerződő felek kizárólag távollévők közötti\n              kommunikációt lehetővé tévő eszközt alkalmaznak",
        "a consumer contract concluded under an organized distance sales system for the supply of products or services, without simultaneous physical presence of the parties, using exclusively means of distance communication",
    ),
    (
        "Termék:",
        "Product:",
    ),
    (
        "a Honlap kínálatában szereplő, a Honlapon értékesítésre szánt minden birtokba vehető forgalomképes\n              ingó dolog, mely a Szerződés tárgyát képezi",
        "any movable item offered on the Website for sale that forms the subject of the Contract",
    ),
    (
        "Vállalkozás:",
        "Business:",
    ),
    (
        "a szakmája, önálló foglalkozása vagy üzleti tevékenysége körében eljáró személy",
        "a person acting in the course of their trade, profession, or business activity",
    ),
    (
        "Vevő/Ön:",
        "Buyer/You:",
    ),
    (
        "a Honlapon keresztül vételi ajánlatot tevő szerződést kötő személy",
        "the person making a purchase offer through the Website and concluding the contract",
    ),
    (
        "Jótállás: A fogyasztó és a vállalkozás között kötött szerződések esetén (a továbbiakban: fogyasztói\n              szerződés) a Polgári Törvénykönyv szerinti:",
        "Guarantee: for contracts between consumer and business (consumer contract) under the Civil Code:",
    ),
    (
        "a) a szerződés teljesítéséért vállalt jótállás, amelyet a vállalkozás a szerződés megfelelő teljesítéséért\n              a jogszabályi kötelezettségén túlmenően vagy annak hiányában önként vállal, valamint",
        "a) voluntary guarantee for proper performance beyond or in the absence of statutory obligation, and",
    ),
    ("b) a jogszabályon alapuló kötelező jótállás", "b) mandatory statutory guarantee"),
    ("Vonatkozó jogszabályok", "Applicable legislation"),
    (
        "A Szerződésre a magyar jog előírásai az irányadóak, és különösen az alábbi jogszabályok vonatkoznak:",
        "Hungarian law applies to the Contract, in particular the following legislation:",
    ),
    ("1997. évi CLV. törvény a fogyasztóvédelemről", "Act CLV of 1997 on consumer protection"),
    (
        "2001. évi CVIII. törvény az elektronikus kereskedelmi szolgáltatások, valamint az információs\n              társadalommal összefüggő szolgáltatások egyes kérdéseiről",
        "Act CVIII of 2001 on certain issues of electronic commerce and information society services",
    ),
    ("2013. évi V. törvény a Polgári Törvénykönyvről", "Act V of 2013 on the Civil Code"),
    (
        "151/2003. (IX.22.) kormányrendelet a tartós fogyasztási cikkekre vonatkozó kötelező jótállásról",
        "Government Decree 151/2003 (22.IX.) on mandatory guarantee for durable consumer goods",
    ),
    (
        "45/2014. (II.26.) kormányrendelet a fogyasztó és a vállalkozás közötti szerződések részletes szabályairól",
        "Government Decree 45/2014 (26.II.) on detailed rules of contracts between consumers and businesses",
    ),
    (
        "19/2014. (IV.29.) NGM rendelet a fogyasztó és vállalkozás közötti szerződés keretében eladott dolgokra\n              vonatkozó szavatossági és jótállási igények intézésének eljárási szabályairól",
        "NGM Decree 19/2014 (29.IV.) on procedural rules for warranty and guarantee claims for goods sold under consumer contracts",
    ),
    ("1999. évi LXXVI. törvény a szerzői jogról", "Act LXXVI of 1999 on copyright"),
    (
        "2011. évi CXII. törvény az információs önrendelkezési jogról és az információszabadságról",
        "Act CXII of 2011 on informational self-determination and freedom of information",
    ),
    ("Az ÁSZF-et a magyarországi törvények szabályozzák.", "These GTC are governed by the laws of Hungary."),
    ("Az ÁSZF hatálya, elfogadása", "Scope and acceptance of the GTC"),
    (
        "A közöttünk létrejövő szerződés tartalmát – a vonatkozó kötelező érvényű jogszabályok rendelkezései\n              mellett – a jelen Általános Szerződési Feltételek (a továbbiakban: ÁSZF) határozzák meg. Ennek megfelelően\n              tartalmazza a jelen ÁSZF az Önt és bennünket illető jogokat és kötelezettségeket, a szerződés\n              létrejöttének feltételeit, a teljesítési határidőket, a szállítási és fizetési feltételeket, a felelősségi\n              szabályokat, valamint az elállási jog gyakorlásának feltételeit.",
        "The content of the contract between us is defined by these General Terms and Conditions (GTC), alongside mandatory legal provisions. The GTC set out your and our rights and obligations, conditions for conclusion, performance deadlines, delivery and payment terms, liability rules, and conditions for exercising the right of withdrawal.",
    ),
    (
        "A Honlap használatához szükséges azon technikai tájékoztatást, melyet jelen ÁSZF nem tartalmaz, a Honlapon\n              elérhető egyéb tájékoztatások nyújtják.",
        "Technical information required to use the Website that is not included in these GTC is provided in other information available on the Website.",
    ),
    (
        "Ön a megrendelése véglegesítése előtt köteles megismerni a jelen ÁSZF rendelkezéseit. A webáruházunkon\n              keresztül történő vásárlással Ön elfogadja a jelen ÁSZF rendelkezéseit, és az ÁSZF maradéktalanul az Ön és\n              az Eladó között létrejövő szerződés részét képezi.",
        "You must read these GTC before finalizing your order. By purchasing through our webshop you accept these GTC, which form an integral part of the contract between you and the Seller.",
    ),
    ("A szerződés nyelve, a szerződés formája", "Language and form of the contract"),
    ("A jelen ÁSZF hatálya alá tartozó szerződések nyelve a magyar nyelv.", "The language of contracts under these GTC is Hungarian."),
    (
        "A jelen ÁSZF hatálya alá tartozó szerződések nem minősülnek írásba foglalt szerződéseknek, azokat az Eladó\n            nem iktatja.",
        "Contracts under these GTC are not considered written contracts and are not filed by the Seller.",
    ),
    ("Árak", "Prices"),
    (
        "Az árak forintban értendők. Az árak tájékoztató jellegűek. Nem zárható ki annak a lehetősége, hogy\n              üzletpolitikai okból az Eladó az árakat módosítsa. Az árak módosítása nem terjed ki a már megkötött\n              szerződésekre. Amennyiben Eladó az árat hibásan tüntette fel, a már megkötött szerződések esetében az ÁSZF\n              „Eljárás hibás ár” pontja alapján jár el.",
        "Prices are in Hungarian forints (HUF). Prices are indicative. The Seller may change prices for business policy reasons; changes do not affect already concluded contracts. If the Seller displayed an incorrect price, the procedure under “Incorrect price” in these GTC applies to existing contracts.",
    ),
    ("Panaszügyintézés és jogérvényesítési lehetőségek", "Complaint handling and legal remedies"),
    (
        "A fogyasztó a termékkel vagy az Eladó tevékenységével kapcsolatos fogyasztói kifogásait az alábbi\n              elérhetőségeken terjesztheti elő:",
        "The consumer may submit complaints regarding the product or the Seller's activity at the following contacts:",
    ),
    ("Internet cím:", "Website:"),
    (
        "szóban vagy írásban közölheti a vállalkozással a panaszát",
        "may communicate their complaint to the business orally or in writing",
    ),
    (
        "A szóbeli panaszt a vállalkozás köteles azonnal megvizsgálni, és szükség szerint orvosolni.",
        "The business must examine oral complaints immediately and remedy them if necessary.",
    ),
    ("Az írásbeli panaszt a vállalkozás", "The business must respond to written complaints"),
    (
        "harminc napon belül köteles írásban érdemben megválaszolni és intézkedni annak közlése iránt.",
        "within thirty days of receipt in writing with a substantive response and action.",
    ),
    ("A panaszról felvett jegyzőkönyvnek tartalmaznia kell az alábbiakat:", "The complaint record must contain:"),
    ("a fogyasztó neve, lakcíme,", "the consumer's name and address,"),
    ("a panasz előterjesztésének helye, ideje, módja,", "place, time, and method of submitting the complaint,"),
    (
        "a fogyasztó panaszának részletes leírása, a fogyasztó által bemutatott iratok, dokumentumok és egyéb\n                bizonyítékok jegyzéke,",
        "detailed description of the complaint and list of documents and evidence presented,",
    ),
    (
        "a vállalkozás nyilatkozata a fogyasztó panaszával kapcsolatos álláspontjáról, amennyiben a panasz\n                azonnali kivizsgálása lehetséges,",
        "the business's statement on the complaint if immediate investigation is possible,",
    ),
    (
        "a jegyzőkönyvet felvevő személy és – telefonon vagy egyéb elektronikus hírközlési szolgáltatás\n                felhasználásával közölt szóbeli panasz kivételével – a fogyasztó aláírása,",
        "signature of the person recording the minutes and, except for oral complaints by phone or electronic communication, the consumer's signature,",
    ),
    ("a jegyzőkönyv felvételének helye, ideje,", "place and time of recording,"),
    (
        "telefonon vagy egyéb elektronikus hírközlési szolgáltatás felhasználásával közölt szóbeli panasz esetén\n                a panasz egyedi azonosítószáma.",
        "unique identifier of the complaint for oral complaints by phone or electronic communication.",
    ),
    (
        "A vállalkozás a panaszról felvett jegyzőkönyvet és a válasz másolati példányát öt évig köteles megőrizni,\n              és azt az ellenőrző hatóságoknak kérésükre bemutatni.",
        "The business must keep the complaint record and a copy of the response for five years and present them to supervisory authorities upon request.",
    ),
    ("Online vitarendezési platform", "Online dispute resolution platform"),
    ("Szerzői jogok", "Copyright"),
    ("Részleges érvénytelenség, magatartási kódex", "Partial invalidity, code of conduct"),
    (
        "A digitális adattartalom működése, műszaki védelmi intézkedések",
        "Operation of digital content, technical protection measures",
    ),
    (
        "A termékek lényeges tulajdonságaira vonatkozó tájékoztatás",
        "Information on essential characteristics of products",
    ),
    (
        "Az adatbeviteli hibák javítása – Felelősség a megadott adatok valóságáért",
        "Correction of data entry errors – responsibility for accuracy of data provided",
    ),
    ("Eljárás hibás ár esetén", "Procedure in case of incorrect price"),
    ("A Weboldal használata", "Use of the Website"),
    ("A vásárlás folyamata", "Purchase process"),
    ("Rendelés feldolgozása, a szerződés létrejötte", "Order processing and conclusion of the contract"),
    ("Fizetési módok", "Payment methods"),
    ("Készpénzes fizetés", "Cash payment"),
    ("Bankkártyás fizetés", "Card payment"),
    ("Átvételi módok, átvételi díjak", "Delivery methods and fees"),
    ("Kiszállítás", "Delivery"),
    ("Teljesítési határidő", "Performance deadline"),
    ("Jogfenntartás, tulajdonjogi kikötés", "Retention of title"),
    ("Külföldre történő értékesítés", "Sales abroad"),
    (
        "Fogyasztói tájékoztató a 45/2014. (II. 26.) Korm. rendelet alapján",
        "Consumer information under Government Decree 45/2014 (26.II.)",
    ),
    ("Tartalomjegyzék", "Table of contents"),
    ("Fogyasztói tájékoztató", "Consumer information"),
    ("Elállási jog", "Right of withdrawal"),
    ("Szavatossági jogok", "Warranty rights"),
    (
        "Tájékoztató a fogyasztó vevőt megillető elállási jogról",
        "Information on the consumer buyer's right of withdrawal",
    ),
    (
        "Elállási nyilatkozat, a fogyasztót megillető elállási vagy felmondási jog gyakorlása",
        "Withdrawal statement and exercise of withdrawal or termination rights",
    ),
    ("A fogyasztó elállási nyilatkozatának érvényessége", "Validity of the consumer's withdrawal statement"),
    ("Az Eladó kötelezettségei a fogyasztó elállása esetén", "Seller's obligations when the consumer withdraws"),
    ("Az Eladó visszatérítési kötelezettsége", "Seller's refund obligation"),
    ("Az Eladó visszatérítési kötelezettségének módja", "Method of the Seller's refund"),
    ("Többletköltségek", "Extra costs"),
    ("Visszatartási jog", "Right of retention"),
    (
        "A fogyasztó kötelezettségei elállása vagy felmondása esetén",
        "Consumer's obligations upon withdrawal or termination",
    ),
    ("A termék visszaszolgáltatása", "Return of the product"),
    (
        "A termék visszaszolgáltatásával kapcsolatos költségek viselése",
        "Bearing costs related to returning the product",
    ),
    ("Fogyasztó felelőssége az értékcsökkenésért", "Consumer liability for diminution in value"),
    ("Az elállási jog az alábbi esetekben nem gyakorolható", "Withdrawal may not be exercised in the following cases"),
    ("Kellékszavatosság, termékszavatosság, jótállás", "Legal conformity warranty, product warranty, guarantee"),
    ("Kellékszavatosság", "Legal conformity (statutory) warranty"),
    ("Termékszavatosság", "Product warranty"),
    ("Jótállás", "Guarantee"),
    ("Elállási nyilatkozat minta", "Withdrawal form template"),
    ("Címzett:", "Addressee:"),
    ("Megrendelés időpontja /átvétel időpontja:", "Order date / date of receipt:"),
    ("Fogyasztó(k) neve:", "Name(s) of consumer(s):"),
    ("Fogyasztó(k) címe:", "Address(es) of consumer(s):"),
    (
        "A fogyasztó(k) aláírása (kizárólag írásban történő értesítés esetén):",
        "Signature(s) of consumer(s) (written notification only):",
    ),
    ("Dátum:", "Date:"),
    ("Cím:", "Address:"),
    ("Megyei Békéltető Testület", "County Conciliation Board"),
    ("Budapesti Békéltető Testület", "Budapest Conciliation Board"),
    (
        "Az egyes területileg illetékes Békéltető Testületek elérhetőségei:",
        "Contact details of territorially competent Conciliation Boards:",
    ),
    (
        "A területileg illetékes Békéltető Testületekről bővebb információ itt érhető el:",
        "More information on territorially competent Conciliation Boards is available at:",
    ),
    (
        "A Békéltető Testületekről bővebb információ itt érhető el:",
        "More information on Conciliation Boards is available at:",
    ),
    ("A Termék kiválasztása", "Selecting the product"),
    ("Kosárba helyezés", "Adding to cart"),
    ("A Kosár megtekintése", "Viewing the cart"),
    ("Vásárlói adatok megadása", "Entering customer details"),
    ("A rendelés véglegesítése", "Finalizing the order"),
    ("Rendelés lemondása", "Order cancellation"),
    ("Nyilvánvalóan hibásan feltüntetett árnak minősül:", "The following qualify as obviously incorrect prices:"),
    ("0 Ft-os ár,", "HUF 0 price,"),
    ("Három munkanapon belüli csereigény", "Three working day replacement claim"),
    ("Milyen esetben élhet Ön a kellékszavatossági jogával?", "When can you exercise legal conformity warranty?"),
    (
        "Milyen jogok illetik meg Önt kellékszavatossági igénye alapján?",
        "What rights do you have under legal conformity warranty?",
    ),
    (
        "Milyen határidőben érvényesítheti Ön kellékszavatossági igényét?",
        "Within what time limit can you exercise legal conformity warranty?",
    ),
    ("Kivel szemben érvényesítheti kellékszavatossági igényét?", "Against whom can you assert legal conformity warranty?"),
    (
        "Milyen egyéb feltétele van kellékszavatossági jogai érvényesítésének?",
        "What other conditions apply to exercising legal conformity warranty?",
    ),
    ("Milyen esetben élhet Ön a termékszavatossági jogával?", "When can you exercise product warranty?"),
    (
        "Milyen jogok illetik meg Önt termékszavatossági igénye alapján?",
        "What rights do you have under product warranty?",
    ),
    ("Milyen esetben minősül a termék hibásnak?", "When is a product defective?"),
    (
        "Milyen határidőben érvényesítheti Ön termékszavatossági igényét?",
        "Within what time limit can you exercise product warranty?",
    ),
    (
        "Kivel szemben és milyen egyéb feltétellel érvényesítheti termékszavatossági igényét?",
        "Against whom and under what conditions can you assert product warranty?",
    ),
    (
        "A gyártó (forgalmazó) milyen esetben mentesül termékszavatossági kötelezettsége alól?",
        "When is the manufacturer (distributor) exempt from product warranty?",
    ),
    ("Milyen esetben élhet Ön a jótállási jogával?", "When can you exercise guarantee rights?"),
    (
        "Önt milyen jogok és milyen határidőn belül illetik meg jótállás alapján?",
        "What rights and time limits apply to you under guarantee?",
    ),
    ("Mi a viszonya a jótállásnak más szavatossági jogokkal?", "How does guarantee relate to other warranty rights?"),
    ("Mikor mentesül az Eladó a jótállási kötelezettsége alól?", "When is the Seller exempt from guarantee?"),
]

# Load extended replacements from companion module if present
try:
    from terms_en_replacements_extra import EXTRA_REPLACEMENTS  # type: ignore

    REPLACEMENTS = EXTRA_REPLACEMENTS + REPLACEMENTS
except ImportError:
    pass

REPLACEMENTS.sort(key=lambda pair: len(pair[0]), reverse=True)


def main() -> None:
    text = EN.read_text(encoding="utf-8")
    for hu, en in REPLACEMENTS:
        text = text.replace(hu, en)
    EN.write_text(text, encoding="utf-8")
    print(f"Updated {EN}")


if __name__ == "__main__":
    main()
