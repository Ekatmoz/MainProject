import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import ProductsScreen from './screens/ProductsScreen';
import CartScreen from './screens/CartScreen';

function App() {
  return (
    <div>
      <ChakraProvider>
        <Router>
          <Navbar/>
          <main>
            <Routes>
              <Route path='/products' element={<ProductsScreen/>}></Route>
              <Route path='/cart' element={<CartScreen/>}></Route>
            </Routes>
          </main>
        </Router>
      </ChakraProvider>
    </div>
  );
}

export default App;
