import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Home from '@pages/Home'
import Products from '@pages/Products'
import ProductDetail from '@pages/ProductDetail'
import Cart from '@pages/Cart'
import About from '@pages/About'
import Contact from '@pages/Contact'
import Return from '@pages/Return'

function App() {
  return (
    <Router>
      <div className='wrapper'>
        <Header/>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/return" element={<Return />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
