import { Link } from 'react-router-dom'
import './ProductCard.css'
import { getImageUrlByKey } from '@api/images'

export default function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} className="product-card-link">
      <div className="product-card">
        <img
          src={getImageUrlByKey(product.variants[0].images[0], { width: 400, height: 600, quality: 50 })}
          srcSet={`
            ${getImageUrlByKey(product.variants[0].images[0], { width: 320, height: 480, quality: 50 })} 320w,
            ${getImageUrlByKey(product.variants[0].images[0], { width: 600, height: 900, quality: 50 })} 600w
          `}
          sizes="(max-width: 600px) 100vw, 600px"
          width={400}
          height={600}
          alt={product.name}
          loading="lazy"
          style={{ width: "100%", height: "auto" }}
        />
        <h3>{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <p className='product-price'>{product.variants[0].price} грн</p>
      </div>
    </Link>
  )
}