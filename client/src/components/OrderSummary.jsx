import { Button, Flex, Heading, Stack, Text, useColorModeValue as mode, Checkbox } from '@chakra-ui/react';
import { FaArrowRight } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link as ReactLink } from 'react-router-dom';

const OrderSummary = ({ checkoutSreen = false }) => {
	const { subtotal, shipping } = useSelector((state) => state.cart);

	return (
		<Stack
			minWidth='300px'
			spacing='8'
			borderWidth='1px'
			borderColor={mode('cyan.500', 'cyan.100')}
			rounded='lg'
			padding='8'
			w='full'>
			<Heading size='md'>A rendelés tartalma</Heading>
			<Stack spacing='6'>
				<Flex justify='space-between'>
					<Text fontWeight='medium' color={mode('gray.600', 'gray.400')}>
					  Részösszeg:
					</Text>
					<Text fontWeight='medium'>{subtotal}Ft</Text>
				</Flex>
				<Flex justify='space-between'>
					<Text fontWeight='medium' color={mode('gray.600', 'gray.400')}>
					  Szállítás:
					</Text>
					<Text fontWeight='medium'>{shipping}Ft</Text>
				</Flex>
				<Flex justify='space-between'>
					<Text fontSize='xl' fontWeight='extrabold'>
					  Összeg:
					</Text>
					<Text fontWeight='medium'>{Number(subtotal) + Number(shipping)}Ft</Text>
				</Flex>
			</Stack>
			<Button
				hidden={checkoutSreen}
				as={ReactLink}
				to='/checkout'
				colorScheme='cyan'
				size='lg'
				rightIcon={<FaArrowRight />}>
				Tovább a pénztárhoz
			</Button>
			{checkoutSreen && (
        <Checkbox>Elolvastam és elfogadom az Általános Szerződési Feltételeket</Checkbox>
			)}
			
		</Stack>
	);
};

export default OrderSummary;