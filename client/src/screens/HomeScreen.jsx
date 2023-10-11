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
  useColorModeValue,
} from '@chakra-ui/react'
import { FaArrowRight } from 'react-icons/fa';
import {Link as ReactLink} from 'react-router-dom';

const HomeScreen = () => (
  <Box maxW="8xl" mx="auto" px={{ base: '0', lg: '12' }} py={{ base: '0', lg: '12' }} minH='6xl'>
    <Stack direction={{ base: 'column-reverse', lg: 'row' }} spacing={{ base: '0', lg: '20' }}>
      <Box
        width={{ lg: 'sm' }}
        transform={{ base: 'translateY(-50%)', lg: 'none' }}
        bg={{ base: useColorModeValue('red.50', 'gray.700'), lg: 'transparent' }}
        mx={{ base: '6', md: '8', lg: '0' }}
        px={{ base: '6', md: '8', lg: '0' }}
        py={{ base: '6', md: '8', lg: '12' }}
      >
        <Stack spacing={{ base: '8', lg: '10' }}>
          <Stack spacing={{ base: '2', lg: '4' }}>
            <Heading size="xl" color={useColorModeValue('red.500', 'red.300')}>
              Asian market
            </Heading>
            <Heading size="xl" fontWeight="normal">
              Get an asian taste
            </Heading>
          </Stack>
          <HStack spacing="3">
            <Link as={ReactLink} to='/products' color={useColorModeValue('red.500', 'red.300')} fontWeight="bold" fontSize="lg">
              Products
            </Link>
            <Icon color={useColorModeValue('red.500', 'red.300')} as={FaArrowRight} />
          </HStack>
        </Stack>
      </Box>
      <Flex flex="1" overflow="hidden">
        <Image
          src="https://img.freepik.com/free-photo/bowl-noodles-with-chili-pepper-sesame-seeds_23-2148382888.jpg?w=740&t=st=1696971222~exp=1696971822~hmac=c2fafc60e4848ef92b12b7380616e8a524d10d446e58c4af101856471de7281c"
          alt="Lovely Image"
          fallback={<Skeleton />}
          maxH="450px"
          minW="300px"
          objectFit="cover"
          flex="1"
        />
        <Image
          display={{ base: 'none', sm: 'initial' }}
          src="https://img.freepik.com/free-photo/close-up-noodles-bowl-with-vegetables_23-2148382873.jpg?w=740&t=st=1696971283~exp=1696971883~hmac=3548a8f72d6c12c74daec9fc603ec8bed2f9e49dc93c7a149d87e6a42948d27d"
          alt="Lovely Image"
          fallback={<Skeleton />}
          maxH="450px"
          objectFit="cover"
        />
      </Flex>
    </Stack>
  </Box>
)

export default HomeScreen;