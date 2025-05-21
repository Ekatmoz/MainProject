import { Box, Image, Text, Badge, Flex, IconButton, Skeleton, useToast, Tooltip, Button } from '@chakra-ui/react';
import React, { useState } from 'react';
import { addToFavorites, removeFromFavorites } from '../redux/actions/productActions';
import { useSelector, useDispatch } from 'react-redux';
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from 'react-icons/md';
import { Link as ReactLink } from 'react-router-dom';
import { addCartItem } from '../redux/actions/cartActions';
import { useEffect } from 'react';
import { TbShoppingCartPlus } from 'react-icons/tb';

const ProductCard = ({ product, loading }) => {
  const dispatch = useDispatch();
  const { favorites } = useSelector((state) => state.product);
  const [isShown, setIsShown] = useState(false);
  const { cartItems } = useSelector((state) => state.cart);
  const toast = useToast();
  const [cartPlusDisabled, setCartPlusDisabled] = useState(false);

  useEffect(() => {
    const item = cartItems.find((cartItem) => cartItem.id === product._id);
    if (item && item.qty === product.stock) {
      setCartPlusDisabled(true);
    }
  }, [product, cartItems]);

  const addItem = (id) => {
    if (cartItems.some((cartItem) => cartItem.id === id)) {
      const item = cartItems.find((cartItem) => cartItem.id === id);
      dispatch(addCartItem(id, item.qty + 1));
    } else {
      dispatch(addCartItem(id, 1));
    }
    toast({
      description: 'Item has been added.',
      status: 'success',
      isClosable: true,
    });
  };

  return (
    <Skeleton isLoaded={!loading}>
      <Box
        _hover={{ transform: 'scale(1.1)', transitionDuration: '0.5s' }}
        borderWidth='1px'
        overflow='hidden'
        p='4'
        shadow='md'
      >
        {product.productIsNew && (
          <Badge ml='2' colorScheme='purple' fontSize='2l'>
            új
          </Badge>
        )}
        <Image
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
          src={product.images[isShown && product.images.length === 2 ? 1 : 0]}
          fallbackSrc='https://via.placeholder.com/150'
          alt={product.name}
          objectFit='cover'
          w='100%'
          maxH={{ base: '150px', md: '200px', lg: '250px' }}
        />
        {product.stock < 5 ? (
          <Badge colorScheme='yellow'>csak {product.stock} db</Badge>
        ) : product.stock < 1 ? (
          <Badge colorScheme='red'>Előrendelhető</Badge>
        ) : (
          <Badge colorScheme='green' fontSize='2xs'>
            Raktáron
          </Badge>
        )}

        <Text noOfLines={1} fontSize={{ base: 'sm', md: 'md' }} fontWeight='semibold' mt='2'>
          {product.name}
        </Text>
        {/* <Text noOfLines={1} fontSize='md' color='gray.600'>
					{product.description}
				</Text> */}
        <Flex justify='space-between' alignItems='center' mt='2'>
          <Button
            as={ReactLink}
            to={`/product/${product._id}`}
            fontSize={{ base: 'xs', md: 'sm' }}
            h={{ base: '28px', md: '32px' }}
            px={{ base: 2, md: 4 }}
          >
            Részletek
          </Button>
          {/* <Badge colorScheme='red'>{product.category}</Badge> */}
          <Text fontSize={{ base: 'md', md: 'lg' }} fontWeight='semibold'>
            {product.price}Ft
          </Text>
        </Flex>
        <Flex justify='space-between' mt='2'>
          {favorites.includes(product._id) ? (
            <IconButton
              icon={<MdOutlineFavorite size={window.innerWidth < 768 ? 16 : 20} />}
              colorScheme='red'
              h={{ base: '28px', md: '32px' }}
              w={{ base: '28px', md: '32px' }}
              border='none'
              onClick={() => dispatch(removeFromFavorites(product._id))}
            />
          ) : (
            <IconButton
              icon={<MdOutlineFavoriteBorder size={window.innerWidth < 768 ? 16 : 20} />}
              colorScheme='red'
              h={{ base: '28px', md: '32px' }}
              w={{ base: '28px', md: '32px' }}
              onClick={() => dispatch(addToFavorites(product._id))}
            />
          )}
          {/* <IconButton
						//icon={<BiExpand size='20' />}
						as={ReactLink}
						to={`/product/${product._id}`}
						colorScheme='yellow'
						size='sm'
					/> */}

          <Tooltip
            isDisabled={!cartPlusDisabled}
            hasArrow
            label={
              !cartPlusDisabled
                ? 'You reached the maximum quantity jof the product. '
                : product.stock <= 0
                ? 'Out of stock'
                : ''
            }
          >
            <IconButton
              isDisabled={product.stock <= 0 || cartPlusDisabled}
              onClick={() => addItem(product._id)}
              icon={<TbShoppingCartPlus size='20' />}
              colorScheme='green'
              h={{ base: '28px', md: '32px' }}
              w={{ base: '28px', md: '32px' }}
            />
          </Tooltip>
        </Flex>
      </Box>
    </Skeleton>
  );
};

export default ProductCard;
