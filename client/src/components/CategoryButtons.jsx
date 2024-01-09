import { Button, Stack, Flex } from '@chakra-ui/react'

const CategoryButtons = ({filterByCategory}) => {
  return (
    <Flex justifyContent='center'>
     <Stack spacing={4} direction='row' align='center' mt='4'>
      <Button colorScheme='red' size='md' variant='outline'onClick={() => filterByCategory()}>
        All
      </Button>
      <Button colorScheme='red' size='md' variant='outline' onClick={() => filterByCategory("Sauce")}>
        Sause
      </Button>
      <Button colorScheme='red' size='md' variant='outline' onClick={() => filterByCategory("Sweets")}>
        Sweet
      </Button>
      <Button colorScheme='red' size='md' variant='outline' onClick={() => filterByCategory("Noodles")}>
        Pasta
      </Button>
      <Button colorScheme='red' size='md' variant='outline'onClick={() => filterByCategory("Frozen")}>
        Frozen
      </Button>
    </Stack>
    </Flex>
  )
}

export default CategoryButtons;