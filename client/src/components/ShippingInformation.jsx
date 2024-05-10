import {
	Box,
	Button,
	Flex,
	FormControl,
	Heading,
	Radio,
	RadioGroup,
	Stack,
	Text,
	VStack
} from '@chakra-ui/react';
import { Formik, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { setShipping } from '../redux/actions/cartActions';
import { setAddress, setPayment } from '../redux/actions/orderActions';
import TextField from './TextField';
import { Link as ReactLink } from 'react-router-dom';

const ShippingInformation = () => {
	const { shipping } = useSelector((state) => state.cart);
	const { shippingAddress } = useSelector((state) => state.order);

	const dispatch = useDispatch();

	const onSubmit = async (values) => {
		dispatch(setAddress(values));
		dispatch(setPayment());
	};

	return (
		<Formik
			initialValues={{
				receiver: shippingAddress ? shippingAddress.receiver : '',
				surname: shippingAddress ? shippingAddress.surname : '',
				address: shippingAddress ? shippingAddress.address : '',
				postalCode: shippingAddress ? shippingAddress.postalCode : '',
				city: shippingAddress ? shippingAddress.city : '',
				country: 'Magyarország',
				termsAndConditions: false,
			}}
			validationSchema={Yup.object({
				receiver: Yup.string().required('We need a surname.').min(2, 'This surname is too short.'),
				surname: Yup.string().required('We need a name.').min(2, 'This name is too short.'),
				address: Yup.string().required('We need an address.').min(2, 'This address is too short.'),
				postalCode: Yup.string().required('We need a postal code.').min(2, 'This postal code is too short.'),
				city: Yup.string().required('We need a city.').min(2, 'This city is too short.'),
				country: Yup.string().required('We need a country.').min(2, 'This country is too short.'),
				termsAndConditions: Yup.boolean().oneOf([true], 'Az Általános Szerződési Feltételek elfogadása kötelező'),
			})}
			onSubmit={onSubmit}>
			{(formik) => (
				<>
					<VStack as='form'>
						<FormControl>
							<Flex>
								<Box flex='1' mr='10'>
								  <TextField name='receiver' placeholder='Vezetéknév' label='Vezetéknév' />
								</Box>
								<Box flex='1' mr='10'>
								<TextField name='surname' placeholder='Keresztnév' label='Keresztnév' />
								</Box>
							</Flex>
							<TextField name='address' placeholder='Utca, házszám' label='Utca, házszám' />
							<Flex>
								<Box flex='1' mr='10'>
									<TextField name='postalCode' placeholder='Irányítószám' label='Irányítószám' type='number' />
								</Box>
								<Box flex='2'>
									<TextField name='city' placeholder='Város' label='Város' />
								</Box>
							</Flex>
							{/* <TextField name='country' placeholder='Country' label='Country' /> */}
							<Text>{formik.values.country}*</Text>
						</FormControl>
						<Box w='100%' pr='5' mt='5'>
							<Heading fontSize='2xl' fontWeight='extrabold' mb='10'>
							  Szállítási módot
							</Heading>
							<RadioGroup
								onChange={(e) => {
									dispatch(setShipping(e === 'express' ? Number(1990) : Number(0)));
								}}
								defaultValue={shipping === 0 ? 'pickup' : 'express'}>
								<Stack direction={{ base: 'column', lg: 'row' }} align={{ lg: 'flex-start' }}>
									<Stack pr='10' spacing={{ base: '8', md: '10' }} flex='1.5'>
										<Box>
											<Radio value='express'>
												<Text fontWeight='bold'>Futárszolgálat - GLS</Text>
												{/* <Text>Dispatched in 24 hours</Text> */}
											</Radio>
										</Box>
									</Stack>
									<Radio value='pickup'>
										<Box>
											<Text fontWeight='bold'>Személyes átvétel</Text>
											<Text>Dispatched in 2 - 3 days</Text>
										</Box>
									</Radio>
								</Stack>
							</RadioGroup>
							<Heading fontSize='2xl' fontWeight='extrabold' mb='10' mt='10'>
							  Fizetés módot
								<Text>bankkártyás fizetés</Text>
								<Text> Utánvétes fizetés</Text>
							</Heading>
						</Box>
						<Box w='100%' pr='5' mt='5'>
						<label>
                <Field type="checkbox" name="termsAndConditions" style={{ marginRight: '5px', fontWeight: 'bold', color: formik.touched.termsAndConditions && formik.errors.termsAndConditions ? 'red' : 'inherit' }}/>
								  Elolvastam és elfogadom az Általános Szerződési Feltételeket
              </label>
							{formik.touched.termsAndConditions && formik.errors.termsAndConditions ? (
                <div style={{ color: 'red', fontSize: '12px' }}>{formik.errors.termsAndConditions}</div>
              ) : null}
						</Box>
					</VStack>
					<Flex alignItems='center' gap='2' mt='5' direction={{ base: 'column', lg: 'row' }}>
						<Button 
						  variant='outline' 
							colorScheme='blue' 
							w='100%' 
							as={ReactLink} 
							to='/cart'>
						  Vissza a kosárba
						</Button>
						<Button
							variant='solid'
							colorScheme='blue'
							w='100%'
							as={ReactLink}
							to='/payment'
							onClick={formik.handleSubmit}>
							Megrendelés
						</Button>
					</Flex>
				</>
			)}
		</Formik>
	);
};

export default ShippingInformation;