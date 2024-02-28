import {
  Box,
  Heading,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  useColorModeValue,
  Container,
} from '@chakra-ui/react'

const BlogTags = (props) => {
  const { marginTop = 0, tags } = props

  return (
    <HStack spacing={2} marginTop={marginTop}>
      {tags.map((tag) => {
        return (
          <Tag size={'md'} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        )
      })}
    </HStack>
  )
}

const Recepies = () => {
  return (
    <Container maxW={'7xl'} p="12">
    <Heading as="h1">Check out our recepies</Heading>
    <Box
      marginTop={{ base: '1', sm: '5' }}
      display="flex"
      flexDirection={{ base: 'column', sm: 'row' }}
      justifyContent="space-between">
      <Box
        display="flex"
        flex="1"
        marginRight="3"
        position="relative"
        alignItems="center">
        <Box
          width={{ base: '100%', sm: '85%' }}
          zIndex="2"
          marginLeft={{ base: '0', sm: '5%' }}
          marginTop="5%">
          <Box textDecoration="none" _hover={{ textDecoration: 'none' }}>
            <Image
              borderRadius="lg"
              src={
                'https://plus.unsplash.com/premium_photo-1661610605309-77feabcc8772?q=80&w=2748&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              }
              alt="some good alt text"
              objectFit="contain"
            />
          </Box>
        </Box>
        <Box zIndex="1" width="100%" position="absolute" height="100%">
          <Box
            bgGradient={useColorModeValue(
              'radial(orange.600 1px, transparent 1px)',
              'radial(orange.300 1px, transparent 1px)',
            )}
            backgroundSize="20px 20px"
            opacity="0.4"
            height="100%"
          />
        </Box>
      </Box>
      <Box
        display="flex"
        flex="1"
        flexDirection="column"
        justifyContent="center"
        marginTop={{ base: '3', sm: '0' }}>
        <BlogTags tags={['Thailand', 'Product']} />
        <Heading marginTop="1">
          <Text textDecoration="none" _hover={{ textDecoration: 'none' }}>
            Pad Thai
          </Text>
        </Heading>
        <Text
          as="p"
          marginTop="2"
          color={useColorModeValue('gray.700', 'gray.200')}
          fontSize="lg">
            Az alapból készült pad thai nem éppen egy gyors étkezés – SOK hozzávalót kell elkészíteni. De hogyan készítik el az éttermek a frissen készült pad thai-t 5 perc alatt? Jó hír: nem csinálnak olyat, amit otthon ne tudna megcsinálni. De a legfontosabb, hogy a szószt ömlesztve, előre elkészítsék.
        </Text>
      </Box>
    </Box>
    <Divider marginTop="5" />
  </Container>
)
}

export default Recepies;