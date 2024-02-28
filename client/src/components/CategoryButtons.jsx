import { Button, Stack, Flex } from '@chakra-ui/react'

const CategoryButtons = ({filterByCategory}) => {
  return (
    <Flex justifyContent='center'>
     <Stack spacing={4} direction='row' align='center' mt='4'>
      <Button colorScheme='red' size='md' variant='outline'onClick={() => filterByCategory()}>
        All
      </Button>
      <Button colorScheme='red' size='md' variant='outline' onClick={() => filterByCategory("Sauce")}>
        Szószok
      </Button>
      <Button colorScheme='red' size='md' variant='outline' onClick={() => filterByCategory("Sweets")}>
        Édességek, snackek
      </Button>
      <Button colorScheme='red' size='md' variant='outline' onClick={() => filterByCategory("Noodles")}>
        Tészták, rizsek
      </Button>
      <Button colorScheme='red' size='md' variant='outline'onClick={() => filterByCategory("Frozen")}>
        Frozen
      </Button>
      <Button colorScheme='red' size='md' variant='outline' onClick={() => filterByCategory("Drinks")}>
        Italok
      </Button>
    </Stack>
    </Flex>
  )
}

export default CategoryButtons;