import { getProducts } from '@api/index';
import { PRODUCT_CATEGORIES } from '@utils/constants';
import ProductCard from '@components/ProductCard';
import { useState, useEffect } from 'react';

export default function Wigs() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(getProducts({ category: PRODUCT_CATEGORIES.WIGS }));
  }, [PRODUCT_CATEGORIES.WIGS]);

  
  return (
    <div className="wigs-page container">
      <h1>Перуки</h1>
      {!products.length && <p>Немає продуктів</p>}
      {products.length && products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}