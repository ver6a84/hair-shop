import { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from './icon'
import './Header.css'
import Logo from './Logo'


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header>
      <div className="header-container container p-3">
        <div className="header-burger">
          <Icon onClick={toggleMenu} size={24} name="burger" />
        </div>
        <Logo/>
        <div className={`header-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><Link onClick={closeMenu} to="/">Головна</Link></li>
            <li><Link onClick={closeMenu} to="/products">Товари</Link></li>
            <li><Link onClick={closeMenu} to="/about">Про нас</Link></li>
            <li><Link onClick={closeMenu} to="/contact">Контакти</Link></li>
          </ul>
        </div>
        <div className="header-cart">
          <Icon size={24} name="cart" />
        </div>
      </div>
    </header>
  )
}

export default Header
