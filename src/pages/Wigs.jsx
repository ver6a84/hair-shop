import { PRODUCT_CATEGORIES,HAIR_LENGTHS_TRANSLATIONS,HAIR_LENGTHS } from '@utils/constants';
import ProductCard from '@components/ProductCard';
import ProductGridSkeleton from '@components/ProductGridSkeleton';
import { useProducts } from '@hooks/useProducts';
import { useState } from 'react';
import '@/styles/pages/pages.css'
import Filters from '@/components/Filters';
import Pagination from '@/components/Pagination';
import Breadcrumb from '@/components/BreadCrumb';

export default function Wigs() {
  const [selectedLength, setselectedLength] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const { products, totalPages, loading, error } = useProducts({
  category: PRODUCT_CATEGORIES.WIGS,
  length: selectedLength,
  page: currentPage
  });


  return (    
    <div className="category-page container">
      <h1>Перуки</h1>

      <div className="category-filter">
       
        {Object.values(HAIR_LENGTHS).map(length => (
          <button 
            key={length}
            onClick={() => {
              setselectedLength(length);
              setCurrentPage(1);
            }}
            className={selectedLength === length ? 'selected' : ''}

          >
            {HAIR_LENGTHS_TRANSLATIONS[length]}
          </button>
        ))}
      </div>
        
        <Breadcrumb categoryId={PRODUCT_CATEGORIES.WIGS} />

        <Filters/>
      
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