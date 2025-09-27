import './ProductCard.css'

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img loading='lazy' width={200} height={200} src={product.variants[0].image} alt={product.name} />
      <div className="product-info"><h3>{product.name}</h3>
      <p className="product-description">{product.description}</p>
      <p className='product-price'>{product.variants[0].price} грн.</p>
      </div>
    </div>
  )
}