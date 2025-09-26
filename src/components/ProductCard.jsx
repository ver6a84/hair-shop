export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.variants[0].image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.variants[0].price}</p>
    </div>
  )
}