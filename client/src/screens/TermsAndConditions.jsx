import {
  Box,
  Heading,
  Text,
  SimpleGrid,
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
          <Text>A jelen ÁSZF hatálya alá tartozó szerződések nyelve a magyar nyelv.</Text>
          <Text>
            A jelen ÁSZF hatálya alá tartozó szerződések nem minősülnek írásba foglalt szerződéseknek, azokat az Eladó
            nem iktatja.
          </Text>
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
            <UnorderedList styleType='lower-alpha'>
              <ListItem>a fogyasztó nevét, lakóhelyét vagy tartózkodási helyét,</ListItem>
              <ListItem>
                a fogyasztói jogvitával érintett vállalkozás nevét, székhelyét vagy érintett telephelyét,
              </ListItem>
              <ListItem>
                ha a fogyasztó az illetékességet az illetékes békéltető testület helyett kérelmezett testület
                megjelölését,
              </ListItem>
              <ListItem>
                a fogyasztó álláspontjának rövid leírását, az azt alátámasztó tényeket és azok bizonyítékait,
              </ListItem>
              <ListItem>
                a fogyasztó nyilatkozatát arról, hogy a fogyasztó az érintett vállalkozással közvetlenül megkísérelte a
                vitás ügy rendezését
              </ListItem>
              <ListItem>
                a fogyasztó nyilatkozatát arra nézve, hogy az ügyben más békéltető testület eljárását nem kezdeményezte,
                közvetítői eljárás nem indult, keresetlevél beadására, illetve fizetési meghagyás kibocsátása iránti
                kérelem előterjesztésére nem került sor,
              </ListItem>
              <ListItem>a testület döntésére irányuló indítványt,</ListItem>
              <ListItem>a fogyasztó aláírását.</ListItem>
            </UnorderedList>
            <Text>
              A kérelemhez csatolni kell azt az okiratot, illetve annak másolatát (kivonatát), amelynek tartalmára a
              fogyasztó bizonyítékként hivatkozik, így különösen a vállalkozás írásbeli nyilatkozatát a panasz
              elutasításáról, ennek hiányában a fogyasztó rendelkezésére álló egyéb írásos bizonyítékot az előírt
              egyeztetés megkísérléséről.
            </Text>
            <Text>Ha a fogyasztó meghatalmazott útján jár el, a kérelemhez csatolni kell a meghatalmazást.</Text>
            <Text>
              A Békéltető Testületekről bővebb információ itt érhető el:{' '}
              <a href='http://www.bekeltetes.hu' style={{ color: 'blue' }}>
                http://www.bekeltetes.hu
              </a>{' '}
            </Text>
            <Text>A területileg illetékes Békéltető Testületekről bővebb információ itt érhető el:</Text>
            <a href='https://bekeltetes.hu/index.php?id=testuletek' style={{ color: 'blue' }}>
              https://bekeltetes.hu/index.php?id=testuletek
            </a>
            <Text fontWeight='bold'>Az egyes területileg illetékes Békéltető Testületek elérhetőségei:</Text>
          </Stack>
          <SimpleGrid
            columns={2}
            columnGap={16}
            rowGap='4'
            alignSelf='flex-start'
            justifySelf='flex-start'
            fontSize='sm'
          >
            <Box>
              <UnorderedList styleType='none'>
                <ListItem fontWeight='bold'>Baranya Megyei Békéltető Testület</ListItem>
                <ListItem>Cím: 7625 Pécs, Majorossy I. u. 36.</ListItem>
                <ListItem>Telefonszám: 06-72-507-154</ListItem>
                <ListItem>Fax: 06-72-507-152</ListItem>
                <ListItem>
                  E-mail:
                  <a href='mailto:abeck@pbkik.hu;mbonyar@pbkik.hu' style={{ color: 'blue' }}>
                    abeck@pbkik.hu; mbonyar@pbkik.hu
                  </a>
                </ListItem>
              </UnorderedList>
              <UnorderedList styleType='none' mt={8}>
                <ListItem fontWeight='bold'>Bács-Kiskun Megyei Békéltető Testület</ListItem>
                <ListItem>Cím: 6000 Kecskemét, Árpád krt. 4.</ListItem>
                <ListItem>Telefonszám: 06-76-501-500; 06-76-501-525, 06-76-501-523</ListItem>
                <ListItem>Fax: 06-76-501-538</ListItem>
                <ListItem>
                  E-mail:
                  <a href='mailto: bekeltetes@bacsbekeltetes.hu; mariann.matyus@bkmkik.hu' style={{ color: 'blue' }}>
                    bekeltetes@bacsbekeltetes.hu; mariann.matyus@bkmkik.hu
                  </a>
                </ListItem>
              </UnorderedList>
              <UnorderedList styleType='none' mt={8}>
                <ListItem fontWeight='bold'>Békés Megyei Békéltető Testület</ListItem>
                <ListItem>Cím: 5600 Békéscsaba, Penza ltp. 5.</ListItem>
                <ListItem>Telefonszám: 06-66-324-976</ListItem>
                <ListItem>Fax: 06-66-324-976</ListItem>
                <ListItem>
                  E-mail:
                  <a href='mailto: eva.toth@bmkik.hu' style={{ color: 'blue' }}>
                    eva.toth@bmkik.hu
                  </a>
                </ListItem>
              </UnorderedList>
              <UnorderedList styleType='none' mt={8}>
                <ListItem fontWeight='bold'>Borsod-Abaúj-Zemplén Megyei Békéltető Testület</ListItem>
                <ListItem>Cím: 3525 Miskolc, Szentpáli u. 1.</ListItem>
                <ListItem>Telefonszám:06-46-501-091;06-46-501-870</ListItem>
                <ListItem>Fax: 06-46-501-099</ListItem>
                <ListItem>
                  E-mail:
                  <a href='mailto: kalna.zsuzsa@bokik.hu' style={{ color: 'blue' }}>
                    kalna.zsuzsa@bokik.hu
                  </a>
                </ListItem>
              </UnorderedList>
              <UnorderedList styleType='none' mt={8}>
                <ListItem fontWeight='bold'>Budapesti Békéltető Testület</ListItem>
                <ListItem>Cím: 1016 Budapest, Krisztina krt. 99. III. em. 310.</ListItem>
                <ListItem>Telefonszám: 06-1-488-2131</ListItem>
                <ListItem>Fax: 06-1-488-2186</ListItem>
                <ListItem>
                  E-mail:
                  <a href='mailto: bekelteto.testulet@bkik.hu' style={{ color: 'blue' }}>
                    bekelteto.testulet@bkik.hu
                  </a>
                </ListItem>
              </UnorderedList>
              <UnorderedList styleType='none' mt={8}>
                <ListItem fontWeight='bold'>Csongrád Megyei Békéltető Testület</ListItem>
                <ListItem>Cím: 6721 Szeged, Párizsi krt. 8-12.</ListItem>
                <ListItem>Telefonszám: 06-62-554-250/118</ListItem>
                <ListItem>Fax: 06-62-426-149</ListItem>
                <ListItem>
                  E-mail:
                  <a href='mailto: bekelteto.testulet@csmkik.hu' style={{ color: 'blue' }}>
                    bekelteto.testulet@csmkik.hu
                  </a>
                </ListItem>
              </UnorderedList>
              <UnorderedList styleType='none' mt={8}>
                <ListItem fontWeight='bold'>Fejér Megyei Békéltető Testület</ListItem>
                <ListItem>Cím: 8000 Székesfehérvár, Hosszúsétatér 4-6.</ListItem>
                <ListItem>Telefonszám:06-22-510-310</ListItem>
                <ListItem>Fax: 06-22-510-312</ListItem>
                <ListItem>
                  E-mail:
                  <a href='mailto:fmkik@fmkik.hu' style={{ color: 'blue' }}>
                    fmkik@fmkik.hu
                  </a>
                </ListItem>
              </UnorderedList>
              <UnorderedList styleType='none' mt={8}>
                <ListItem fontWeight='bold'>Győr-Moson-Sopron Megyei Békéltető Testület</ListItem>
                <ListItem>Cím: 9021 Győr, Szent István út 10/a.</ListItem>
                <ListItem>Telefonszám: 06-96-520-217</ListItem>
                <ListItem>Fax: 06-96-520-218</ListItem>
                <ListItem>
                  E-mail:
                  <a href='mailto:bekeltetotestulet@gymskik.hu' style={{ color: 'blue' }}>
                    bekeltetotestulet@gymskik.hu
                  </a>
                </ListItem>
              </UnorderedList>
              <UnorderedList styleType='none' mt={8}>
                <ListItem fontWeight='bold'>Hajdú-Bihar Megyei Békéltető Testület</ListItem>
                <ListItem>Cím: 4025 Debrecen, Vörösmarty u. 13-15.</ListItem>
                <ListItem>Telefonszám: 06-52-500-710</ListItem>
                <ListItem>Fax: 06-52-500-720</ListItem>
                <ListItem>
                  E-mail:
                  <a href='mailto:korosi.vanda@hbkik.hu' style={{ color: 'blue' }}>
                    korosi.vanda@hbkik.hu
                  </a>
                </ListItem>
              </UnorderedList>
              <UnorderedList styleType='none' mt={8}>
                <ListItem fontWeight='bold'>Heves Megyei Békéltető Testület</ListItem>
                <ListItem>Cím: 3300 Eger, Faiskola út 15.</ListItem>
                <ListItem>Telefonszám: 06-36-429-612</ListItem>
                <ListItem>Fax: 06-36-323-615</ListItem>
                <ListItem>
                  E-mail:
                  <a href='mailto:hkik@hkik.hu' style={{ color: 'blue' }}>
                    hkik@hkik.hu
                  </a>
                </ListItem>
              </UnorderedList>
            </Box>
            <Box>
              <UnorderedList styleType='none'>
                <ListItem fontWeight='bold'>Baranya Megyei Békéltető Testület</ListItem>
                <ListItem>Cím: 7625 Pécs, Majorossy I. u. 36.</ListItem>
                <ListItem>Telefonszám: 06-72-507-154</ListItem>
                <ListItem>Fax: 06-72-507-152</ListItem>
                <ListItem>
                  E-mail:
                  <a href='mailto:abeck@pbkik.hu;mbonyar@pbkik.hu' style={{ color: 'blue' }}>
                    abeck@pbkik.hu; mbonyar@pbkik.hu
                  </a>
                </ListItem>
              </UnorderedList>
              <UnorderedList styleType='none' mt={8}>
                <ListItem fontWeight='bold'>Komárom-Esztergom Megyei Békéltető Testület</ListItem>
                <ListItem>Cím: 2800 Tatabánya, Fő tér 36.</ListItem>
                <ListItem>Telefonszám: 06-34-513-027</ListItem>
                <ListItem>Fax: 06-34-316-259</ListItem>
                <ListItem>
                  E-mail:
                  <a href='mailto:abeck@pbkik.hu;mbonyar@pbkik.hu' style={{ color: 'blue' }}>
                    abeck@pbkik.hu; mbonyar@pbkik.hu
                  </a>
                </ListItem>
              </UnorderedList>
              <UnorderedList styleType='none' mt={8}>
                <ListItem fontWeight='bold'>Nógrád Megyei Békéltető Testület</ListItem>
                <ListItem>Cím: 3100 Salgótarján, Alkotmány út 9/A.</ListItem>
                <ListItem>Telefonszám: 06-32-520-860</ListItem>
                <ListItem>Fax: 06-32-520-862</ListItem>
                <ListItem>
                  E-mail:
                  <a href='mailto:nkik@nkik.hu' style={{ color: 'blue' }}>
                    nkik@nkik.hu
                  </a>
                </ListItem>
              </UnorderedList>
              <UnorderedList styleType='none' mt={8}>
                <ListItem fontWeight='bold'>Pest Megyei Békéltető Testület</ListItem>
                <ListItem>Cím: 1119 Budapest, Etele út 59-61. II. emelet 240.</ListItem>
                <ListItem>Levelezési cím: 1364 Budapest, Pf.: 81</ListItem>
                <ListItem>Telefonszám: 06-1-269-0703</ListItem>
                <ListItem>Fax: 06-1-474-7921</ListItem>
                <ListItem>
                  E-mail:
                  <a href='mailto:pmbekelteto@pmkik.hu' style={{ color: 'blue' }}>
                    pmbekelteto@pmkik.hu
                  </a>
                </ListItem>
              </UnorderedList>
              <UnorderedList styleType='none' mt={8}>
                <ListItem fontWeight='bold'>Somogy Megyei Békéltető Testület</ListItem>
                <ListItem>Cím: 7400 Kaposvár, Anna u.6.</ListItem>
                <ListItem>Telefonszám: 06-82-501-026</ListItem>
                <ListItem>Fax: 06-82-501-046</ListItem>
                <ListItem>
                  E-mail:
                  <a href='mailto:skik@skik.hu' style={{ color: 'blue' }}>
                    skik@skik.hu
                  </a>
                </ListItem>
              </UnorderedList>
              <UnorderedList styleType='none' mt={8}>
                <ListItem fontWeight='bold'>Szabolcs-Szatmár-Bereg Megyei Békéltető Testület</ListItem>
                <ListItem>Cím: 4400 Nyíregyháza, Széchenyi u. 2.</ListItem>
                <ListItem>Telefonszám: 06-42-311-544</ListItem>
                <ListItem>Fax: 06-42-311-750</ListItem>
                <ListItem>
                  E-mail:
                  <a href='mailto:bekelteto@szabkam.hu' style={{ color: 'blue' }}>
                    bekelteto@szabkam.hu
                  </a>
                </ListItem>
              </UnorderedList>
              <UnorderedList styleType='none' mt={8}>
                <ListItem fontWeight='bold'>Tolna Megyei Békéltető Testület</ListItem>
                <ListItem>Cím: 7100 Szekszárd, Arany J. u. 23-25. III. emelet</ListItem>
                <ListItem>Telefonszám: 06-74-411-661</ListItem>
                <ListItem>Fax: 06-74-411-456</ListItem>
                <ListItem>
                  E-mail:
                  <a href='mailto:kamara@tmkik.hu' style={{ color: 'blue' }}>
                    kamara@tmkik.hu
                  </a>
                </ListItem>
              </UnorderedList>
              <UnorderedList styleType='none' mt={8}>
                <ListItem fontWeight='bold'>Vas Megyei Békéltető Testület</ListItem>
                <ListItem>Cím: 9700 Szombathely, Honvéd tér 2.</ListItem>
                <ListItem>Telefonszám: 06-94-312-356</ListItem>
                <ListItem>Fax: 06-94-316-936</ListItem>
                <ListItem>
                  E-mail:
                  <a href='mailto:vmkik@vmkik.hu' style={{ color: 'blue' }}>
                    vmkik@vmkik.hu
                  </a>
                </ListItem>
              </UnorderedList>
              <UnorderedList styleType='none' mt={8}>
                <ListItem fontWeight='bold'>Veszprém Megyei Békéltető Testület</ListItem>
                <ListItem>Cím: 8200 Veszprém, Radnóti tér 1. földszint 116.</ListItem>
                <ListItem>Telefonszám: 06-88-429-008</ListItem>
                <ListItem>Fax: 06-88-412-150</ListItem>
                <ListItem>
                  E-mail:
                  <a href='mailto:bekelteto@veszpremikamara.hu' style={{ color: 'blue' }}>
                    bekelteto@veszpremikamara.hu
                  </a>
                </ListItem>
              </UnorderedList>
              <UnorderedList styleType='none' mt={8}>
                <ListItem fontWeight='bold'>Zala Megyei Békéltető Testület</ListItem>
                <ListItem>Cím: 8900 Zalaegerszeg, Petőfi u. 24.</ListItem>
                <ListItem>Telefonszám: 06-92-550-513</ListItem>
                <ListItem>Fax: 06-92-550-525</ListItem>
                <ListItem>
                  E-mail:
                  <a href='mailto:zmbekelteto@zmkik.hu' style={{ color: 'blue' }}>
                    zmbekelteto@zmkik.hu
                  </a>
                </ListItem>
              </UnorderedList>
            </Box>
          </SimpleGrid>
          <Heading as='h4' size='md'>
            Online vitarendezési platform
          </Heading>
          <Stack>
            <Text>
              Az Európai Bizottság létrehozott egy honlapot, amelybe a fogyasztók beregisztrálhatnak, így ezen keresztül
              lehetőségük nyílik arra, hogy online vásárláshoz kapcsolódó jogvitáikat ezen keresztül rendezzék egy
              kérelem kitöltésével, elkerülve a bírósági eljárást. Így a fogyasztók tudják érvényesíteni jogaikat
              anélkül, hogy például a távolság meggátolná őket ebben.
            </Text>
            <Text>
              Ha Ön panaszt kíván tenni egy, az interneten vásárolt termékkel vagy szolgáltatással kapcsolatban, és nem
              akar feltétlenül bírósághoz fordulni, igénybe veheti az online vitarendezés eszközét.
            </Text>
            <Text>
              A portálon Ön és a kereskedő, akivel szemben panasszal élt, közösen kiválaszthatják a panasz kezelésével
              megbízni kívánt vitarendezési testületet.
            </Text>
            <Text>
              Az online vitarendezési platform itt érhető el:{' '}
              <a href='https://webgate.ec.europa.eu/odr/main/?event=main.home.show&lng=HU' style={{ color: 'blue' }}>
                https://webgate.ec.europa.eu/odr/main/?event=main.home.show&lng=HU
              </a>
            </Text>
          </Stack>
          <Heading as='h4' size='md'>
            Szerzői jogok
          </Heading>
          <Stack>
            <Text>
              A szerzői jogról szóló 1999. évi LXXVI. törvény (továbbiakban: Szjt.) 1. § (1) bekezdése értelmében a
              weboldal szerzői műnek minősül, így annak minden része szerzői jogi védelem alatt áll. Az Szjt. 16. § (1)
              bekezdése alapján tilos a weboldalon található grafikai és szoftveres megoldások, számítógépi
              programalkotások engedély nélküli felhasználása, illetve bármely olyan alkalmazás használata, amellyel a
              weboldal, vagy annak bármely része módosítható. A weboldalról és annak adatbázisából bármilyen anyagot
              átvenni a jogtulajdonos írásos hozzájárulása esetén is csak a weboldalra való hivatkozással, forrás
              feltüntetésével lehet. A jogtulajdonos:{' '}
              <Box as='span' fontWeight='bold'>
                Sushi-Bar Hungary Kft.
              </Box>{' '}
            </Text>
          </Stack>
          <Heading as='h4' size='md'>
            Részleges érvénytelenség, magatartási kódex
          </Heading>
          <Stack>
            <Text>
              Ha az ÁSZF valamely pontja jogilag hiányos vagy hatálytalan, attól még a szerződés további pontjai
              érvényben maradnak és a hatálytalan vagy hibás rész helyett a vonatkozó jogszabályok rendelkezései
              alkalmazandóak.
            </Text>
            <Text>
              Az Eladónak nincs a fogyasztókkal szembeni tisztességtelen kereskedelmi gyakorlat tilalmáról szóló törvény
              szerinti magatartási kódexe.
            </Text>
          </Stack>
          <Heading as='h4' size='md'>
            A digitális adattartalom működése, műszaki védelmi intézkedések
          </Heading>
          <Stack>
            <Text>
              A weboldalon megjelenő adatokat szolgáltató szerverek elérhetősége évi 99,9% feletti. Rendszeresen mentés
              készül a teljes adattartalomról, így probléma esetén az eredeti adattartalom visszaállítható. A weboldalon
              megjelenő adatokat MangoDB adatbázisban tároljuk. Az érzékeny adatok megfelelő erősségű titkosítással
              vannak tárolva, kódolásukhoz processzorba épített hardveres támogatást használunk.
            </Text>
          </Stack>
          <Heading as='h4' size='md'>
            A termékek lényeges tulajdonságaira vonatkozó tájékoztatás
          </Heading>
          <Stack>
            <Text>
              A honlapon a megvásárolható termékek lényeges tulajdonságairól az egyes termékeknél szereplő leírásokban
              adunk tájékoztatást.
            </Text>
          </Stack>
          <Heading as='h4' size='md'>
            Az adatbeviteli hibák javítása – Felelősség a megadott adatok valóságáért
          </Heading>
          <Stack>
            <Text>
              Önnek a megrendelés során a megrendelés véglegesítése előtt folyamatosan lehetősége van az Ön által bevitt
              adatok módosítására (a böngészőben a vissza gombra kattintva az előző oldal nyílik meg, így akkor is
              javíthatóak a bevitt adatok, ha Ön már a következő oldalra lépett). Felhívjuk a figyelmét, hogy az Ön
              felelőssége, hogy az Ön által megadott adatok pontosan kerüljenek bevitelre, hiszen az Ön által megadott
              adatok alapján kerül számlázásra, illetve szállításra a termék. Ön a megrendelésével tudomásul veszi, hogy
              az Eladó jogosult az Ön hibás adatbeviteléből, a pontatlanul megadott adatokból eredő minden kárát és
              költségét Önre hárítani. Az Eladó a pontatlan adatbevitel alapján történő teljesítésért felelősségét
              kizárja. Felhívjuk a figyelmét arra, hogy a rosszul megadott e-mail cím vagy a postafiókhoz tartozó
              tárhely telítettsége a visszaigazolás kézbesítésének hiányát eredményezheti és meggátolhatja a szerződés
              létrejöttét.
            </Text>
          </Stack>
          <Heading as='h4' size='md'>
            Eljárás hibás ár esetén
          </Heading>
          <Stack>
            <Text>Nyilvánvalóan hibásan feltüntetett árnak minősül:</Text>
            <UnorderedList>
              <ListItem>0 Ft-os ár,</ListItem>
              <ListItem>
                kedvezménnyel csökkentett, de a kedvezményt tévesen feltüntető ár (pl.: 1500 Ft-os termék esetén a 30
                %-os kedvezmény feltüntetése mellett 600 Ft-ért kínált termék).
              </ListItem>
            </UnorderedList>
            <Text>
              Hibás ár feltüntetése esetén Eladó felajánlja a termék valós áron történő megvásárlásának lehetőségét,
              mely információ birtokában a Vásárló eldöntheti, hogy megrendeli valós áron a terméket vagy minden
              hátrányos jogkövetkezmény nélkül lemondja a megrendelést.
            </Text>
          </Stack>
          <Heading as='h4' size='lg'>
            A Weboldal használata
          </Heading>
          <Heading as='h4' size='md'>
            A vásárlás folyamata
          </Heading>
          <Stack>
            <Text fontWeight='bold'>A Termék kiválasztása</Text>
            <Text>
              A Weboldal szereplő termékkategóriákra kattintva választhatja ki a kívánt termékcsaládot, és ezen belül az
              egyes termékeket. Az egyes termékekre kattintva találja a termék fotóját, cikkszámát, ismertetőjét, árát.
              Önnek vásárlás esetén a honlapon szereplő árat kell megfizetnie. A termékeket illusztrált fényképpel
              jelöltük. A fényképeken látható kiegészítők, dekorációs elemek nem részei a terméknek, kivéve ha az a
              termékleírásban külön kiemelésre kerül. Felhívjuk figyelmét, hogy az esetleges elírásokért, téves
              adatokért felelősséget nem vállalunk!
            </Text>
            <Text fontWeight='bold'>Kosárba helyezés</Text>
            <Text>
              A Termék kiválasztása után Ön a „Kosárba teszem” gombra kattintva helyezhet – tetszőleges számú – terméket
              a kosárba anélkül, hogy ezzel Önnek vásárlási- vagy fizetési kötelezettsége keletkezne, mivel a kosárba
              helyezés nem minősül ajánlattételnek.
            </Text>
            <Text>
              {' '}
              Javasoljuk, hogy akkor is helyezze a kosárba a terméket, ha nem biztos abban, hogy az adott terméket meg
              kívánja vásárolni, mert ezzel az Ön számára egy kattintással áttekinthetővé válik, hogy az adott
              pillanatban melyek az Ön által kiválasztott termékek, és azokat egy képernyőn megjelenítve tudja
              megtekinteni és összehasonlítani. A Kosár tartalma a megrendelés véglegesítéséig – a „Rendelés
              véglegesítése” gomb megnyomásáig – szabadon módosítható, a kosárból tetszés szerinti termékek
              eltávolíthatóak, a kosárba tetszés szerint újabb termékek helyezhetőek, illetve a kíván termékszám
              megváltoztatható.
            </Text>
            <Text>
              Amennyiben Ön a kiválasztott terméket a Kosárba helyezi, „Kosárba helyezve” szöveg jelenik meg. Amennyiben
              Ön nem kíván több terméket kiválasztani, úgy kattintson a „kosár” gombra! Amennyiben újabb terméket
              szeretne a kosárba helyezni, úgy kattintson bármely termékkategória gombra!
            </Text>
            <Text fontWeight='bold'>A Kosár megtekintése</Text>
            <Text>
              A weboldal használata során Ön a honlap tetején található „Kosár” ikonra kattintva bármikor ellenőrizheti
              a kosár tartalmát. Itt lehetősége van a kiválasztott termékeket eltávolítani a kosárból, illetve a termék
              darabszámát megváltoztatni. A rendszer a „Kosár frissítése” gomb megnyomását követően megjeleníti az Ön
              által megváltoztatott adatoknak megfelelő információkat, ideértve a kosárba tett termékek árát is.
            </Text>
            <Text>
              Amennyiben Ön nem kíván további termékeket kiválasztani és a kosárba helyezni, úgy a „Tovább a pénztárhoz”
              gomb lenyomásával folytathatja a vásárlást.
            </Text>
            <Text fontWeight='bold'>Vásárlói adatok megadása</Text>
            <Text>
              „Tovább a pénztárhoz” gomb lenyomását követően megjelenik a kosár tartalma, illetve az Ön által
              kiválasztott termékek megvásárlása esetén az Ön által fizetendő teljes vételár. „A rendelés tartalma”
              dobozban kell bejelölnie az Ön által választott fizetési módot. Kiszállítás esetén a rendszer jelzi a
              kiszállítás díját, melyet Ön köteles megfizetni megrendelés esetén.
            </Text>
            <Text>
              A „Számlázási adatok” résznél e-mail címét, teljes nevét, címét, telefonszámát tudja megadni. Amennyiben
              Ön eltérő címre kéri a szállítást, kérjük jelölje meg a „Szállítás másik címre” checkbox-ot és adja meg a
              címet. A „Rendelés jegyzetek” szövegdobozban” Ön tetszőlegesen adhat meg további információt.
            </Text>
            <Text fontWeight='bold'>A rendelés véglegesítése</Text>
            <Text>
              Ha mindent rendben talál, a „Megrendelés elküldése” gombra kattintva véglegesítheti rendelését, melyről
              weboldalunkon és e-mailben is visszaigazolást kap. Abban az esetben, ha a visszaigazoló e-mailben veszi
              észre, hogy hibás adatot adott meg, kérjük, haladéktalanul, de legkésőbb a rendelés átvételi időpontja
              előtt 2 órával jelezze felénk.
            </Text>
            <Text>
              A weboldalunkon található tájékoztatás nem minősül Cégünk részéről történő szerződéskötési ajánlatnak. Az
              ajánlattevő Ön.
            </Text>
            <Text>
              Ön a „Megrendelés elküldése” gombra kattintva tudomásul veszi, hogy ajánlata megtettnek minősül és
              nyilatkozata fizetési kötelezettséggel jár. Ha ajánlatát Általános szerződési feltételeink szerinti 48
              órán belül nem igazoljuk vissza, Ön mentesül ajánlati kötöttsége alól.
            </Text>
            <Text fontWeight='bold'>Rendelés lemondása</Text>
            <Text>
              Rendelés lemondására, módosítására legkésőbb az előzőlegesen kiválasztott átvételi idő előtt két órával
              van lehetőség.
            </Text>
          </Stack>
          <Heading as='h4' size='lg'>
            Rendelés feldolgozása, a szerződés létrejötte
          </Heading>
          <Text>
            Önnek bármilyen időpontban lehetősége van a megrendelés leadására. Az Eladó legkésőbb az Ön ajánlatának
            elküldését követő 1 órán belül, e-mail útján visszaigazolja az Ön ajánlatát. A szerződés akkor jön létre,
            amikor az Eladó által küldött visszaigazoló email az Ön számára a levelezőrendszerében hozzáférhetővé válik.
          </Text>
          <Heading as='h4' size='lg'>
            Fizetési módok
          </Heading>
          <Heading as='h4' size='md'>
            Készpénzes fizetés
          </Heading>
          <Text>
            Amennyiben a rendelés értékét kézhezvételekor kívánja kiegyenlíteni készpénzzel, akkor válassza a „Fizetés
            készpénzben” fizetési módot.
          </Text>
          <Heading as='h4' size='md'>
            Bankkártyás fizetés
          </Heading>
          <Text>
            Amennyiben a rendelés értékét kézhezvételekor kívánja kiegyenlíteni bankkártyával, akkor válassza a „Fizetés
            bankkártyával” fizetési módot.
          </Text>
          <Text>
            Bankkártyával történő fizetés a következő, érvényes és hatályos bankkártyák tulajdonosai számára lehetséges:
            VISA, MasterCard. Az online bankkártyás fizetések a Stripe biztonságos fizetési rendszerén keresztül
            történnek. A megadott bankkártyaadatok a kereskedőhöz nem jutnak el, azok kizárólag a Stripe titkosított
            felületén kerülnek feldolgozásra. A Stripe egy nemzetközileg elismert, PCI DSS tanúsítvánnyal rendelkező
            fizetési szolgáltató, amely biztosítja az Ön adatainak teljes körű védelmét.
          </Text>
          <Heading as='h4' size='lg'>
            Átvételi módok, átvételi díjak
          </Heading>
          <Heading as='h4' size='md'>
            Kiszállítás
          </Heading>
          <Text>
            A vásárolt termékek kiszállítása kizárólag Magyarország területére vonatkozik. A szállítás GLS, DPD és MPL
            futárszolgálattal történik. 30.000 Ft feletti rendelés esetén ingyenes. A csomag kézbesítése a
            megrendeléstől számítva: 1-5 munkanap
          </Text>
          <Heading as='h4' size='md'>
            Teljesítési határidő
          </Heading>
          <Text>
            A megrendelésre vonatkozóan az általános teljesítési határidő függ a vásárló által választott kiszállítási
            vagy személyes átvételi időponttól.
          </Text>
          <Text>Tájékoztatjuk, hogy:</Text>
          <UnorderedList>
            <ListItem>
              a veszélyhelyzetben hozott, a Magyar Közlönyben kihirdetett különleges jogrendi intézkedések,
            </ListItem>
            <ListItem>
              a szerződés teljesítése érdekében eljáró személyek (fizetési szolgáltató, valamint a szállítást végző
              partner) által a veszélyhelyzet miatt hozott intézkedések a szerződés teljesítését vis maior eseményként
              érintik.
            </ListItem>
            <Text>
              A vis maior helyzet Eladót megakadályozhatja, vagy késleltetheti szerződéses kötelezettségei
              teljesítésében, amelyért Eladó a Polgári Törvénykönyv alapján nem vonható felelősségre.
            </Text>
            <Text>Az akadályoztatás és késleltetés kezelése érdekében Eladó jogosult:</Text>
            <ListItem>a szerződés teljesítését felfüggeszteni, vagy halasztani,</ListItem>
            <ListItem>
              a már megkötött szerződés teljesítését lehetetlenülésre (amennyiben a vis maior helyzet előre láthatóan
              lehetetlené teszi a teljesítést) hivatkozva visszautasítani.
            </ListItem>
          </UnorderedList>
          <Text>
            A szerződés teljesítésének felfüggesztése vagy halasztása esetén Eladó a szerződéses kötelezettségeit a vis
            maior helyzetre tekintettel halasztott időpontban köteles teljesíteni.
          </Text>
          <Text>
            A szerződés teljesítésének lehetetlenülése esetén a Polgári Törvénykönyv alapján a szerződés megszűnik, a
            már megfizetett vételár visszajár a Vásárlónak. Eladó a vételár visszatérítése esetén a Vásárló által
            alkalmazott fizetési módot, vagy a Felek által egyedileg megtárgyalt visszafizetési módot alkalmazza.
          </Text>
          <Heading as='h4' size='md'>
            Jogfenntartás, tulajdonjogi kikötés
          </Heading>
          <Text>
            Amennyiben Ön korábban már úgy rendelt terméket, hogy azt a kiszállítás során nem vette át (ide nem értve
            azt az esetet, amikor elállási jogával élt), vagy a Termék nem kereste jelzéssel érkezett vissza az
            eladóhoz, az Eladó a megrendelés teljesítését a vételár és a szállítási költségek előre történő
            megfizetéséhez köti.
          </Text>
          <Text>
            Eladó visszatarthatja a Termék átadását, ameddig nem győződik meg arról, hogy a Termék árának kifizetése
            sikeresen megtörtént az elektronikus fizetési megoldás használatával (ideértve azt az esetet is, amikor az
            átutalással fizetett termék esetén Vásárló a tagállama szerinti pénznemben utalja el a vételárat és az
            átváltás, valamint a banki jutalékok, költségek miatt Eladó nem kapja meg teljes mértékben a vételár és a
            szállítási díj összegét). Amennyiben a Termék ára nem került teljes mértékben kifizetésre, az Eladó a
            vételár kiegészítésére hívhatja fel a Vásárlót.
          </Text>
          <Heading as='h4' size='md'>
            Külföldre történő értékesítés
          </Heading>
          <Text>Az eladó kizárólag Magyarország területén értékesít.</Text>
        </VStack>
      </Box>
    </Stack>
  );
};

export default TermsAndConditions;
