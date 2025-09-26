import { getProducts } from '@api/index';
import { PRODUCT_CATEGORIES,CATEGORIES_TRANSLATIONS } from '@utils/constants';
import ProductCard from '@components/ProductCard';
import { useState, useEffect } from 'react';
import '@/styles/pages/pages.css'

export default function Tails() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null)

  useEffect(() => {
    setProducts(getProducts({ category: PRODUCT_CATEGORIES.TAILS }));
  }, [PRODUCT_CATEGORIES.TAILS]);

  
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
      {!products.length && <p>Немає продуктів</p>}
      {products.length && products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      </div>
    </div>
  )
}