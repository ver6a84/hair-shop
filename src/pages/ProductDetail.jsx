import { useParams } from 'react-router-dom'
import { useState } from 'react'
import '@styles/pages/pages.css'

export default function ProductDetail() {
  const { id } = useParams()
  const [quantity, setQuantity] = useState(1)

  // This would normally fetch product data based on ID
  // For now, we'll use mock data
  const product = {
    id: id,
    name: 'Перука "Елегантна"',
    price: 2500,
    description: 'Високоякісна перука з натурального волосся. Ідеально підходить для повсякденного носіння.',
    images: ['/Wigs.webp'],
    inStock: true
  }

  const handleAddToCart = () => {
    // Add to cart logic will go here
    console.log(`Added ${quantity} of ${product.name} to cart`)
  }

  return (
    <div className="product-detail container">
      <div className="product-images">
        <img src={product.images[0]} alt={product.name} />
      </div>
      
      <div className="product-info">
        <h1>{product.name}</h1>
        <p className="price">{product.price} грн</p>
        <p className="description">{product.description}</p>
        
        <div className="quantity-selector">
          <label>Кількість:</label>
          <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity(quantity + 1)}>+</button>
        </div>
        
        <button 
          className="add-to-cart-btn"
          onClick={handleAddToCart}
          disabled={!product.inStock}
        >
          {product.inStock ? 'Додати в кошик' : 'Немає в наявності'}
        </button>
      </div>
    </div>
  )
}
