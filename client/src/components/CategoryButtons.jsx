import { Button, Wrap } from '@chakra-ui/react'
import { useState } from 'react';

const CategoryButtons = ({ filterByCategory }) => {

  const [activeCategory, setActiveCategory] = useState('All');

  const handleClick = (category) => {
    setActiveCategory(category);
    filterByCategory(category);
  }

  return (
    <Wrap 
      spacing={4} // Controls the space between buttons
      justify="center" // Centers the buttons
      rowGap={4} // Vertical spacing
      columnGap={4} // Horizontal spacing
      mt="20px"
    >
      <Button 
        colorScheme='red' 
        size={["xs", "sm", "md"]}  // Button size will be smaller on mobile
        variant={activeCategory === "All" ? 'solid' : "outline" }
        onClick={() => handleClick()}
      >
        All
      </Button>
      <Button 
        colorScheme='red' 
        size={["xs","sm", "md"]} 
        variant={activeCategory === "Sauce" ? 'solid' : "outline" } 
        onClick={() => handleClick("Sauce")}
      >
        Szószok
      </Button>
      <Button 
        colorScheme='red' 
        size={["xs", "sm", "md"]} 
        variant={activeCategory === "Sweets" ? 'solid' : "outline" } 
        onClick={() => handleClick("Sweets")}
      >
        Édességek, snackek
      </Button>
      <Button 
        colorScheme='red' 
        size={["xs", "sm", "md"]} 
        variant={activeCategory === "Noodles" ? 'solid' : "outline" } 
        onClick={() => handleClick("Noodles")}
      >
        Tészták, rizsek
      </Button>
      <Button 
        colorScheme='red' 
        size={["xs", "sm", "md"]} 
        variant={activeCategory === "Frozen" ? 'solid' : "outline" } 
        onClick={() => handleClick("Frozen")}
      >
        Frozen
      </Button>
      <Button 
        colorScheme='red' 
        size={["xs", "sm", "md"]} 
        variant={activeCategory === "Drinks" ? 'solid' : "outline" } 
        onClick={() => handleClick("Drinks")}
      >
        Italok
      </Button>
    </Wrap>
  )
}

export default CategoryButtons;
