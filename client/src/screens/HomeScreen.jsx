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
  </Box>
)

export default HomeScreen;