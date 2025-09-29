import { useState, useEffect } from 'react';
import { getProducts } from '@api/index';

export function useProducts(filters = {}, delay = 2000) {
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);

        await new Promise(resolve => setTimeout(resolve, delay));

        const { items, totalPages } = getProducts(filters);
        setProducts(items);
        setTotalPages(totalPages);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [filters.category, filters.type, filters.length, filters.page, delay]);

  return { products, totalPages, loading, error };
}
