import { useState, useEffect } from 'react';
import { getProducts } from '@api/index';

export function useProducts(filters = {}, delay = 2000) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Simulate API delay for skeleton loading demonstration
        await new Promise(resolve => setTimeout(resolve, delay));
        
        const filteredProducts = getProducts(filters);
        setProducts(filteredProducts);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [filters.category, filters.type, filters.length, delay]);

  return { products, loading, error };
}
