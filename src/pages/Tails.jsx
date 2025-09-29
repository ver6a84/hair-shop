import { PRODUCT_CATEGORIES,CATEGORIES_TRANSLATIONS } from '@utils/constants';
import ProductCard from '@components/ProductCard';
import ProductGridSkeleton from '@components/ProductGridSkeleton';
import { useProducts } from '@hooks/useProducts';
import { useState } from 'react';
import '@/styles/pages/pages.css'
import Pagination from '@/components/Pagination';


export default function Tails() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { products, loading, error } = useProducts({
    category: PRODUCT_CATEGORIES.TAILS
  });

  
  return (
    <div className="category-page container">
      <h1>Хвостики</h1>

      <div className="category-filter">
           
            {Object.values(PRODUCT_CATEGORIES).map(cat => (
              <button 
                key={cat}
                onClick={() => setSelectedCategory(cat)}
              >
                {CATEGORIES_TRANSLATIONS[cat]}
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
      <Pagination/>
    </div>
  )
}