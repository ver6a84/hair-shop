import { useCart } from '@context/CartContext'
import { getImageUrlByKey } from '@api/images'
import '@styles/pages/pages.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Icon from '@/components/icon'

export default function Cart() {
  const {
    cartItems,
    total,
    itemCount,
    removeFromCart,
    updateQuantity,
  } = useCart()
  const [showModal, setShowModal] = useState(false)
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
                  <p className="price">{item.price} грн</p>
                  {item.description && (
                    <p className="description">{item.description}</p>
                  )}
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
              <form action="" className="contact-form">
                <div>
                  <label htmlFor="name" >Iм'я</label>
                <input type="text" id='name' placeholder="Ваше ім'я" />
                </div>
                <div>
                  <label htmlFor="phone">Номер телефону</label>
                <input type="tel" id='phone' placeholder='+38 (097) 777-77-77' />
                </div>
                <p>Менеджер передзвонить та допоможе<br/> оформити замовлення</p>
                <button>Передзвонити мені</button>
              </form>
            </div>
          )}
        </>
      )}
    </div>
  )
}
