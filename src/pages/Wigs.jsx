import { getProducts } from '@api/index';
import { PRODUCT_CATEGORIES,HAIR_LENGTHS_TRANSLATIONS,HAIR_LENGTHS } from '@utils/constants';
import ProductCard from '@components/ProductCard';
import { useState, useEffect } from 'react';
import '@/styles/pages/pages.css'

export default function Wigs() {
  const [products, setProducts] = useState([]);
  const[selectedLength, setselectedLength] = useState(null);
 
  useEffect(() => {
    const filtered = getProducts({
      category: PRODUCT_CATEGORIES.WIGS,
      length: selectedLength
    });
    setProducts(filtered);
  }, [selectedLength]);

  
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
      {!products.length && <p>Немає продуктів</p>}
      {products.length && products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      </div>
    </div>
  )
}