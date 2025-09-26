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
            <p>+380 (96) 987-25-45</p>
            <p>+380 (63) 436-79-91</p>
          </div>
        </div>
        
        <div className="contact-item">
          <Icon name="mail" />
          <div>
            <h3>Email</h3>
            <p>perukitut@gmail.com</p>
          </div>
        </div>
        
        <div className="contact-item">
          <Icon name="location" />
          <div>
            <h3>Адреса</h3>
            <p>проспект Коцюбинського, 13<br />Вінниця, 21000</p>
          </div>
        </div>
      </div>
      
      <div className="contact-item">
        <Icon name="calendar" />
        <div>
        <h3>Графік роботи</h3>
        <p>Вт-Нд: 9:00 - 16:00</p>
        <p></p>
        </div>
      </div>
    </div>
  )
}
