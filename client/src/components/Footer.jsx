import {
  Button,
  ButtonGroup,
  Container,
  Divider,
  IconButton,
  Stack,
  Text,
  useColorModeValue as mode,
  Box,
  Flex,
  Image,
} from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link as ReactLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
  <Box w='100%' bg={mode('gray.100', 'gray.900')}>
    <Container as='footer' role='contentinfo' maxW='7xl'>
      <Stack
        spacing='8'
        direction={{ base: 'column', md: 'row' }}
        justify='space-between'
        py={{ base: '12', md: '16' }}
      >
        <Stack spacing={{ base: '6', md: '8' }} align='start'>
          <Flex alignItems='center'>
            <Image
              className='logo'
              src='https://res.cloudinary.com/dtj7rhgwl/image/upload/v1790948660/NEW_LOGO_iljmsd.png'
              color='grey.400'
              height='100px'
            />
            <Text fontSize='2xl' fontWeight='extrabold'>
              {t('footer.brand')}
            </Text>
          </Flex>
          <Text color='muted'>{t('footer.tagline')}</Text>
        </Stack>
        <Stack
          direction={{ base: 'column-reverse', md: 'column', lg: 'row' }}
          spacing={{ base: '12', md: '8' }}
          w='60%'
        >
          <Stack direction='row' spacing='40'>
            <Stack spacing='4' minW='36' flex='2'>
              <Text fontSize='sm' fontWeight='semibold' color='subtle'>
                {t('footer.contact')}
              </Text>
              <Stack spacing='3' shouldWrapChildren>
                <Button variant='link' fontSize={{ base: 'sm', md: 'md' }} textAlign='center'>
                  8600 Siófok, Vitorlás u. 1.-3, 8600
                </Button>
                <Button variant='link' fontSize={{ base: 'sm', md: 'md' }} textAlign='center'>
                  +36 70 791 6990
                </Button>
                <Button variant='link' fontSize={{ base: 'sm', md: 'md' }} textAlign='center'>
                  info@sushibarhungary.com
                </Button>
              </Stack>
            </Stack>
            <Stack spacing='4' minW='36' flex='2'>
              <Text fontSize='sm' fontWeight='semibold' color='subtle'>
                {t('footer.info')}
              </Text>
              <Stack spacing='3' shouldWrapChildren>
                <Button variant='link' fontSize={{ base: 'sm', md: 'md' }}>
                  {t('footer.about')}
                </Button>
                <Button variant='link' fontSize={{ base: 'sm', md: 'md' }}>
                  {t('footer.shoppingInfo')}
                </Button>
                <Button variant='link' fontSize={{ base: 'sm', md: 'md' }}>
                  {t('footer.privacy')}
                </Button>
                <Button variant='link' as={ReactLink} to='/terms&conditions'>
                  {t('footer.terms')}
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Divider />
      <Stack pt='8' pb='12' justify='space-between' direction={{ base: 'column-reverse', md: 'row' }} align='center'>
        <Text fontSize='sm' color='subtle'>
          &copy; {new Date().getFullYear()} SUSHI-BAR Hungary KFT, Inc. {t('footer.rights')}
        </Text>
        <ButtonGroup variant='ghost'>
          <IconButton as='a' href='#' aria-label='LinkedIn' icon={<FaLinkedin fontSize='1.25rem' />} />
          <IconButton as='a' href='#' aria-label='Facebook' icon={<FaFacebook fontSize='1.25rem' />} />
          <IconButton as='a' href='#' aria-label='Instagram' icon={<FaInstagram fontSize='1.25rem' />} />
        </ButtonGroup>
      </Stack>
    </Container>
  </Box>
  );
};

export default Footer;
