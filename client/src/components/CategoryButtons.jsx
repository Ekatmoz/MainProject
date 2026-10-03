import { Button, Wrap } from '@chakra-ui/react'
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const CategoryButtons = ({ filterByCategory }) => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('All');

  const handleClick = (category) => {
    setActiveCategory(category || 'All');
    filterByCategory(category);
  }

  const categories = [
    { key: 'All', label: t('categories.all'), value: undefined },
    { key: 'Sauce', label: t('categories.sauce'), value: 'Sauce' },
    { key: 'Sweets', label: t('categories.sweets'), value: 'Sweets' },
    { key: 'Noodles', label: t('categories.noodles'), value: 'Noodles' },
    { key: 'Frozen', label: t('categories.frozen'), value: 'Frozen' },
    { key: 'Drinks', label: t('categories.drinks'), value: 'Drinks' },
  ];

  return (
    <Wrap
      spacing={4}
      justify="center"
      rowGap={4}
      columnGap={4}
      mt="20px"
    >
      {categories.map((cat) => (
        <Button
          key={cat.key}
          colorScheme='red'
          size={["xs", "sm", "md"]}
          variant={activeCategory === cat.key ? 'solid' : "outline"}
          onClick={() => handleClick(cat.value)}
        >
          {cat.label}
        </Button>
      ))}
    </Wrap>
  )
}

export default CategoryButtons;
