import {
	Tr,
	Td,
	Button,
	VStack,
	Textarea,
	Tooltip,
	Input,
	FormControl,
	Switch,
	FormLabel,
	Text,
	Badge,
	Spacer,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { uploadProduct } from '../redux/actions/adminActions';

const AddNewProduct = () => {
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const [brand, setBrand] = useState('');
	const [nameEn, setNameEn] = useState('');
	const [nameHu, setNameHu] = useState('');
	const [category, setCategory] = useState('');
	const [stock, setStock] = useState('');
	const [price, setPrice] = useState('');
	const [productIsNew, setProductIsNew] = useState(false);
	const [descriptionEn, setDescriptionEn] = useState('');
	const [descriptionHu, setDescriptionHu] = useState('');
	const [imageOne, setImageOne] = useState('');
	const [subtitleEn, setSubtitleEn] = useState('');
	const [subtitleHu, setSubtitleHu] = useState('');
	const [stripeId, setStripeId] = useState('');
	const [imageTwo, setImageTwo] = useState('');

	const createNewProduct = () => {
		dispatch(
			uploadProduct({
				brand,
				name: { en: nameEn, hu: nameHu },
				category,
				stock,
				price,
				stripeId,
				subtitle: { en: subtitleEn, hu: subtitleHu },
				images: [`/images/${imageOne}`, `/images/${imageTwo}`],
				productIsNew,
				description: { en: descriptionEn, hu: descriptionHu },
			})
		);
	};

	return (
		<Tr>
			<Td>
				<Text fontSize='sm'>Image File Name 1</Text>
				<Tooltip label={'Set the name of your first image e.g., Soya sauce.jpg'} fontSize='sm'>
					<Input size='sm' value={imageOne} onChange={(e) => setImageOne(e.target.value)} />
				</Tooltip>
				<Spacer />
				<Text fontSize='sm'>Image File Name 2</Text>
				<Tooltip label={'Set the name of you second image e.g., Teriyaki.jpg'} fontSize='sm'>
					<Input size='sm' value={imageTwo} onChange={(e) => setImageTwo(e.target.value)} />
				</Tooltip>
			</Td>
			<Td>
				<Text fontSize='sm'>{t('admin.descriptionEn')}</Text>
				<Textarea
					value={descriptionEn}
					w='270px'
					h='80px'
					onChange={(e) => setDescriptionEn(e.target.value)}
					placeholder='EN'
					size='sm'
				/>
				<Text fontSize='sm' mt='2'>{t('admin.descriptionHu')}</Text>
				<Textarea
					value={descriptionHu}
					w='270px'
					h='80px'
					onChange={(e) => setDescriptionHu(e.target.value)}
					placeholder='HU'
					size='sm'
				/>
			</Td>
			<Td>
				<Text fontSize='sm'>{t('admin.brand')}</Text>
				<Input size='sm' value={brand} onChange={(e) => setBrand(e.target.value)} placeholder='Kikkoman' />
				<Text fontSize='sm'>{t('admin.nameEn')}</Text>
				<Input size='sm' value={nameEn} onChange={(e) => setNameEn(e.target.value)} />
				<Text fontSize='sm'>{t('admin.nameHu')}</Text>
				<Input size='sm' value={nameHu} onChange={(e) => setNameHu(e.target.value)} />
			</Td>
			<Td>
				<Text fontSize='sm'>StripeId</Text>
				<Input size='sm' value={stripeId} onChange={(e) => setStripeId(e.target.value)} />
				<Text fontSize='sm'>{t('admin.subtitleEn')}</Text>
				<Input size='sm' value={subtitleEn} onChange={(e) => setSubtitleEn(e.target.value)} />
				<Text fontSize='sm'>{t('admin.subtitleHu')}</Text>
				<Input size='sm' value={subtitleHu} onChange={(e) => setSubtitleHu(e.target.value)} />
			</Td>
			<Td>
				<Text fontSize='sm'>{t('admin.category')}</Text>
				<Input size='sm' value={category} onChange={(e) => setCategory(e.target.value)} placeholder='Sauce' />
				<Text fontSize='sm'>{t('admin.price')}</Text>
				<Input size='sm' value={price} onChange={(e) => setPrice(e.target.value)} placeholder='1290' />
			</Td>

			<Td>
				<Text fontSize='sm'>{t('admin.stock')}</Text>
				<Input size='sm' value={stock} onChange={(e) => setStock(e.target.value)} />
				<FormControl display='flex' alignItems='center' mt='2'>
					<FormLabel htmlFor='productIsNewFlag' mb='0' fontSize='sm'>
						{t('admin.newProduct')}
					</FormLabel>
					<Switch id='productIsNewFlag' onChange={() => setProductIsNew(!productIsNew)} isChecked={productIsNew} />
				</FormControl>
			</Td>
			<Td>
				<VStack>
					<Button variant='outline' w='160px' colorScheme='cyan' onClick={createNewProduct}>
						<Text ml='2'>{t('admin.save')}</Text>
					</Button>
				</VStack>
			</Td>
		</Tr>
	);
};

export default AddNewProduct;
