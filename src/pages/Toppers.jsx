import { getProducts } from '@api/index';
import { PRODUCT_CATEGORIES,CATEGORIES_TRANSLATIONS } from '@utils/constants';
import ProductCard from '@components/ProductCard';
import { useState, useEffect } from 'react';
import '@/styles/pages/pages.css'

export default function Toppers() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null)

  useEffect(() => {
    setProducts(getProducts({ category: PRODUCT_CATEGORIES.TOPPERS }));
  }, [PRODUCT_CATEGORIES.TOPPERS]);

  
  return (
    <div className="category-page container">
      <h1>Топери</h1>
    
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