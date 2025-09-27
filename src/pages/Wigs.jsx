import { PRODUCT_CATEGORIES,HAIR_LENGTHS_TRANSLATIONS,HAIR_LENGTHS } from '@utils/constants';
import ProductCard from '@components/ProductCard';
import ProductGridSkeleton from '@components/ProductGridSkeleton';
import { useProducts } from '@hooks/useProducts';
import { useState } from 'react';
import '@/styles/pages/pages.css'

export default function Wigs() {
  const [selectedLength, setselectedLength] = useState(null);
  const { products, loading, error } = useProducts({
    category: PRODUCT_CATEGORIES.WIGS,
    length: selectedLength
  });

  return (    
    <div className="category-page container">
      <h1>Перуки</h1>

      <div className="category-filter">
       
        {Object.values(HAIR_LENGTHS).map(length => (
          <button 
            key={length}
            onClick={() => setselectedLength(length)}
          >
            {HAIR_LENGTHS_TRANSLATIONS[length]}
          </button>
        ))}
      </div>

      <div className="cards-grid">
        {loading && <ProductGridSkeleton count={4} />}
        {!loading && error && <p>Помилка завантаження: {error.message}</p>}
        {!loading && !error && !products.length && <p>Немає продуктів</p>}
        {!loading && !error && products.length && products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}