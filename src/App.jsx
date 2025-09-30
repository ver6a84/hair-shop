import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartProvider } from '@context/CartContext'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Home from '@pages/Home'
import Products from '@pages/Products'
import ProductDetail from '@pages/ProductDetail'
import Cart from '@pages/Cart'
import About from '@pages/About'
import Contact from '@pages/Contact'
import Return from '@pages/Return'
import Delivery from '@pages/Delivery'
import Wigs from '@pages/Wigs'
import Tails from './pages/Tails'
import Toppers from './pages/Toppers'
import ScrollToTop from '@components/ScrollTop'
import { ROUTES } from '@utils/constants'
import ContactUs from './pages/ContactUs'

function App() {
  return (
    <CartProvider>
      <Router>
        <div className='wrapper'>
          <Header/>
          <ScrollToTop />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/wigs" element={<Wigs />} />
              <Route path="/products/tails" element={<Tails />} />
              <Route path="/products/toppers" element={<Toppers />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path={ROUTES.CART} element={<Cart />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/return" element={<Return />} />
              <Route path="/delivery" element={<Delivery />} />
              <Route path="/contactUs" element={<ContactUs />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  )
}

export default App
