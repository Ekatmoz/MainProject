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
			// #region agent log
			fetch('http://127.0.0.1:7496/ingest/9f92fad2-514b-4fba-a5b9-78c337f6a1dc',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'36dee2'},body:JSON.stringify({sessionId:'36dee2',runId:'post-fix',hypothesisId:'B',location:'App.jsx:googleKey',message:'google config request start',data:{viteApiUrl:import.meta.env.VITE_API_URL||null,origin:window.location.origin},timestamp:Date.now()})}).catch(()=>{});
			// #endregion
			try {
				const { data: googleId } = await axios.get('/api/config/google');
				// #region agent log
				fetch('http://127.0.0.1:7496/ingest/9f92fad2-514b-4fba-a5b9-78c337f6a1dc',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'36dee2'},body:JSON.stringify({sessionId:'36dee2',runId:'post-fix',hypothesisId:'A',location:'App.jsx:googleKey:success',message:'google config success',data:{hasGoogleId:Boolean(googleId),googleIdType:typeof googleId,googleIdLength:typeof googleId==='string'?googleId.length:null},timestamp:Date.now()})}).catch(()=>{});
				// #endregion
				setGoogleClient(googleId);
			} catch (err) {
				// #region agent log
				fetch('http://127.0.0.1:7496/ingest/9f92fad2-514b-4fba-a5b9-78c337f6a1dc',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'36dee2'},body:JSON.stringify({sessionId:'36dee2',runId:'post-fix',hypothesisId:'A',location:'App.jsx:googleKey:error',message:'google config failed',data:{status:err?.response?.status||null,message:err?.message||String(err)},timestamp:Date.now()})}).catch(()=>{});
				// #endregion
				console.error('Failed to load Google client ID', err);
			}
		};
		googleKey();
	}, []);

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
