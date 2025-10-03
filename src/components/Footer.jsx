import './Footer.css'
import { Link } from 'react-router-dom'
import Icon from '@components/icon'


export default function Footer() {
  return (
    <footer className="footer">
      <div className='footer-container container p-3'>
        <div className='logo-social'>
           <div className="footer-logo">
          <img src="/logo.webp" alt="logo" />
          <div className="logo-text">
            <div className="store-name">ПЕРУКИ<br/>ТУТ</div>
            <span>MAГАЗИН ПЕРУК</span>
          </div>
       </div>
          <div className='social'>
            <Link to=""><Icon size={36} className="social-icon" name="facebook"/></Link>
            <Link to=""><Icon size={36} className="social-icon" name="telegram"/></Link>
            <Link to=""><Icon size={36} className="social-icon" name="viber"/></Link>
            <Link to=""><Icon size={36} className="social-icon" name="mail"/></Link>
          </div>
        </div>
        <div className='products-feedback'>
        <div className='feedback'>
          <h3>Виникли запитання ?</h3>
          <p>Ви можете <Link className='feedback-link' to="/contactUs">написати нам</Link> для звортнього зв'язку</p>
          <p>Щоденно з 9.00 до 21.00</p>
        </div>
        <div className='products-help'>
          <div className='products'>
        <ul>
          <h4>Наші товари</h4>
          <li><Link to="/products/wigs">Перуки</Link></li>
          <li><Link to="/products/tails">Хвостики</Link></li>
          <li><Link to="/products/toppers">Топери</Link></li>
        </ul>
        </div>
        <div className='help'>
          <ul>
            <h4>Допомога</h4>
            <li><Link to="/delivery">Доставка та оплата</Link></li>
            <li><Link to="/return">Обмін та повернення</Link></li>
            <li><Link to="/about">Про нас</Link></li>
            <li><Link to="/contact">Контакти</Link></li>
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
