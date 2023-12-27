import { Button, Stack, Flex } from '@chakra-ui/react'

const CategoryButtons = () => {
  return (
    <Flex justifyContent='center'>
     <Stack spacing={4} direction='row' align='center' mt='4'>
      <Button colorScheme='red' size='md' variant='outline'>
        Sause
      </Button>
      <Button colorScheme='red' size='md' variant='outline'>
        Sweet
      </Button>
      <Button colorScheme='red' size='md' variant='outline'>
        Pasta
      </Button>
      <Button colorScheme='red' size='md' variant='outline'>
        Frozen
      </Button>
    </Stack>
    </Flex>
  )
}

export default CategoryButtons;