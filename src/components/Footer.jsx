import './Footer.css'
import { Link } from 'react-router-dom'
import Icon from '@components/icon'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="footer">
      <div className='footer-container container p-3'>
        <div className='logo-social'>
          <Logo/>
          <div className='social'>
            <Link to=""><Icon className="social-icon" name="tiktok"/></Link>
            <Link to=""><Icon className="social-icon" name="instagram"/></Link>
            <Link to=""><Icon className="social-icon" name="facebook"/></Link>
          </div>
        </div>
        <div className='products-feedback'>
        <div className='feedback'>
          <h3>Зворотній зв'язок</h3>
          <p>Ви можете <Link className='feedback-link' to="/contact">написати нам</Link> для звортнього зв'язку</p>
          <p>Щоденно з 9.00 до 21.00</p>
        </div>
        <div className='products-help'>
          <div className='products'>
        <ul>
          <h4>Наші товари</h4>
          <li><Link to="">Перуки</Link></li>
          <li><Link to="">Хвостики</Link></li>
          <li><Link to="">Топери</Link></li>
          <li><Link to="">Розпродаж</Link></li>
        </ul>
        </div>
        <div className='help'>
          <ul>
            <h4>Допомога</h4>
            <li><Link to="/contact">Доставка та оплата</Link></li>
            <li><Link to="/return">Обмін та повернення</Link></li>
            <li><Link to="">Договір оферти</Link></li>
          </ul>
        </div>
        </div>
      </div>
      </div>
      <div className='copyright'>
        <Icon name="copyright" size={18}/>
        <p>Перуки тут 2025</p>
        </div>
    </footer>
  )
}
