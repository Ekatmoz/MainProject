import React, { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, IconButton, Text, Center } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/actions/productActions";
import ProductCard from "./ProductCard";

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 5 },
  desktop: { breakpoint: { max: 1024, min: 800 }, items: 4 },
  tablet: { breakpoint: { max: 800, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const ProductCarousel = () => {
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProducts(1));
  }, [dispatch]);

  return (
    <Box position="relative" width="full" overflow="hidden" p={4} gap={6}>
      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={3000}
        customLeftArrow={
          <IconButton
            icon={<ChevronLeftIcon boxSize={6} />}
            aria-label="Left"
            position="absolute"
            left={0}
            top="50%"
            transform="translateY(-50%)"
            bg="gray.300"
            color="white"
            _hover={{ bg: "gray.400" }}
          />
        }
        customRightArrow={
          <IconButton
            icon={<ChevronRightIcon boxSize={6} />}
            aria-label="Right"
            position="absolute"
            right={0}
            top="50%"
            transform="translateY(-50%)"
            bg="gray.300"
            color="white"
            _hover={{ bg: "gray.400" }}
          />
        }
      >
        {error ? (
          <Text color="red.500">Error loading products: {error}</Text>
        ) : (
          products.map((product) => (
            <Center key={product._id} w="250px" h="450px">
              <ProductCard product={product} loading={loading} />
            </Center>
          ))
        )}
      </Carousel>
    </Box>
  );
};

export default ProductCarousel;
