import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { getProducts } from '@api/index'
import { getImageUrlByKey } from '@api/images'
import '@styles/pages/pages.css'

export default function ProductDetail() {
  const { id } = useParams()
  const [quantity, setQuantity] = useState(1)
  const [selectedVariant, setSelectedVariant] = useState(0)

  // Get all products and find the one with matching ID
  const allProducts = getProducts({})
  const product = allProducts.find(p => p.id === parseInt(id))

  if (!product) {
    return (
      <div className="product-detail container">
        <h1>Товар не знайдено</h1>
        <p>Вибачте, але товар з таким ID не існує.</p>
      </div>
    )
  }

  const currentVariant = product.variants[selectedVariant]

  const handleAddToCart = () => {
    // Add to cart logic will go here
    console.log(`Added ${quantity} of ${product.name} (${currentVariant.id}) to cart`)
  }

  const getCategoryName = (categoryId) => {
    switch(categoryId) {
      case 1: return 'Перуки'
      case 2: return 'Хвости'
      case 3: return 'Топери'
      default: return 'Товар'
    }
  }

  const getTypeName = (typeId) => {
    switch(typeId) {
      case 1: return 'Натуральне волосся'
      case 2: return 'Синтетичне волосся'
      default: return 'Невідомо'
    }
  }

  const getLengthName = (lengthId) => {
    switch(lengthId) {
      case 1: return 'Коротка'
      case 2: return 'Середня'
      case 3: return 'Довга'
      default: return 'Невідомо'
    }
  }

  const getColorName = (colorId) => {
    switch(colorId) {
      case 1: return 'Чорний'
      case 2: return 'Коричневий'
      case 3: return 'Блонд'
      case 4: return 'Рудий'
      default: return 'Невідомо'
    }
  }

  return (
    <div className="product-detail container">
      <div className="product-images">
        <img 
          src={getImageUrlByKey(currentVariant.images[0], { width: 600, height: 900, quality: 80 })}
          alt={product.name}
          style={{ width: "100%", height: "auto", maxWidth: "500px" }}
        />
      </div>
      
      <div className="product-info">
        <div className="breadcrumb">
          <span>{getCategoryName(product.category)}</span> / <span>{product.name}</span>
        </div>
        
        <h1>{product.name}</h1>
        <p className="price">{currentVariant.price} грн</p>
        
        <div className="product-specs">
          <p><strong>Тип волосся:</strong> {getTypeName(product.type)}</p>
          <p><strong>Довжина:</strong> {getLengthName(product.length)}</p>
          <p><strong>Колір:</strong> {getColorName(currentVariant.color)}</p>
          <p><strong>Наявність:</strong> {currentVariant.availability ? 'Є в наявності' : 'Немає в наявності'}</p>
        </div>
        
        <p className="description">{product.description}</p>
        
        {product.variants.length > 1 && (
          <div className="variant-selector">
            <label>Варіанти:</label>
            
            {/* Visual variant thumbnails */}
            <div className="variant-thumbnails">
              {product.variants.map((variant, index) => (
                <button
                  key={`thumb-${variant.id}`}
                  className={`variant-thumbnail ${selectedVariant === index ? 'active' : ''} ${!variant.availability ? 'unavailable' : ''}`}
                  onClick={() => setSelectedVariant(index)}
                  disabled={!variant.availability}
                  title={`${getColorName(variant.color)} - ${variant.price} грн`}
                >
                  <img
                    src={getImageUrlByKey(variant.images[0], { width: 60, height: 60, quality: 50 })}
                    alt={`${product.name} - ${getColorName(variant.color)}`}
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          </div>
        )}
        
        <div className="quantity-selector">
          <label>Кількість:</label>
          <div className="quantity-controls">
            <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)}>+</button>
          </div>
        </div>
        
        <button 
          className="add-to-cart-btn"
          onClick={handleAddToCart}
          disabled={!currentVariant.availability}
        >
          {currentVariant.availability ? 'Додати в кошик' : 'Немає в наявності'}
        </button>
      </div>
    </div>
  )
}
