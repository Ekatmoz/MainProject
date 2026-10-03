import { CloseButton, Flex, Image, Select, Spacer, Text, VStack, useColorModeValue as mode } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { addCartItem, removeCartItem } from '../redux/actions/cartActions';
import { getLocalized } from '../utils/localized';

const CartItem = ({ cartItem }) => {
	const { i18n, t } = useTranslation();
	const { name, image, price, stock, qty, id, brand } = cartItem;
	const dispatch = useDispatch();
	const displayName = getLocalized(name, i18n.language);

	return (
		<Flex minWidth='300px' borderWidth='1px' rounded='lg' align='center'>
			<Image rounded='lg' w='120px' h='120px' fit='cover' src={image} fallbackSrc='https://via.placeholder.com/150' />
			<VStack p='2' w='100%' spacing='4' align='stretch'>
				<Flex alignItems='center' justify='space-between'>
					<Text fontWeight='medium'>
						{brand} {displayName}
					</Text>
					<Spacer />
					<CloseButton onClick={() => dispatch(removeCartItem(id))} />
				</Flex>
				<Spacer />
				<Flex alignItems='center' justify='space-between'>
					<Select
						maxW='68px'
						focusBorderColor={mode('gray.300', 'gray.100')}
						value={qty}
						onChange={(e) => {
							dispatch(addCartItem(id, e.target.value));
						}}>
						{[...Array(stock).keys()].map((item) => (
							<option key={item + 1} value={item + 1}>
								{item + 1}
							</option>
						))}
					</Select>
					<Text fontWeight='bold'>{price}{t('common.ft')}</Text>
				</Flex>
			</VStack>
		</Flex>
	);
};

export default CartItem;
