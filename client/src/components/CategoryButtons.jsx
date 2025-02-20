import { Button, Wrap } from '@chakra-ui/react'

const CategoryButtons = ({ filterByCategory }) => {
  return (
    <Wrap 
      spacing={4} // Controls the space between buttons
      justify="center" // Centers the buttons
      rowGap={4} // Vertical spacing
      columnGap={4} // Horizontal spacing
    >
      <Button 
        colorScheme='red' 
        size={["sm", "md"]}  // Button size will be smaller on mobile
        variant='outline' 
        onClick={() => filterByCategory()}
      >
        All
      </Button>
      <Button 
        colorScheme='red' 
        size={["sm", "md"]} 
        variant='outline' 
        onClick={() => filterByCategory("Sauce")}
      >
        Szószok
      </Button>
      <Button 
        colorScheme='red' 
        size={["sm", "md"]} 
        variant='outline' 
        onClick={() => filterByCategory("Sweets")}
      >
        Édességek, snackek
      </Button>
      <Button 
        colorScheme='red' 
        size={["sm", "md"]} 
        variant='outline' 
        onClick={() => filterByCategory("Noodles")}
      >
        Tészták, rizsek
      </Button>
      <Button 
        colorScheme='red' 
        size={["sm", "md"]} 
        variant='outline' 
        onClick={() => filterByCategory("Frozen")}
      >
        Frozen
      </Button>
      <Button 
        colorScheme='red' 
        size={["sm", "md"]} 
        variant='outline' 
        onClick={() => filterByCategory("Drinks")}
      >
        Italok
      </Button>
    </Wrap>
  )
}

export default CategoryButtons;
