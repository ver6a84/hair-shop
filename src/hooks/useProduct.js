import { useState, useEffect } from 'react';
import { getProduct } from '@api/index';

export function useProduct(passedProduct, id = null) {
  const [product, setProduct] = useState(passedProduct);
  const [loading, setLoading] = useState(product ? false : true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (product) return;

    if (!product && !id) {
      setProduct(null);
      setLoading(false);
      setError(null);
      return;
    }

    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const productData = await getProduct(id);
        if (productData) {
          setProduct(productData);
        } else {
          setError(new Error('Product not found'));
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  return { product, loading, error };
}
