import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
import { getImageUrlByKey } from '@api/images'
import { useProduct } from '@hooks/useProduct'
import { useCart } from '@context/CartContext'
import '@styles/pages/pages.css'
import '@components/ProductCardSkeleton.css'
import Icon from '@/components/icon'
import Breadcrumb from '@/components/BreadCrumb'
import { useSwipeable } from 'react-swipeable';


/**
 * ProductDetail Component
 * 
 * Usage patterns:
 * 1. URL-based: <ProductDetail /> - Fetches product by ID from URL params
 * 2. Prop-based: <ProductDetail product={productObject} /> - Uses passed product directly
 * 
 * The component automatically handles loading states, error states, and both usage patterns.
 */
export default function ProductDetail({ product: passedProduct }) {
  const { id } = useParams()
  const [quantity, setQuantity] = useState(1)
  const [selectedVariant, setSelectedVariant] = useState(0)
  const [addToCartStatus, setAddToCartStatus] = useState(null) // 'success', 'error', null
 
  const swipeHandlers = useSwipeable({
  onSwipedLeft: () => 
    setActiveImageIndex(i => (i + 1) % currentVariant.images.length),
  onSwipedRight: () => 
    setActiveImageIndex(i => (i - 1 + currentVariant.images.length) % currentVariant.images.length),
  preventDefaultTouchmoveEvent: true,
  trackMouse: false,
});

  // Use passed product or fetch by ID
  const { product, loading, error } = useProduct(passedProduct, id);
  const { addToCart } = useCart();

  const [activeImageIndex, setActiveImageIndex] = useState(0)

  useEffect(() => {
  setActiveImageIndex(0)
}, [selectedVariant])

  // Loading state
  if (loading) {
    return (
      <div className="product-detail container">
        <div className="product-images">
          <div className="skeleton-image" style={{ 
            width: "100%", 
            height: "600px", 
            maxWidth: "500px"
          }}></div>
        </div>
        <div className="product-info">
          <div className="skeleton-title" style={{ 
            height: "20px", 
            marginBottom: "10px",
            width: "60%"
          }}></div>
          <div className="skeleton-price" style={{ 
            height: "30px", 
            marginBottom: "20px",
            width: "40%"
          }}></div>
          <div className="skeleton-description" style={{ 
            height: "16px", 
            marginBottom: "10px"
          }}></div>
          <div className="skeleton-description" style={{ 
            height: "16px", 
            marginBottom: "10px",
            width: "80%"
          }}></div>
          <div className="skeleton-description" style={{ 
            height: "16px", 
            marginBottom: "20px",
            width: "60%"
          }}></div>
        </div>
      </div>
    )
  }

  // Error state
  if (error || !product) {
    return (
      <div className="product-detail container">
        <h1>Товар не знайдено</h1>
        <p>Вибачте, але товар з таким ID не існує.</p>
      </div>
    )
  }

  const currentVariant = product.variants[selectedVariant]

  const handleAddToCart = () => {
    try {
      setAddToCartStatus(null)
      
      // Prepare product data for cart
      const productData = {
        productId: product.id,
        variantId: currentVariant.id,
        name: product.name,
        price: currentVariant.price,
        image: currentVariant.images[0],
        description: product.description,
        quantity: quantity
      }
      
      addToCart(productData)
      setAddToCartStatus('success')
      
      // Clear success message after 3 seconds
      setTimeout(() => setAddToCartStatus(null), 3000)
    } catch (error) {
      setAddToCartStatus('error')
      console.error('Failed to add to cart:', error)
      
      // Clear error message after 5 seconds
      setTimeout(() => setAddToCartStatus(null), 5000)
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
        <div className="main-image" {...swipeHandlers}>
        <img 
          src={getImageUrlByKey(currentVariant.images[activeImageIndex], { width: 600, height: 900, quality: 80 })}
          srcSet={`
            ${getImageUrlByKey(currentVariant.images[activeImageIndex], { width: 320, height: 480, quality: 80 })} 320w,
            ${getImageUrlByKey(currentVariant.images[activeImageIndex], { width: 600, height: 900, quality: 80 })} 600w
          `}
          sizes="(max-width: 600px) 160px, 300px"
          width={600}
          height={900}
          alt={product.name}
          style={{ width: "100%", height: "auto", maxWidth: "500px" }}
          loading="lazy"
        />
        <div className="image-selector">
          <Icon
          onMouseDown={e => e.preventDefault()}
        onClick={() => setActiveImageIndex(i => (i - 1 + currentVariant.images.length) % currentVariant.images.length)}
        className="selector-btn"
        name="arrow_left"
        size={36}
      />
         <Icon
         onMouseDown={e => e.preventDefault()}
        onClick={() => setActiveImageIndex(i => (i + 1) % currentVariant.images.length)}
        className="selector-btn"
        name="arrow_right"
        size={36}
      />
        </div>
        </div>
        {product.variants.length > 1 && (
          <div className="variant-selector">
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
      </div>
      
      <div className="product-info">
        <Breadcrumb categoryId={product.category} productName={product.name} />
        
        <h1>{product.name}</h1>
        <div className="promo">
          <p className="old-price">{product.variants[selectedVariant].old_price} грн</p>
          <p className="discount">
            -{Math.round(((product.variants[selectedVariant].old_price - product.variants[selectedVariant].price) / product.variants[selectedVariant].old_price)*100)}%
            </p>
          </div>
        <p className="price">{currentVariant.price} грн</p>
        
        <div className="product-specs">
          <p><strong>Тип волосся:</strong> {getTypeName(product.type)}</p>
          <p><strong>Довжина:</strong> {getLengthName(product.length)}</p>
          <p><strong>Колір:</strong> {getColorName(currentVariant.color)}</p>
          <p><strong>Наявність:</strong> {currentVariant.availability ? 'Є в наявності' : 'Немає в наявності'}</p>
        </div>
        
        <p className="description">{product.description}</p>
        
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
        
        {/* Add to cart status messages */}
        {addToCartStatus === 'success' && (
          <div className="add-to-cart-success">
            ✅ Товар додано до кошика!
          </div>
        )}
        {addToCartStatus === 'error' && (
          <div className="add-to-cart-error">
            ❌ Помилка при додаванні до кошика. Спробуйте ще раз.
          </div>
        )}
      </div>
  </div>
  )
}
