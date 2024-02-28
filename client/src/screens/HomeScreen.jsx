import {
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Link,
  Skeleton,
  Stack,
  SimpleGrid,
  Card,
  CardBody,
  Text,
  useColorModeValue as mode,
  chakra, 
  Container,
} from '@chakra-ui/react'
import { FaArrowRight } from 'react-icons/fa';
import { FaTruck } from 'react-icons/fa';
import { FaHandHolding } from 'react-icons/fa';
import { FaTags } from 'react-icons/fa';
import { FaEnvira } from 'react-icons/fa';
import {Link as ReactLink} from 'react-router-dom';
import Carousel from '../components/ProductCarousel';
import Recepies from '../components/Recepies';

const HomeScreen = () => {

  return (
  <Box maxW="8xl" mx="auto" px={{ base: '0', lg: '12' }} py={{ base: '0', lg: '12' }} minH='6xl'>
    <Stack direction={{ base: 'column-reverse', lg: 'row' }} spacing={{ base: '0', lg: '20' }}>
      <Box
        width={{ lg: 'sm' }}
        transform={{ base: 'translateY(-50%)', lg: 'none' }}
        bg={{ base: mode('red.50', 'gray.700'), lg: 'transparent' }}
        mx={{ base: '6', md: '8', lg: '0' }}
        px={{ base: '6', md: '8', lg: '0' }}
        py={{ base: '6', md: '8', lg: '12' }}
      >
        <Stack spacing={{ base: '8', lg: '10' }}>
          <Stack spacing={{ base: '2', lg: '4' }}>
            <Heading size="xl" color={mode('red.500', 'red.300')}>
              Arany Sárkány 
            </Heading>
            <Heading size="lg" fontWeight="normal">
              Kóstolja meg az ázsiai ízeket
            </Heading>
          </Stack>
          <HStack spacing="3">
            <Link as={ReactLink} to='/products' color={mode('red.500', 'red.300')} fontWeight="bold" fontSize="lg">
              Termékek
            </Link>
            <Icon color={mode('red.500', 'red.300')} as={FaArrowRight} />
          </HStack>
        </Stack>
      </Box>
      <Flex flex="1" overflow="hidden">
        <Image
          src="https://res.cloudinary.com/dtj7rhgwl/image/upload/v1703075427/cmanqhinda8u2ax2zdsl.jpg"
          alt="Lovely Image"
          fallback={<Skeleton />}
          maxH="450px"
          minW="300px"
          objectFit="cover"
          flex="1"
        />
        <Image
          display={{ base: 'none', sm: 'initial' }}
          src="https://images.unsplash.com/photo-1569246294372-ed319c674f14?q=80&w=2800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Lovely Image"
          fallback={<Skeleton />}
          maxH="450px"
          objectFit="cover"
        />
      </Flex>
    </Stack>
    <Container maxW={'7xl'} p="10">
      <Heading as="h1">New products</Heading>
    </Container>
    <Carousel/>
    <Box p={4} width='100vw'  bg={{ base: mode('red.50', 'gray.700'), lg: 'transparent' }}>
    <chakra.h1 textAlign='center' fontSize='4xl' py={10} fontWeight='bold'>
        Miért érdemes minket választani?
      </chakra.h1>
    <SimpleGrid columns={{ base: 1, md: 4 }} spacing={10}>
  <Card>
    <CardBody display="flex">
      <Icon color={mode('red.500', 'red.300')} w={8} h={8} as={FaTags} mr={5}/>
      <Text fontSize="m">Félelem az árak</Text>
      
    </CardBody>
  </Card>
  <Card>
    <CardBody display="flex">
      <Icon color={mode('red.500', 'red.300')} w={8} h={8} as={FaTruck} mr={5}/>
      <Text>Gyors szállítás</Text>
    </CardBody>
  </Card>
  <Card>
    <CardBody display="flex">
      <Icon color={mode('red.500', 'red.300')} w={8} h={8} as={FaHandHolding} mr={5}/>
      <Text>Biztonságos fizetés</Text>
    </CardBody>
  </Card>
  <Card>
    <CardBody display="flex">
      <Icon color={mode('red.500', 'red.300')} w={8} h={8} as={FaEnvira} mr={5}/>
      <Text>Mindig friss</Text>
    </CardBody>
  </Card>
    </SimpleGrid>
    </Box>

    <Recepies/>
  </Box>
)}

export default HomeScreen;