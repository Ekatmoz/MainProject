import { Button, Flex, Heading, Stack, Text, useColorModeValue as mode } from '@chakra-ui/react';
import { FaArrowRight } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link as ReactLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const OrderSummary = ({ checkoutSreen = false }) => {
	const { t } = useTranslation();
	const { subtotal, shipping } = useSelector((state) => state.cart);

	return (
		<Stack
			minWidth='300px'
			spacing='8'
			borderWidth='1px'
			borderColor={mode('blue.500', 'blue.100')}
			rounded='lg'
			padding='8'
			w='full'>
			<Heading size='md'>{t('cart.orderSummary')}</Heading>
			<Stack spacing='6'>
				<Flex justify='space-between'>
					<Text fontWeight='medium' color={mode('gray.600', 'gray.400')}>
						{t('cart.subtotal')}:
					</Text>
					<Text fontWeight='medium'>{subtotal}{t('common.ft')}</Text>
				</Flex>
				<Flex justify='space-between'>
					<Text fontWeight='medium' color={mode('gray.600', 'gray.400')}>
						{t('cart.shipping')}:
					</Text>
					<Text fontWeight='medium'>{shipping}{t('common.ft')}</Text>
				</Flex>
				<Flex justify='space-between'>
					<Text fontSize='xl' fontWeight='extrabold'>
						{t('cart.total')}:
					</Text>
					<Text fontWeight='medium'>{Number(subtotal) + Number(shipping)}{t('common.ft')}</Text>
				</Flex>
			</Stack>
			<Button
				hidden={checkoutSreen}
				as={ReactLink}
				to='/checkout'
				colorScheme='blue'
				size='lg'
				rightIcon={<FaArrowRight />}>
				{t('cart.checkout')}
			</Button>
		</Stack>
	);
};

export default OrderSummary;
