import { Alert, AlertTitle, AlertIcon, AlertDescription, Box, Button, Center, Wrap, WrapItem } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';
import { getProducts } from '../redux/actions/productActions';
import CategoryButtons from '../components/CategoryButtons';
import { HiChevronLeft, HiChevronRight } from "react-icons/hi"

const ProductsScreen = () => {
	const dispatch = useDispatch();
	const { loading, error, products, pagination, favoritesToggled, category } = useSelector((state) => state.product);

	useEffect(() => {
		dispatch(getProducts(1));
	}, [dispatch]);

	const paginationButtonClick = (page) => {
		dispatch(getProducts(page, category));
	};

	const filterByCategory = (selectedCategory) => {
    dispatch(getProducts(1, selectedCategory)); // Fetch products with the selected category and reset to the first page
  };
	
	return (
		<>
		  <CategoryButtons filterByCategory = {filterByCategory}/>
			{products.length >= 1 && (
				<Box>
					<Wrap spacing='30px' justify='center' minHeight='80vh' mx={{ base: '6', md: '10', lg: '32' }}>
						{error ? (
							<Alert status='error'>
								<AlertIcon />
								<AlertTitle>We are sorry!</AlertTitle>
								<AlertDescription>{error}</AlertDescription>
							</Alert>
						) : (
							products.map((product) => (
								<WrapItem key={product._id} flexBasis={{ base: '45%', sm: '45%', md: '30%', lg: '22%' }} 
								maxW={{ base: '45%', sm: '45%', md: '30%', lg: '22%' }}>
									<Center w="100%" h={{ base: '300px', md: '400px', lg: '450px' }}>
										<ProductCard product={product} loading={loading} />
									</Center>
								</WrapItem>
							))
						)}
					</Wrap>
					{!favoritesToggled && (
						<Wrap spacing='10px' justify='center' p='5'>
							<Button colorScheme='green' size='xs' onClick={() => paginationButtonClick(1)}>
							<HiChevronLeft />
							</Button>
							{Array.from(Array(pagination.totalPages), (e, i) => {
								return (
									<Button
										colorScheme={pagination.currentPage === i + 1 ? 'green' : 'gray'}
										size='xs'
										key={i}
										onClick={() => paginationButtonClick(i + 1)}>
										{i + 1}
									</Button>
								);
							})}
							<Button colorScheme='green' size='xs' onClick={() => paginationButtonClick(pagination.totalPages)}>
							<HiChevronRight />
							</Button>
						</Wrap>
					)}
				</Box>
			)}
		</>
	);
};

export default ProductsScreen;