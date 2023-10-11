import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import ProductsScreen from './screens/ProductsScreen';
import CartScreen from './screens/CartScreen';
import ProductScreen from './screens/ProductScreen';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <div>
      <ChakraProvider>
        <Router>
          <Navbar/>
          <main>
            <Routes>
              <Route path='/' element={<HomeScreen/>}></Route>
              <Route path='/products' element={<ProductsScreen/>}></Route>
              <Route path='/product/:id' element={<ProductScreen/>}></Route>
              <Route path='/cart' element={<CartScreen/>}></Route>
            </Routes>
          </main>
          <Footer />
        </Router>
      </ChakraProvider>
    </div>
  );
}

export default App;
