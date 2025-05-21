import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import ProductsScreen from './screens/ProductsScreen';
import CartScreen from './screens/CartScreen';
import ProductScreen from './screens/ProductScreen';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegistrationScreen from './screens/RegistrationScreen';
import EmailVerificationScreen from './screens/EmailVerificationScreen';
import PasswordResetScreen from './screens/PasswordResetScreen';
import axios from './axiosInstance';
import { VStack, Spinner } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import CheckoutScreen from './screens/CheckoutScreen';
import CancelScreen from './screens/CancelScreen';
import YourOrdersScreen from './screens/YourOrdersScreen';
import SuccessScreen from './screens/SuccessScreen';
import AdminConsoleScreen from './screens/AdminConsoleScreen';
import TermsAndConditions from './screens/TermsAndConditions';
import Contact from './screens/Contact';
import ProfileScreen from './screens/ProfileScreen';

function App() {
  const [googleClient, setGoogleClient] = useState(null);
	useEffect(() => {
		const googleKey = async () => {
			const { data: googleId } = await axios.get('/api/config/google');
			setGoogleClient(googleId);
		};
		googleKey();
	}, [googleClient]);

  return ( <ChakraProvider> {
	!googleClient ? (
		<VStack pt='37vh'>
			<Spinner mt='20' thickness='2px' speed='0.65s' emptyColor='gray.200' color='cyan.500' size='xl' />
		</VStack>
	) : (
		<GoogleOAuthProvider clientId={googleClient}>
				<Router>
					<Navbar />
					<main>
						<Routes>
							<Route path='/products' element={<ProductsScreen />} />
							<Route path='/' element={<HomeScreen />} />
							<Route path='/product/:id' element={<ProductScreen />} />
							<Route path='/cart' element={<CartScreen />} />
							<Route path='/login' element={<LoginScreen />} />
							<Route path='/profile' element={<ProfileScreen />} />
							<Route path='/registration' element={<RegistrationScreen />} />
							<Route path='/email-verify/:token' element={<EmailVerificationScreen />} />
							<Route path='/password-reset/:token' element={<PasswordResetScreen />} />
							<Route path='/checkout' element={<CheckoutScreen />} />
							<Route path='/cancel' element={<CancelScreen />} />
							<Route path='/order-history' element={<YourOrdersScreen />} />
							<Route path='/success' element={<SuccessScreen />} />
							<Route path='/admin-console' element={<AdminConsoleScreen />} />
							<Route path='/terms&conditions' element={<TermsAndConditions />} />
							<Route path='/contact' element={<Contact/>}/>
						</Routes>
					</main>
					<Footer />
				</Router>
		</GoogleOAuthProvider>
		)}	
		</ChakraProvider>
	);
}

export default App;
