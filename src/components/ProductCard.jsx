import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'
import './ProductCard.css'
import { getImageUrlByKey } from '@api/images'


export default function ProductCard({ product }) {
  const [selectedVariant, setSelectedVariant] = useState(0);

    useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Product",
      "name": product.name,
      "image": getImageUrlByKey(product.variants[selectedVariant].images[0], { width: 600, height: 900 }),
      "description": product.description,
      "sku": product.id,
      "brand": { "@type": "Brand", "name": "ПЕРУКИ ТУТ" },
      "offers": {
        "@type": "Offer",
        "priceCurrency": "UAH",
        "price": product.variants[selectedVariant].price,
        "availability": "https://schema.org/InStock",
        "url": `https://peruki-tut.ua/product/${product.id}`
      }
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [product, selectedVariant]);



  const handleVariantClick = (e, variantIndex) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedVariant(variantIndex);
  };

  return (
    
    <Link to={`/product/${product.id}`} className="product-card-link">
      <div className="product-card">
        <div className="product-image-container">
          <img
            src={getImageUrlByKey(product.variants[selectedVariant].images[0], { width: 400, height: 600, quality: 50 })}
            srcSet={`
              ${getImageUrlByKey(product.variants[selectedVariant].images[0], { width: 320, height: 480, quality: 50 })} 320w,
              ${getImageUrlByKey(product.variants[selectedVariant].images[0], { width: 600, height: 900, quality: 50 })} 600w
            `}
            sizes="(max-width: 600px) 160px, 300px"
            width={400}
            height={600}
            alt={product.name}
            loading="lazy"
            className="product-main-image"
          />
          {product.variants.length > 1 && (
            <div className="product-variants">
              {product.variants.map((variant, index) => (
                <button
                  key={index}
                  className={`variant-thumbnail ${selectedVariant === index ? 'active' : ''}`}
                  onClick={(e) => handleVariantClick(e, index)}
                  tabIndex="-1"
                  aria-label={`Select variant ${index + 1}`}
                >
                  <img
                    src={getImageUrlByKey(variant.images[0], { width: 60, height: 60, quality: 50 })}
                    alt={`${product.name} variant ${index + 1}`}
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
        <div className='product-card-content'>
        <h3>{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="promo">
          <p className="old-price">{product.variants[selectedVariant].old_price} грн</p>
          <p className="discount">
            -{Math.round(((product.variants[selectedVariant].old_price - product.variants[selectedVariant].price) / product.variants[selectedVariant].old_price)*100)}%
            </p>
          </div>
        <p className='product-price'>{product.variants[selectedVariant].price} грн</p>
        </div>
      </div>
    </Link>
  )
}