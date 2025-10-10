import { PRODUCT_CATEGORIES } from '@utils/constants';
import ProductCard from '@components/ProductCard';
import ProductGridSkeleton from '@components/ProductGridSkeleton';
import { useProducts } from '@hooks/useProducts';
import { useState } from 'react';
import '@/styles/pages/pages.css'
import Pagination from '@/components/Pagination';
import Breadcrumb from '@/components/BreadCrumb';


export default function Tails() {
  const [currentPage, setCurrentPage] = useState(1)
  const { products, totalPages, loading, error } = useProducts({
    category: PRODUCT_CATEGORIES.TAILS,
    page: currentPage
  });

  
  return (
    <div className="category-page container">
      <h1>Хвостики</h1>

      <Breadcrumb categoryId={PRODUCT_CATEGORIES.TAILS} />


      <div className="cards-grid">
        {loading && <ProductGridSkeleton count={4} />}
        {!loading && error && <p>Помилка завантаження: {error.message}</p>}
        {!loading && !error && !products.length && <p>Немає продуктів</p>}
        {!loading && !error && products.length && products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  )
}