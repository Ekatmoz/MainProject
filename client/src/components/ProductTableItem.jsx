import { DeleteIcon } from '@chakra-ui/icons';
import {
	Badge,
	Button,
	Flex,
	FormControl,
	FormLabel,
	Input,
	Switch,
	Td,
	Text,
	Textarea,
	Tr,
	VStack,
	useDisclosure,
} from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { MdOutlineDataSaverOn } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { deleteProduct, updateProduct } from '../redux/actions/adminActions';
import ConfirmRemovalAlert from './ConfirmRemovalAlert';

const fieldValue = (field, lang) => {
	if (field == null) return '';
	if (typeof field === 'string') return field;
	return field[lang] || '';
};

const ProductTableItem = ({ product }) => {
	const { t } = useTranslation();
	const cancelRef = useRef();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [brand, setBrand] = useState(product.brand);
	const [nameEn, setNameEn] = useState(fieldValue(product.name, 'en'));
	const [nameHu, setNameHu] = useState(fieldValue(product.name, 'hu'));
	const [category, setCategory] = useState(product.category);
	const [stock, setStock] = useState(product.stock);
	const [price, setPrice] = useState(product.price);
	const [productIsNew, setProductIsNew] = useState(product.productIsNew);
	const [descriptionEn, setDescriptionEn] = useState(fieldValue(product.description, 'en'));
	const [descriptionHu, setDescriptionHu] = useState(fieldValue(product.description, 'hu'));
	const [subtitleEn, setSubtitleEn] = useState(fieldValue(product.subtitle, 'en'));
	const [subtitleHu, setSubtitleHu] = useState(fieldValue(product.subtitle, 'hu'));
	const [imageOne, setImageOne] = useState(product.images[0]);
	const [imageTwo, setImageTwo] = useState(product.images[1]);
	const [stripeId, setStripeId] = useState(product.stripeId);
	const dispatch = useDispatch();

	const onSaveProduct = () => {
		dispatch(
			updateProduct(
				brand,
				{ en: nameEn, hu: nameHu },
				category,
				stock,
				price,
				product._id,
				productIsNew,
				{ en: descriptionEn, hu: descriptionHu },
				{ en: subtitleEn, hu: subtitleHu },
				stripeId,
				imageOne,
				imageTwo
			)
		);
	};

	const openDeleteConfirmBox = () => {
		onOpen();
	};

	return (
		<>
			<Tr>
				<Td>
					<Flex direction='column' gap='2'>
						<Input size='sm' value={imageOne} onChange={(e) => setImageOne(e.target.value)} />
						<Input size='sm' value={imageTwo} onChange={(e) => setImageTwo(e.target.value)} />
					</Flex>
				</Td>
				<Td>
					<Text fontSize='xs' mb='1'>{t('admin.descriptionEn')}</Text>
					<Textarea
						w='270px'
						h='70px'
						value={descriptionEn}
						onChange={(e) => setDescriptionEn(e.target.value)}
						size='sm'
					/>
					<Text fontSize='xs' mt='2' mb='1'>{t('admin.descriptionHu')}</Text>
					<Textarea
						w='270px'
						h='70px'
						value={descriptionHu}
						onChange={(e) => setDescriptionHu(e.target.value)}
						size='sm'
					/>
				</Td>
				<Td>
					<Flex direction='column' gap='2'>
						<Input size='sm' value={brand} onChange={(e) => setBrand(e.target.value)} placeholder={t('admin.brand')} />
						<Input size='sm' value={nameEn} onChange={(e) => setNameEn(e.target.value)} placeholder={t('admin.nameEn')} />
						<Input size='sm' value={nameHu} onChange={(e) => setNameHu(e.target.value)} placeholder={t('admin.nameHu')} />
					</Flex>
				</Td>
				<Td>
					<Flex direction='column' gap='2'>
						<Input size='sm' value={stripeId} onChange={(e) => setStripeId(e.target.value)} />
						<Input size='sm' value={subtitleEn} onChange={(e) => setSubtitleEn(e.target.value)} placeholder={t('admin.subtitleEn')} />
						<Input size='sm' value={subtitleHu} onChange={(e) => setSubtitleHu(e.target.value)} placeholder={t('admin.subtitleHu')} />
					</Flex>
				</Td>
				<Td>
					<Flex direction='column' gap='2'>
						<Input size='sm' value={category} onChange={(e) => setCategory(e.target.value)} />
						<Input size='sm' value={price} onChange={(e) => setPrice(e.target.value)} />
					</Flex>
				</Td>
				<Td>
					<Flex direction='column' gap='2'>
						<Input size='sm' value={stock} onChange={(e) => setStock(e.target.value)} />
						<FormControl display='flex' alignItems='center'>
							<FormLabel htmlFor='productIsNewFlag' mb='0' fontSize='sm'>
								Enable
								<Badge rounded='full' px='1' mx='1' fontSize='0.8em' colorScheme='green'>
									New
								</Badge>
								badge ?
							</FormLabel>
							<Switch id='productIsNewFlag' onChange={() => setProductIsNew(!productIsNew)} isChecked={productIsNew} />
						</FormControl>
					</Flex>
				</Td>
				<Td>
					<VStack>
						<Button colorScheme='red' w='160px' variant='outline' onClick={openDeleteConfirmBox}>
							<DeleteIcon mr='5px' />
							{t('admin.delete')}
						</Button>
						<Button colorScheme='green' w='160px' variant='outline' onClick={onSaveProduct}>
							<MdOutlineDataSaverOn style={{ marginRight: '5px' }} />
							{t('admin.save')}
						</Button>
					</VStack>
				</Td>
			</Tr>
			<ConfirmRemovalAlert
				isOpen={isOpen}
				onOpen={onOpen}
				onClose={onClose}
				cancelRef={cancelRef}
				itemToDelete={product}
				deleteAction={deleteProduct}
			/>
		</>
	);
};

export default ProductTableItem;
