import { useState,useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import Icon from './icon'
import './Header.css'
import Logo from './Logo'
import { ROUTES } from '@utils/constants'
import { useCart } from '@context/CartContext'


export default function Header(){
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { itemCount } = useCart();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

useEffect(() => {
  if (isMenuOpen) {
    document.documentElement.classList.add('menu-open');
  } else {
    document.documentElement.classList.remove('menu-open');
  }
}, [isMenuOpen]);


  return (
    <header>
      <div className="header-container container p-3">
        <div className="header-burger" onClick={toggleMenu}>
          <Icon
            aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
            size={24}
            name={isMenuOpen ? 'cross' : 'burger'}
          />
        </div>
        <Logo/>
        <div className={`header-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><NavLink onClick={closeMenu} to="/" className={({ isActive }) => isActive ? 'active' : ''}>Головна</NavLink></li>
            <li><NavLink onClick={closeMenu} to="/products" className={({ isActive }) => isActive ? 'active' : ''}>Католог</NavLink></li>
            <li><NavLink onClick={closeMenu} to="/about" className={({ isActive }) => isActive ? 'active' : ''}>Про нас</NavLink></li>
            <li><NavLink onClick={closeMenu} to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Контакти</NavLink></li>
          </ul>
        </div>
        <div className="header-cart">
          <Link to={`${ROUTES.CART}`}>
            {itemCount > 0 && <span className="header-cart-count">{itemCount}</span>}
            <Icon size={24} name="cart" />
          </Link>
        </div>
      </div>
    </header>
  )
}

 