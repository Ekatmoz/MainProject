import {
  Box,
  Heading,
  Text,
  Stack,
  VStack,
  Container,
  Divider,
  OrderedList,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';

const TermsAndConditions = () => {
  return (
    <Stack spacing={8} direction='row'>
      <Box m={25} p={25} shadow='md' borderWidth='1px'>
        <Heading fontSize='2xl' display='flex' justifyContent='center'>
          Általános Szerződési Feltételek (ÁSZF)
        </Heading>
        <VStack>
          <Container maxW='md' centerContent>
            <Text mt={4}>www.aranysarkany.hu</Text>
            <Text>Hatályos ettől a naptól: 2024.03.30. </Text>
          </Container>

          <Container maxW='md' centerContent>
            <Heading as='h4' size='md' display='flex' justifyContent='center'>
              A szolgáltató (Eladó, Vállalkozó) adatai:
            </Heading>
            <Text>Név: Sushi Bar Hungary Kft.</Text>
            <Text>Székhely: 8600, Siófok, Vitorlás u. 1.-3</Text>
            <Text>Levelezési cím: 8600, Siófok, Gyöngy ut. 11</Text>
            <Text>
              Nyilvántartásba vevő hatóság: Belügyminisztérium Nyilvántartások Vezetéséért Felelős Helyettes Államtitkár
              Okmányfelügyeleti Főosztály
            </Text>
            <Text>Cégjegyzékszám:14-09-317686</Text>
            <Text>Adószám: 28731199-2-14</Text>
            <Text>Képviselő neve: Szén Róbert</Text>
            <Text>Telefonszám: +36 70 791 6990</Text>
            <Text>E-mail: info@sushibarhungary.hu</Text>
            <Text>Honlap: www.aranysarkany.hu</Text>
          </Container>
          <Divider />
          <Heading as='h4' size='md'>
            Fogalmak
          </Heading>
          <Stack>
            <Text>Felek: Eladó és Vevő együttesen</Text>
            <Text>
              Fogyasztó: a szakmája, önálló foglalkozása vagy üzleti tevékenysége körén kívül eljáró természetes személy
            </Text>
            <Text>Fogyasztói szerződés: olyan szerződés, melynek egyik alanya fogyasztónak minősül</Text>
            <Text>Honlap: a jelen weboldal, amely a szerződés megkötésére szolgál</Text>
            <Text>
              Szerződés: Eladó és Vevő között a Honlap és elektronikus levelezés igénybevételével létrejövő adásvételi
              szerződés
            </Text>
            <Text>
              Távollévők közötti kommunikációt lehetővé tévő eszköz: olyan eszköz, amely alkalmas a felek távollétében –
              szerződés megkötése érdekében – szerződési nyilatkozat megtételére. Ilyen eszköz különösen a címzett vagy
              a címzés nélküli nyomtatvány, a szabványlevél, a sajtótermékben közzétett hirdetés megrendelőlappal, a
              katalógus, a telefon, a telefax és az internetes hozzáférést biztosító eszköz
            </Text>
            <Text>
              Távollévők között kötött szerződés: olyan fogyasztói szerződés, amelyet a szerződés szerinti termék vagy
              szolgáltatás nyújtására szervezett távértékesítési rendszer keretében a felek egyidejű fizikai jelenléte
              nélkül úgy kötnek meg, hogy a szerződés megkötése érdekében a szerződő felek kizárólag távollévők közötti
              kommunikációt lehetővé tévő eszközt alkalmaznak
            </Text>
            <Text>
              Termék: a Honlap kínálatában szereplő, a Honlapon értékesítésre szánt minden birtokba vehető forgalomképes
              ingó dolog, mely a Szerződés tárgyát képezi 
            </Text>
            <Text>Vállalkozás: a szakmája, önálló foglalkozása vagy üzleti tevékenysége körében eljáró személy</Text>
            <Text>Vevő/Ön: a Honlapon keresztül vételi ajánlatot tevő szerződést kötő személy</Text>
            <Text>
              Jótállás: A fogyasztó és a vállalkozás között kötött szerződések esetén (a továbbiakban: fogyasztói
              szerződés) a Polgári Törvénykönyv szerinti:
            </Text>
            <Text>
              a) a szerződés teljesítéséért vállalt jótállás, amelyet a vállalkozás a szerződés megfelelő teljesítéséért
              a jogszabályi kötelezettségén túlmenően vagy annak hiányában önként vállal, valamint
            </Text>
            <Text>b) a jogszabályon alapuló kötelező jótállás</Text>
          </Stack>
          <Divider my={6} />
          <Heading as='h4' size='md'>
            Vonatkozó jogszabályok
          </Heading>
          <Stack>
            <Text>
              A Szerződésre a magyar jog előírásai az irányadóak, és különösen az alábbi jogszabályok vonatkoznak:
            </Text>
            <Text>1997. évi CLV. törvény a fogyasztóvédelemről</Text>
            <Text>
              2001. évi CVIII. törvény az elektronikus kereskedelmi szolgáltatások, valamint az információs
              társadalommal összefüggő szolgáltatások egyes kérdéseiről
            </Text>
            <Text>2013. évi V. törvény a Polgári Törvénykönyvről</Text>
            <Text>151/2003. (IX.22.) kormányrendelet a tartós fogyasztási cikkekre vonatkozó kötelező jótállásról</Text>
            <Text>
              45/2014. (II.26.) kormányrendelet a fogyasztó és a vállalkozás közötti szerződések részletes szabályairól
            </Text>
            <Text>
              19/2014. (IV.29.) NGM rendelet a fogyasztó és vállalkozás közötti szerződés keretében eladott dolgokra
              vonatkozó szavatossági és jótállási igények intézésének eljárási szabályairól
            </Text>
            <Text>1999. évi LXXVI. törvény a szerzői jogról</Text>
            <Text>2011. évi CXII. törvény az információs önrendelkezési jogról és az információszabadságról</Text>
            <Text>
              AZ EURÓPAI PARLAMENT ÉS A TANÁCS (EU) 2018/302 RENDELETE (2018. február 28.) a belső piacon belül a vevő
              állampolgársága, lakóhelye vagy letelepedési helye alapján történő indokolatlan területi alapú
              tartalomkorlátozással és a megkülönböztetés egyéb formáival szembeni fellépésről, valamint a 2006/2004/EK
              és az (EU) 2017/2394 rendelet, továbbá a 2009/22/EK irányelv módosításáról
            </Text>
            <Text>
              AZ EURÓPAI PARLAMENT ÉS A TANÁCS (EU) 2016/679 RENDELETE (2016. április 27.) a természetes személyeknek a
              személyes adatok kezelése tekintetében történő védelméről és az ilyen adatok szabad áramlásáról, valamint
              a 95/46/EK rendelet hatályon kívül helyezéséről (általános adatvédelmi rendelet)
            </Text>
            <Text>Az ÁSZF-et a magyarországi törvények szabályozzák.</Text>
          </Stack>
          <Divider my={6} />
          <Heading as='h4' size='md'>
            Az ÁSZF hatálya, elfogadása
          </Heading>
          <Stack>
            <Text>
              A közöttünk létrejövő szerződés tartalmát – a vonatkozó kötelező érvényű jogszabályok rendelkezései
              mellett – a jelen Általános Szerződési Feltételek (a továbbiakban: ÁSZF) határozzák meg. Ennek megfelelően
              tartalmazza a jelen ÁSZF az Önt és bennünket illető jogokat és kötelezettségeket, a szerződés
              létrejöttének feltételeit, a teljesítési határidőket, a szállítási és fizetési feltételeket, a felelősségi
              szabályokat, valamint az elállási jog gyakorlásának feltételeit.
            </Text>
            <Text>
              A Honlap használatához szükséges azon technikai tájékoztatást, melyet jelen ÁSZF nem tartalmaz, a Honlapon
              elérhető egyéb tájékoztatások nyújtják.
            </Text>
            <Text>
              Ön a megrendelése véglegesítése előtt köteles megismerni a jelen ÁSZF rendelkezéseit. A webáruházunkon
              keresztül történő vásárlással Ön elfogadja a jelen ÁSZF rendelkezéseit, és az ÁSZF maradéktalanul az Ön és
              az Eladó között létrejövő szerződés részét képezi.
            </Text>
          </Stack>
          <Heading as='h4' size='md'>
            A szerződés nyelve, a szerződés formája
          </Heading>
          <Stack>
            <Text>A jelen ÁSZF hatálya alá tartozó szerződések nyelve a magyar nyelv.</Text>
            <Text>
              A jelen ÁSZF hatálya alá tartozó szerződések nem minősülnek írásba foglalt szerződéseknek, azokat az Eladó
              nem iktatja.
            </Text>
          </Stack>
          <Heading as='h4' size='md'>
            Árak
          </Heading>
          <Stack>
            <Text>
              Az árak forintban értendők. Az árak tájékoztató jellegűek. Nem zárható ki annak a lehetősége, hogy
              üzletpolitikai okból az Eladó az árakat módosítsa. Az árak módosítása nem terjed ki a már megkötött
              szerződésekre. Amennyiben Eladó az árat hibásan tüntette fel, a már megkötött szerződések esetében az ÁSZF
              „Eljárás hibás ár” pontja alapján jár el.
            </Text>
          </Stack>

          <Heading as='h4' size='md'>
            Panaszügyintézés és jogérvényesítési lehetőségek
          </Heading>
          <Stack>
            <Text>
              A fogyasztó a termékkel vagy az Eladó tevékenységével kapcsolatos fogyasztói kifogásait az alábbi
              elérhetőségeken terjesztheti elő:
            </Text>
            <UnorderedList>
              <ListItem>Telefon: +36 70 791 6990</ListItem>
              <ListItem>Internet cím: https://aranysarkany.hu</ListItem>
              <ListItem>E-mail: info@sushibarhungary.hu</ListItem>
            </UnorderedList>
            <Text>
              A fogyasztó{' '}
              <Text as='span' fontWeight='bold'>
                szóban vagy írásban közölheti a vállalkozással a panaszát
              </Text>
              , amely a vállalkozásnak, illetve a vállalkozás érdekében vagy javára eljáró személynek az áru fogyasztók
              részére történő forgalmazásával, illetve értékesítésével közvetlen kapcsolatban álló magatartására,
              tevékenységére vagy mulasztására vonatkozik.
            </Text>
            <Text>
              <Box as='span' fontWeight='bold'>
                A szóbeli panaszt a vállalkozás köteles azonnal megvizsgálni, és szükség szerint orvosolni.
              </Box>{' '}
              Ha a fogyasztó a panasz kezelésével nem ért egyet, vagy a panasz azonnali kivizsgálása nem lehetséges, a
              vállalkozás a panaszról és az azzal kapcsolatos álláspontjáról haladéktalanul köteles jegyzőkönyvet
              felvenni, és annak egy másolati példányát személyesen közölt szóbeli panasz esetén helyben a fogyasztónak
              átadni. Telefonon vagy egyéb elektronikus hírközlési szolgáltatás felhasználásával közölt szóbeli panasz
              esetén a fogyasztónak legkésőbb 30 napon belül – az írásbeli panaszra adott válaszra vonatkozó
              előírásoknak megfelelően – az érdemi válasszal egyidejűleg megküldeni. Egyebekben pedig az írásbeli
              panaszra vonatkozóan az alábbiak szerint köteles eljárni.{' '}
              <Box as='span' fontWeight='bold'>
                Az írásbeli panaszt a vállalkozás
              </Box>{' '}
              – ha az Európai Unió közvetlenül alkalmazandó jogi aktusa eltérően nem rendelkezik – a beérkezését
              követően
              <Box as='span' fontWeight='bold'>
                harminc napon belül köteles írásban érdemben megválaszolni és intézkedni annak közlése iránt.
              </Box>{' '}
              Ennél rövidebb határidőt jogszabály, hosszabb határidőt törvény állapíthat meg. A panaszt elutasító
              álláspontját a vállalkozás indokolni köteles. A telefonon vagy elektronikus hírközlési szolgáltatás
              felhasználásával közölt szóbeli panaszt a vállalkozás köteles egyedi azonosítószámmal ellátni.
            </Text>
            <Text>A panaszról felvett jegyzőkönyvnek tartalmaznia kell az alábbiakat:</Text>
            <OrderedList>
              <ListItem>a fogyasztó neve, lakcíme,</ListItem>
              <ListItem>a panasz előterjesztésének helye, ideje, módja,</ListItem>
              <ListItem>
                a fogyasztó panaszának részletes leírása, a fogyasztó által bemutatott iratok, dokumentumok és egyéb
                bizonyítékok jegyzéke,
              </ListItem>
              <ListItem>
                a vállalkozás nyilatkozata a fogyasztó panaszával kapcsolatos álláspontjáról, amennyiben a panasz
                azonnali kivizsgálása lehetséges,
              </ListItem>
              <ListItem>
                a jegyzőkönyvet felvevő személy és – telefonon vagy egyéb elektronikus hírközlési szolgáltatás
                felhasználásával közölt szóbeli panasz kivételével – a fogyasztó aláírása,
              </ListItem>
              <ListItem>a jegyzőkönyv felvételének helye, ideje,</ListItem>
              <ListItem>
                telefonon vagy egyéb elektronikus hírközlési szolgáltatás felhasználásával közölt szóbeli panasz esetén
                a panasz egyedi azonosítószáma.
              </ListItem>
            </OrderedList>
            <Text>
              A vállalkozás a panaszról felvett jegyzőkönyvet és a válasz másolati példányát öt évig köteles megőrizni,
              és azt az ellenőrző hatóságoknak kérésükre bemutatni.
            </Text>
            <Text>
              A panasz elutasítása esetén a vállalkozás köteles a fogyasztót írásban tájékoztatni arról, hogy panaszával
              – annak jellege szerint – mely hatóság vagy békéltető testület eljárását kezdeményezheti. A
              tájékoztatásnak tartalmaznia kell továbbá az illetékes hatóság, illetve a fogyasztó lakóhelye vagy
              tartózkodási helye szerinti békéltető testület székhelyét, telefonos és internetes elérhetőségét, valamint
              levelezési címét. A tájékoztatásnak arra is ki kell terjednie, hogy a vállalkozás a fogyasztói jogvita
              rendezése érdekében igénybe veszi-e a békéltető testületi eljárást.
            </Text>
            <Text>
              Amennyiben az Eladó és a fogyasztó között esetlegesen fennálló fogyasztói jogvita a tárgyalások során nem
              rendeződik, az alábbi jogérvényesítési lehetőségek állnak nyitva a fogyasztó számára:
            </Text>
            <Text>
              Panasztétel a{' '}
              <Box as='span' fontWeight='bold'>
                fogyasztóvédelmi hatóságoknál.{' '}
              </Box>{' '}
              Amennyiben a fogyasztó fogyasztói jogainak megsértését észleli, jogosult panasszal fordulni a lakóhelye
              szerint illetékes fogyasztóvédelmi hatósághoz. A panasz elbírálását követően a hatóság dönt a
              fogyasztóvédelmi eljárás lefolytatásáról. A fogyasztóvédelmi elsőfokú hatósági feladatokat a fogyasztó
              lakóhelye szerint illetékes fővárosi és megyei kormányhivatalok látják el, ezek listája itt található:
              https://www.kormanyhivatal.hu/{' '}
              <Text>
                <Box as='span' fontWeight='bold'>
                  Bírósági eljárás.{' '}
                </Box>{' '}
                Ügyfél jogosult a fogyasztói jogvitából származó követelésének bíróság előtti érvényesítésére polgári
                eljárás keretében a Polgári Törvénykönyvről szóló 2013. évi V. törvény, valamint a Polgári
                Perrendtartásról szóló 2016. évi CXXX. törvény rendelkezései szerint.
              </Text>
            </Text>
            <Text>
              Tájékoztatjuk, hogy Ön velünk szemben fogyasztói panasszal élhet. Amennyiben az Ön fogyasztói panaszát
              elutasítjuk, úgy Ön jogosult az Ön lakóhelye vagy tartózkodási helye szerint illetékes Békéltető
              Testülethez is fordulni: a békéltető testület eljárása megindításának feltétele, hogy a fogyasztó az
              érintett vállalkozással közvetlenül megkísérelje a vitás ügy rendezését. Az eljárásra – a fogyasztó erre
              irányuló kérelme alapján – az illetékes testület helyett a fogyasztó kérelmében megjelölt békéltető
              testület illetékes.
            </Text>
            <Text>A vállalkozást a békéltető testületi eljárásban együttműködési kötelezettség terheli.</Text>
            <Text>
              Ennek keretében fennáll a vállalkozásoknak a békéltető testület felhívására történő{' '}
              <Box as='span' fontWeight='bold'>
                válaszirat megküldési kötelezettsége
              </Box>{' '}
              , továbbá kötelezettségként kerül rögzítésre a békéltető testület előtti{' '}
              <Box as='span' fontWeight='bold'>
                megjelenési kötelezettség
              </Box>{' '}
              („meghallgatáson egyezség létrehozatalára feljogosított személy részvételének biztosítása”).
            </Text>
            <Text>
              Amennyiben a vállalkozás székhelye vagy telephelye nem a területileg illetékes békéltető testületet
              működtető kamara szerinti megyébe van bejegyezve, a vállalkozás együttműködési kötelezettsége a fogyasztó
              igényének megfelelő írásbeli egyezségkötés lehetőségének felajánlására terjed ki.
            </Text>
            <Text>
              A fenti együttműködési kötelezettség megszegése esetén a fogyasztóvédelmi hatóság rendelkezik hatáskörrel,
              amely alapján a jogszabályváltozás következtében a vállalkozások jogsértő magatartása esetén{' '}
              <Box as='span' fontWeight='bold'>
                kötelező bírságkiszabás
              </Box>{' '}
              alkalmazandó, bírságtól való eltekintésre nincs lehetőség. A fogyasztóvédelemről szóló törvény mellett
              módosításra került a kis- és középvállalkozásokról szóló törvény vonatkozó rendelkezése is, így a kis- és
              középvállalkozások esetén sem mellőzhető majd a bírság kiszabása.
            </Text>
            <Text>
              A bírság mértéke kis- és középvállalkozások esetén 15 ezer forinttól 500 ezer forintig terjedhet, míg a
              számviteli törvény hatálya alá tartozó, 100 millió forintot meghaladó éves nettó árbevétellel rendelkező,
              nem kis- és középvállalkozás esetén 15 ezer forinttól, a vállalkozás éves nettó árbevételének 5%-áig, de
              legfeljebb 500 millió forintig terjedhet. A kötelező bírság bevezetésével a jogalkotó a békéltető
              testületekkel való együttműködés nyomatékosítását, illetve a vállalkozásoknak a békéltető testületi
              eljárásban való aktív részvételének biztosítását célozza.
            </Text>
            <Text>
              A békéltető testület hatáskörébe tartozik a fogyasztói jogvita bírósági eljáráson kívüli rendezése. A
              békéltető testület feladata, hogy megkísérelje a fogyasztói jogvita rendezése céljából egyezség
              létrehozását a felek között, ennek eredménytelensége esetén az ügyben döntést hoz a fogyasztói jogok
              egyszerű, gyors, hatékony és költségkímélő érvényesítésének biztosítása érdekében. A békéltető testület a
              fogyasztó vagy a vállalkozás kérésére tanácsot ad a fogyasztót megillető jogokkal és a fogyasztót terhelő
              kötelezettségekkel kapcsolatban.
            </Text>
            <Text>
              A békéltető testület eljárása a fogyasztó kérelmére indul. A kérelmet a békéltető testület elnökéhez kell
              írásban benyújtani: az írásbeliség követelményének levél, távirat, távgépíró vagy telefax útján, továbbá
              bármely egyéb olyan eszközzel is eleget lehet tenni, amely a címzett számára lehetővé teszi a neki címzett
              adatoknak az adat céljának megfelelő ideig történő tartós tárolását, és a tárolt adatok változatlan
              formában és tartalommal történő megjelenítését.
            </Text>
            <Text>A kérelemnek tartalmaznia kell:</Text>
            <OrderedList>
              <ListItem>a fogyasztó neve, lakcíme,</ListItem>
              <ListItem>a panasz előterjesztésének helye, ideje, módja,</ListItem>
              <ListItem>
                a fogyasztó panaszának részletes leírása, a fogyasztó által bemutatott iratok, dokumentumok és egyéb
                bizonyítékok jegyzéke,
              </ListItem>
              <ListItem>
                a vállalkozás nyilatkozata a fogyasztó panaszával kapcsolatos álláspontjáról, amennyiben a panasz
                azonnali kivizsgálása lehetséges,
              </ListItem>
              <ListItem>
                a jegyzőkönyvet felvevő személy és – telefonon vagy egyéb elektronikus hírközlési szolgáltatás
                felhasználásával közölt szóbeli panasz kivételével – a fogyasztó aláírása,
              </ListItem>
              <ListItem>a jegyzőkönyv felvételének helye, ideje,</ListItem>
              <ListItem>
                telefonon vagy egyéb elektronikus hírközlési szolgáltatás felhasználásával közölt szóbeli panasz esetén
                a panasz egyedi azonosítószáma.
              </ListItem>
            </OrderedList>
          </Stack>
        </VStack>
      </Box>
    </Stack>
  );
};

export default TermsAndConditions;
