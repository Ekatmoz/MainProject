import React, { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, Text, Center } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/actions/productActions";
import ProductCard from "./ProductCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4 
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 2,
  }
};
const CustomDot = ({ onClick, active }) => (
  <Box
    as="button"
    w="12px"
    h="12px"
    mt="20px"
    borderRadius="full"
    bg={active ? "red.500" : "red.200"}
    mx="4"
    transition="0.3s"
    _hover={{ bg: "red.600" }}
    onClick={onClick}
  />
);


const ProductCarousel = () => {
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProducts(1));
  }, [dispatch]);

  return (
    <Box width="full" overflow="hidden" p={4} gap={6}>
      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        showDots
        swipeable
        draggable
        customDot={<CustomDot />}
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
