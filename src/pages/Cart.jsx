import { useCart } from '@context/CartContext'
import { getImageUrlByKey } from '@api/images'
import '@styles/pages/pages.css'

export default function Cart() {
  const {
    cartItems,
    total,
    itemCount,
    removeFromCart,
    updateQuantity
  } = useCart()

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
                <img 
                  src={getImageUrlByKey(item.image, { width: 100, height: 150, quality: 50 })} 
                  alt={item.name} 
                />
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
            <button className="checkout-btn">Оформити замовлення</button>
          </div>
        </>
      )}
    </div>
  )
}
