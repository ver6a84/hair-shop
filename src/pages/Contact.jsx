import Icon from '@components/icon'
import '@styles/pages/pages.css'

export default function Contact() {
  return (
    <div className="contact-page container">
      <h1>Контакти</h1>
      
      <div className="contact-info">
        <div className="contact-item">
          <Icon name="phone" />
          <div>
            <h3>Телефон</h3>
            <p>+380 (67) 123-45-67</p>
          </div>
        </div>
        
        <div className="contact-item">
          <Icon name="mail" />
          <div>
            <h3>Email</h3>
            <p>info@hairshop.com</p>
          </div>
        </div>
        
        <div className="contact-item">
          <Icon name="address" />
          <div>
            <h3>Адреса</h3>
            <p>вул. Хрещатик, 22<br />Київ, 01001</p>
          </div>
        </div>
      </div>
      
      <div className="working-hours">
        <h3>Графік роботи</h3>
        <p>Пн-Пт: 9:00 - 19:00</p>
        <p>Сб-Нд: 10:00 - 18:00</p>
      </div>
    </div>
  )
}
