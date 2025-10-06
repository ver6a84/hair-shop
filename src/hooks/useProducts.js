import { useState, useEffect } from 'react';
import { getProducts } from '@api/index';

export function useProducts(filters = {}) {
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);

        const { items, totalPages } = await getProducts(filters);
        setProducts(items);
        setTotalPages(totalPages);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [filters.category, filters.type, filters.length, filters.color, filters.colorCategory, filters.page]);

  return { products, totalPages, loading, error };
}
