import './ProductCardSkeleton.css'

export default function ProductCardSkeleton() {
  return (
    <div className="product-card-skeleton">
      <div className="skeleton-image"></div>
      <div className="skeleton-content">
        <div className="skeleton-title"></div>
        <div className="skeleton-description"></div>
        <div className="skeleton-description short"></div>
        <div className="skeleton-price"></div>
      </div>
    </div>
  )
}
