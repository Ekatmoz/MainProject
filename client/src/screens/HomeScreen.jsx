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
  useColorModeValue as mode,
} from '@chakra-ui/react'
import { FaArrowRight } from 'react-icons/fa';
import {Link as ReactLink} from 'react-router-dom';

const HomeScreen = () => (
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
              Asian market
            </Heading>
            <Heading size="xl" fontWeight="normal">
              Get an asian taste
            </Heading>
          </Stack>
          <HStack spacing="3">
            <Link as={ReactLink} to='/products' color={mode('red.500', 'red.300')} fontWeight="bold" fontSize="lg">
              Products
            </Link>
            <Icon color={mode('red.500', 'red.300')} as={FaArrowRight} />
          </HStack>
        </Stack>
      </Box>
      <Flex flex="1" overflow="hidden">
        <Image
          src="https://img.freepik.com/free-photo/bowl-noodles-with-chili-pepper-sesame-seeds_23-2148382888.jpg?w=740&t=st=1702383433~exp=1702384033~hmac=1ea8b546ea6f5e9e669eda59ee9d5b3a15754bbd2e4d3da36609092990e49f91"
          alt="Lovely Image"
          fallback={<Skeleton />}
          maxH="450px"
          minW="300px"
          objectFit="cover"
          flex="1"
        />
        <Image
          display={{ base: 'none', sm: 'initial' }}
          src="https://img.freepik.com/free-photo/meat-with-chili-sauce-black-table_141793-1726.jpg?w=826&t=st=1702383551~exp=1702384151~hmac=3e349643ec4bbf87bc21d79244fdffad7025da098502346f5533437a37459239"
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