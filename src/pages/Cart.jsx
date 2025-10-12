import { useCart } from '@context/CartContext'
import { getImageUrlByKey } from '@api/images'
import '@styles/pages/pages.css'
import { Link } from 'react-router-dom'
import { useState,useRef } from 'react'
import Icon from '@/components/icon'
import { SERVICE_ID, TEMPLATE_ID_ORDER, PUBLIC_KEY } from '@/utils/constants';
import emailjs from '@emailjs/browser';


export default function Cart() {
  const {
    cartItems,
    total,
    itemCount,
    removeFromCart,
    updateQuantity,
    clearCart,
  } = useCart()
  const [showModal, setShowModal] = useState(false)
  const contactForm = useRef();
  const [alert, setAlert] = useState(null);
  const [isSending, setIsSending] = useState(false);
  
  const sendContactRequest = async (e) => {
   e.preventDefault();
  if (!contactForm.current || isSending) return;

  setIsSending(true);
  try {
    await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID_ORDER, contactForm.current, PUBLIC_KEY);
    setAlert({type: 'success', message: '✅ Запит на дзвінок надіслано!'});
    contactForm.current.reset();
     setTimeout(() => {
    clearCart(); 
    setAlert(null);       
    setShowModal(false);           
  }, 4000);
  } catch {
    setAlert({type: 'error', message: '❌ Помилка при надсиланні.'});
    setTimeout(() => setAlert(null), 4000);
  }finally {
    setIsSending(false);
  }
  };


  return (
    <div className="cart-page container">
      <h1>Кошик</h1>
      
      {cartItems.length === 0 ? (
        <p>Ваш кошик порожній</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <Link to={`/product/${item.id}`}>
                <img 
                  src={getImageUrlByKey(item.image, { width: 100, height: 150, quality: 50 })} 
                  alt={item.name} 
                />
                </Link>
                <div className="item-info">
                  <h3>{item.name}</h3>
                  <h4>Артикул: {item.article}</h4>
                  <p className="price">{item.price} грн</p>
                </div>
                
                <div className="quantity-controls">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
                <button 
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Видалити
                </button>
              </div>
            ))}
          </div>
          
          <div className="cart-summary">
            <p>Товарів у кошику: {itemCount}</p>
            <h2>Загальна сума: {total} грн</h2>
            <button onClick={() => setShowModal(true)} className="checkout-btn">Оформити замовлення</button>
          </div>
          {showModal && (
            <div className="modal-wrapper">
              <div className="modal-heading">
                <h2>Оформити замовлення</h2>
                <Icon onClick={() => setShowModal(false)} className="close-btn" name="close"/>
                </div>
              <form 
             ref={contactForm}
            autoComplete="on"
            className="contact-form"
            onSubmit={sendContactRequest}
            onKeyDown={(e) => {
            if (e.key === 'Enter' && isSending) {
            e.preventDefault();
            }
            }}
            >
                <div className='client-name'>
                  <label htmlFor="name" >Iм'я</label>
                <input type="text" id='name' name="user_name" placeholder="Ваше ім'я" title="Введіть ваше ім'я" autoComplete='name'/>
                </div>
                <div className='client-phone'>
                  <label htmlFor="phone">Номер телефону</label>
                <input type="tel" id='phone' name="user_tel" placeholder='+380...' pattern="\+380\d{9}" title="Введіть номер у форматі +380XXXXXXXXX" autoComplete='tel'/>
                </div>
                <div className="contact-options-selector">або</div>
                <div className='client-email'>
                  <label htmlFor="email">Email</label>
                <input type="email" id='email' name="user_email" placeholder='example@gmail.com' title="Введіть email у форматі example@gmail.com" autoComplete='email'/>
                </div>
                <p>Менеджер зв'яжеться з Вами та допоможе оформити замовлення</p>
                <input
                type="hidden"
                name="cart_items"
                value={cartItems.map(item => `${item.name} x${item.quantity}`).join(', ')}
                />
                <input
                type="hidden"
                name="cart_total"
                value={`${total} грн`}
                />
              <button type='submit' disabled={isSending}>Передзвонити мені</button>
              </form>
              {alert && (
              <div className={`client-alert ${alert.type}`}>
              {alert.message}
              </div>
              )}
            </div>
          )}
        </>
      )}
    </div>
  )
}
