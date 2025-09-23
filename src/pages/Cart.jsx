import { useState } from 'react'
import '@styles/pages/pages.css'

export default function Cart() {
  // This would normally come from a context or state management
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Перука "Елегантна"',
      price: 2500,
      quantity: 1,
      image: '/Wigs.webp'
    }
  ])

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id))
  }

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(id)
      return
    }
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ))
  }

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)

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
                <img src={item.image} alt={item.name} />
                <div className="item-info">
                  <h3>{item.name}</h3>
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
            <h2>Загальна сума: {total} грн</h2>
            <button className="checkout-btn">Оформити замовлення</button>
          </div>
        </>
      )}
    </div>
  )
}
