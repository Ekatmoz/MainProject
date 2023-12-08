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
import ProfileScreen from './screens/ProfileScreen';
import CheckoutScreen from './screens/CheckoutScreen';
import YourOrdersScreen from './screens/YourOrdersScreen';
import AdminConsoleScreen from './screens/AdminConsoleScreen';
import CancelScreen from './screens/CancelScreen';
import SuccessScreen from './screens/SuccessScreen';
import EmailVerificationScreen from './screens/EmailVerificationScreen';
import PasswordResetScreen from './screens/PasswordResetScreen';

function App() {
  return (
    <div>
      <ChakraProvider>
        <Router>
          <Navbar />
          <main>
            <Routes>
              <Route path='/' element={<HomeScreen/>}></Route>
              <Route path='/products' element={<ProductsScreen/>}></Route>
              <Route path='/product/:id' element={<ProductScreen/>}></Route>
              <Route path='/cart' element={<CartScreen/>}></Route>
              <Route path='/login' element={<LoginScreen/>}></Route>
              <Route path='/registration' element={<RegistrationScreen />}></Route>
              <Route path='/email-verify/:token' element={<EmailVerificationScreen />} />
              <Route path='/password-reset/:token' element={<PasswordResetScreen />} />
              <Route path='/profile' element={<ProfileScreen />}></Route>
              <Route path='/checkout' element={<CheckoutScreen/>}></Route>
              <Route path='/cancel' element={<CancelScreen/>}></Route>
              <Route path='/order-history' element={<YourOrdersScreen/>}></Route>
              <Route path='/success' element={<SuccessScreen/>}></Route>
              <Route path='/admin-console' element={<AdminConsoleScreen/>}></Route>
            </Routes>
          </main>
          <Footer />
        </Router>
      </ChakraProvider>
    </div>
  );
}

export default App;
