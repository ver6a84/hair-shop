import './ProductCard.css'

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.variants[0].image} alt={product.name} />
      <h3>{product.name}</h3>
      <p className="product-description">{product.description}</p>
      <p className='product-price'>{product.variants[0].price}</p>
    </div>
  )
}