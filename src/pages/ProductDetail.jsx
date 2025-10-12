import { useParams } from 'react-router-dom'
import { useState,useEffect,useRef } from 'react'
import { getImageUrlByKey } from '@api/images'
import { useProduct } from '@hooks/useProduct'
import { useCart } from '@context/CartContext'
import '@styles/pages/pages.css'
import '@components/ProductCardSkeleton.css'
import Icon from '@/components/icon'
import Breadcrumb from '@/components/BreadCrumb'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Reviews from '@/components/Reviews'
import Rating from '@/components/Rating'
import { HAIR_TYPES_TRANSLATIONS } from '@/utils/constants';

export default function ProductDetail({ product: passedProduct }) {
  const { id } = useParams()
  const [quantity, setQuantity] = useState(1)
  const [selectedVariant, setSelectedVariant] = useState(0)
  const [addToCartStatus, setAddToCartStatus] = useState(null) // 'success', 'error', null
  const variantsRef = useRef(null);
  
  const scrollLeft = () => {
  variantsRef.current?.scrollBy({ left: -89, behavior: 'smooth' });
};

const scrollRight = () => {
  variantsRef.current?.scrollBy({ left: 89, behavior: 'smooth' });
};
 
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
        product_id: product.id,
        variantId: currentVariant.id,
        name: product.display_name,
        price: currentVariant.promo_price,
        image: currentVariant.images[0],
        article: product.article,
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
  
  return (
    <div className="product-detail container">
      <div className="product-content">
      <div className="product-images">
        <div className="main-image" >
    <Slider
    key={selectedVariant} 
    dots={true}
    infinite={true}
    speed={500}
    slidesToShow={1}
    slidesToScroll={1}
    arrows={true}
    afterChange={(index) => setActiveImageIndex(index)}
    fade={true}
  >
    {currentVariant.images.map((imgKey, index) => (
      <div key={`slide-${index}`}>
        <img
          src={getImageUrlByKey(imgKey, { width: 600, height: 900, quality: 80 })}
          srcSet={`
            ${getImageUrlByKey(imgKey, { width: 320, height: 480, quality: 80 })} 320w,
            ${getImageUrlByKey(imgKey, { width: 600, height: 900, quality: 80 })} 600w
          `}
          sizes="(max-width: 600px) 160px, 300px"
          width={600}
          height={900}
          alt={product.name}
          style={{ width: "100%", height: "auto", maxWidth: "500px", borderRadius: "16px" }}
          loading="lazy"
        />
      </div>
    ))}
  </Slider>
      </div>
        {product.variants.length > 1 && (
          <div className="variant-selector-wrapper">
            <div className={`variant-thumbnails-product ${product.variants.length < 5 ? 'centered' :''}`} ref={variantsRef}>
              {product.variants.map((variant, index) => (
                <button
                  key={`thumb-${variant.id}`}
                  className={`variant-thumbnail-product ${selectedVariant === index ? 'active' : ''} ${!variant.availability ? 'unavailable' : ''}`}
                  onClick={() => setSelectedVariant(index)}
                  disabled={!variant.availability}
                  title={`${variant.color_display_name}`}
                >
                  <img
                    src={getImageUrlByKey(variant.images[0], { width: 80, height: 80, quality: 100 })}
                    alt={`${product.name} - ${variant.color_display_name}`}
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
            {product.variants.length > 5 && (
          <div className="variants-select-btn">
            <div onClick={scrollLeft} className="btn-prev">
            <Icon name="arrow_left"/>
            </div>
            <div onClick={scrollRight} className="btn-prev">
            <Icon name="arrow_right"/>
            </div>
          </div>
          )}
          </div>
        )}
      </div>
      
      <div className="product-info">
        <div className="characteristic">
        <Breadcrumb categoryId={product.category} productName={product.display_name} />
        <h2>{product.display_name}</h2>
        <p className='article'>Артикул: {product.article}</p>
        <a href="#reviews"><Rating product_id={product.id}/></a>

        <div className="promo">
          <p className="old-price">{product.variants[selectedVariant].price} грн</p>
          <p className="discount">
            {Math.round(((product.variants[selectedVariant].promo_price - product.variants[selectedVariant].price) / product.variants[selectedVariant].price)*100)}%
            </p>
          </div>
        <p className="price">{currentVariant.promo_price} грн</p>
        
        <div className="product-specs">
          <p><strong>Тип волосся:</strong> {HAIR_TYPES_TRANSLATIONS[product.type]}</p>
          <p><strong>Довжина:</strong> {product.length}</p>
          <p><strong>Колір:</strong> {currentVariant.color_display_name}</p>
          <p><strong>Наявність:</strong> {currentVariant.availability ? 'Є в наявності' : 'Немає в наявності'}</p>
        </div>
        <p className="description">{product.description}</p>
        </div>
        <div className="cart-options">
        <div className="quantity-selector">
          <label>Кількість:</label>
          <div className="quantity-controls">
            <button onClick={() => setQuantity(Math.max(1, quantity - 1))}><Icon className="btn-icon" name="minus" size={12}/></button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)}><Icon className="btn-icon" name="plus" size={12}/></button>
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
        {/* Add to cart status messages */}
        {addToCartStatus === 'success' && (
          <div className="add-to-cart-success">
            ✅ Товар додано до кошика!
          </div>
        )}
        {addToCartStatus === 'error' && (
          <div className="add-to-cart-error">
            ❌ Помилка при додаванні до кошика.<br/> Спробуйте ще раз.
          </div>
        )}
      </div>
      </div>
      <Reviews product_id={product.id}/>
  </div>
  )
}