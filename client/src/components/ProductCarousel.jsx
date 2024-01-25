import { 
  HStack, 
  Icon, 
  useColorModeValue as mode, 
  Link, 
  AlertTitle, 
  AlertDescription,
  Alert,
  AlertIcon,
  WrapItem,
  Center,
  Box,
} from '@chakra-ui/react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link as ReactLink } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProducts } from '../redux/actions/productActions';
import ProductCard from './ProductCard';

const ProductCarousel = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 4,
      slidesToSlide: 2,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const dispatch = useDispatch();
	const { loading, error, products } = useSelector((state) => state.product);

  useEffect(() => {
		dispatch(getProducts(1));
	}, [dispatch]);

  return (
    <Box>
      <Carousel showDots={true} responsive={responsive} infinite={true} >
						{error ? (
							<Alert status='error'>
								<AlertIcon />
								<AlertTitle>We are sorry!</AlertTitle>
								<AlertDescription>{error}</AlertDescription>
							</Alert>
						) : (
							products.map((product) => (
                product.productIsNew && (
								<WrapItem key={product._id}>
									<Center w='250px' h='450px'>
										<ProductCard product={product} loading={loading} />
									</Center>
								</WrapItem>
                )
							))
						)}
      </Carousel>
      <HStack spacing="3" p="2">
        <Link as={ReactLink} to='/products' color={mode('red.500', 'red.300')} fontWeight="bold" fontSize="lg">
          See all
        </Link>
        <Icon color={mode('red.500', 'red.300')} as={FaArrowRight} />
      </HStack>
    </Box>
  )
}

export default ProductCarousel;