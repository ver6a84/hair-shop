import './Footer.css'
import { Link } from 'react-router-dom'
import Icon from '@components/icon'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <div className="footer-section">
          <h3>Hair Shop</h3>
          <p>Ваш надійний партнер у світі краси та стилю</p>
        </div>
        
        <div className="footer-section">
          <h4>Навігація</h4>
          <nav className="footer-nav">
            <Link to="/">Головна</Link>
            <Link to="/products">Товари</Link>
            <Link to="/about">Про нас</Link>
            <Link to="/contact">Контакти</Link>
          </nav>
        </div>
        
        <div className="footer-section">
          <h4>Контакти</h4>
          <div className="contact-info">
            <p><Icon name="phone" /> +380 (67) 123-45-67</p>
            <p><Icon name="mail" /> info@hairshop.com</p>
            <p><Icon name="address" /> вул. Хрещатик, 22, Київ</p>
          </div>
        </div>
        
        <div className="footer-section">
          <h4>Соціальні мережі</h4>
          <div className="social-links">
            <a href="#" aria-label="Telegram"><Icon name="telegram" /></a>
            <a href="#" aria-label="Viber"><Icon name="viber" /></a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 Hair Shop. Всі права захищені.</p>
      </div>
    </footer>
  )
}
