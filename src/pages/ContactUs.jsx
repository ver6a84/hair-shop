import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '@styles/pages/pages.css'
import Breadcrumb from '@/components/BreadCrumb';

export default function ContactUs() {
  const form = useRef();
  const [alert, setAlert] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_id', 'template_id', form.current, 'public_key')
      .then(() => {
        setAlert({ type: 'success', message: '✅ Повідомлення надіслано!' });
        form.current.reset();
      })
      .catch(() => {
        setAlert({ type: 'error', message: '❌ Помилка при надсиланні. Спробуйте ще раз.' });
      });

    setTimeout(() => setAlert(null), 4000);
  };

  return (
    <div className="contact-us container">
      <h2>Зв’язатися з нами</h2>
			<Breadcrumb/>
      <form ref={form} autoComplete='on' onSubmit={sendEmail}>
        <label htmlFor="user_name">
  			 Ім’я <span className="required">*</span>
				</label>
				<input type="text" id="user_name" placeholder="Ваше ім’я" title="Введіть ваше ім'я" autoComplete='name'required />
         <label htmlFor="user_email">
  			 Email <span className="required">*</span>
				</label>
				<input type="email" id="user_email" placeholder="example@gmail.com" title="Введіть ваш email" autoComplete='email' required />
				 <label htmlFor="user_tel">
  			 Телефон
				</label>
				<input type="tel" id="user_tel" placeholder="+38..." title="За бажанням введіть ваш телефон" autoComplete='tel' />
         <label htmlFor="message">
  			 Повідомлення <span className="required">*</span>
				</label>
				<textarea id="message" placeholder="Ваше повідомлення" title="Напишіть ваше питання" autoComplete='off' required />
        <button type="submit">Надіслати</button>
      </form>

      {alert && (
        <div className={`custom-alert ${alert.type}`}>
          {alert.message}
        </div>
      )}
    </div>
  );
}
