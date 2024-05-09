import { Box, Heading, Text, Stack, VStack, Container, Divider } from '@chakra-ui/react';

const TermsAndConditions = () => {
  return ( 
    <Stack spacing={8} direction='row'>
      <Box m={25} p={25} shadow='md' borderWidth='1px'>
      <Heading fontSize='2xl'display='flex' justifyContent='center' >Általános Szerződési Feltételek (ÁSZF)</Heading>
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
          <Text>Székhely: 8600, Siófok, Széchenyi ut. 18</Text>
          <Text>Levelezési cím: 8600, Siófok, Gyöngy ut. 11</Text>
          <Text>Nyilvántartásba vevő hatóság: Belügyminisztérium Nyilvántartások Vezetéséért Felelős Helyettes Államtitkár Okmányfelügyeleti Főosztály</Text>
          <Text>Cégjegyzékszám:14-09-317686</Text>
          <Text>Adószám: 28731199-2-14</Text>
          <Text>Képviselő neve: Szén Róbert</Text>
          <Text>Telefonszám: +36 70 791 6990</Text>
          <Text>E-mail: info@sushibar-hungary.hu</Text>
          <Text>Honlap: www.aranysarkany.hu</Text>
        </Container>
        <Divider/>
        <Heading as='h4' size='md'>Fogalmak</Heading>
        <Stack>
          <Text>Felek: Eladó és Vevő együttesen</Text>
          <Text>Fogyasztó: a szakmája, önálló foglalkozása vagy üzleti tevékenysége körén kívül eljáró természetes személy</Text>
          <Text>Fogyasztói szerződés: olyan szerződés, melynek egyik alanya fogyasztónak minősül</Text>
          <Text>Honlap: a jelen weboldal, amely a szerződés megkötésére szolgál</Text>
          <Text>Szerződés: Eladó és Vevő között a Honlap és elektronikus levelezés igénybevételével létrejövő adásvételi szerződés</Text>
          <Text>Távollévők közötti kommunikációt lehetővé tévő eszköz: olyan eszköz, amely alkalmas a felek távollétében – szerződés megkötése érdekében – szerződési nyilatkozat megtételére. Ilyen eszköz különösen a címzett vagy a címzés nélküli nyomtatvány, a szabványlevél, a sajtótermékben közzétett hirdetés megrendelőlappal, a katalógus, a telefon, a telefax és az internetes hozzáférést biztosító eszköz</Text>
          <Text>Távollévők között kötött szerződés: olyan fogyasztói szerződés, amelyet a szerződés szerinti termék vagy szolgáltatás nyújtására szervezett távértékesítési rendszer keretében a felek egyidejű fizikai jelenléte nélkül úgy kötnek meg, hogy a szerződés megkötése érdekében a szerződő felek kizárólag távollévők közötti kommunikációt lehetővé tévő eszközt alkalmaznak</Text>
          <Text>Termék: a Honlap kínálatában szereplő, a Honlapon értékesítésre szánt minden birtokba vehető forgalomképes ingó dolog, mely a Szerződés tárgyát képezi </Text>
          <Text>Vállalkozás: a szakmája, önálló foglalkozása vagy üzleti tevékenysége körében eljáró személy</Text>
          <Text>Vevő/Ön: a Honlapon keresztül vételi ajánlatot tevő szerződést kötő személy</Text>
          <Text>Jótállás: A fogyasztó és a vállalkozás között kötött szerződések esetén (a továbbiakban: fogyasztói szerződés) a Polgári Törvénykönyv szerinti:</Text>
          <Text>a) a szerződés teljesítéséért vállalt jótállás, amelyet a vállalkozás a szerződés megfelelő teljesítéséért a jogszabályi kötelezettségén túlmenően vagy annak hiányában önként vállal, valamint</Text>
          <Text>b) a jogszabályon alapuló kötelező jótállás</Text>
        </Stack>
        <Heading as='h4' size='md'>Vonatkozó jogszabályok</Heading>
        <Stack>
          <Text>A Szerződésre a magyar jog előírásai az irányadóak, és különösen az alábbi jogszabályok vonatkoznak:</Text>
          <Text>1997. évi CLV. törvény a fogyasztóvédelemről</Text>
          <Text>2001. évi CVIII. törvény az elektronikus kereskedelmi szolgáltatások, valamint az információs társadalommal összefüggő szolgáltatások egyes kérdéseiről</Text>
          <Text>2013. évi V. törvény a Polgári Törvénykönyvről</Text>
          <Text>151/2003. (IX.22.) kormányrendelet a tartós fogyasztási cikkekre vonatkozó kötelező jótállásról</Text>
          <Text>45/2014. (II.26.) kormányrendelet a fogyasztó és a vállalkozás közötti szerződések részletes szabályairól</Text>
          <Text>19/2014. (IV.29.) NGM rendelet a fogyasztó és vállalkozás közötti szerződés keretében eladott dolgokra vonatkozó szavatossági és jótállási igények intézésének eljárási szabályairól</Text>
          <Text>1999. évi LXXVI. törvény a szerzői jogról</Text>
          <Text>2011. évi CXII. törvény az információs önrendelkezési jogról és az információszabadságról</Text>
          <Text>AZ EURÓPAI PARLAMENT ÉS A TANÁCS (EU) 2018/302 RENDELETE (2018. február 28.) a belső piacon belül a vevő állampolgársága, lakóhelye vagy letelepedési helye alapján történő indokolatlan területi alapú tartalomkorlátozással és a megkülönböztetés egyéb formáival szembeni fellépésről, valamint a 2006/2004/EK és az (EU) 2017/2394 rendelet, továbbá a 2009/22/EK irányelv módosításáról</Text>
          <Text>AZ EURÓPAI PARLAMENT ÉS A TANÁCS (EU) 2016/679 RENDELETE (2016. április 27.) a természetes személyeknek a személyes adatok kezelése tekintetében történő védelméről és az ilyen adatok szabad áramlásáról, valamint a 95/46/EK rendelet hatályon kívül helyezéséről (általános adatvédelmi rendelet)</Text>
          <Text>Az ÁSZF-et a magyarországi törvények szabályozzák.</Text>
        </Stack>
        <Heading as='h4' size='md'>Az ÁSZF hatálya, elfogadása</Heading>
        <Stack>
          <Text>A közöttünk létrejövő szerződés tartalmát – a vonatkozó kötelező érvényű jogszabályok rendelkezései mellett – a jelen Általános Szerződési Feltételek (a továbbiakban: ÁSZF) határozzák meg. Ennek megfelelően tartalmazza a jelen ÁSZF az Önt és bennünket illető jogokat és kötelezettségeket, a szerződés létrejöttének feltételeit, a teljesítési határidőket, a szállítási és fizetési feltételeket, a felelősségi szabályokat, valamint az elállási jog gyakorlásának feltételeit.</Text>
          <Text>A Honlap használatához szükséges azon technikai tájékoztatást, melyet jelen ÁSZF nem tartalmaz, a Honlapon elérhető egyéb tájékoztatások nyújtják.</Text>
          <Text>Ön a megrendelése véglegesítése előtt köteles megismerni a jelen ÁSZF rendelkezéseit. A webáruházunkon keresztül történő vásárlással Ön elfogadja a jelen ÁSZF rendelkezéseit, és az ÁSZF maradéktalanul az Ön és az Eladó között létrejövő szerződés részét képezi.</Text>
        </Stack>
      </VStack>
      </Box>
    </Stack>
   );
}
 
export default TermsAndConditions;