import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Icon from './icon'
import './Header.css'
import Logo from './Logo'


export default function Header(){
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
          <Icon size={24} name="cart" />
        </div>
      </div>
    </header>
  )
}

 