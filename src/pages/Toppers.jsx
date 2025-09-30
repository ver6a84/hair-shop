import { PRODUCT_CATEGORIES,COLOR_CATEGORIES_TRANSLATIONS,COLOR_CATEGORIES } from '@utils/constants';
import ProductCard from '@components/ProductCard';
import ProductGridSkeleton from '@components/ProductGridSkeleton';
import { useProducts } from '@hooks/useProducts';
import { useState } from 'react';
import '@/styles/pages/pages.css'
import Pagination from '@/components/Pagination';
import Breadcrumb from '@/components/BreadCrumb';


export default function Toppers () {
  const [selectedColorCategory, setSelectedColorCategory] = useState(null);
  const [currentPage, setCurrentPage] = useState(1)
  const { products, totalPages, loading, error } = useProducts({
    category: PRODUCT_CATEGORIES.TOPPERS,
    colorCategory: selectedColorCategory,
    page: currentPage
  });

  
  return (
    <div className="category-page container">
      <h1>Топери</h1>

      <div className="category-filter">
           
 {Object.values(COLOR_CATEGORIES).map((colorCategory) => (
  <button
    key={colorCategory}
    onClick={() => {
      setSelectedColorCategory(colorCategory)
      setCurrentPage(1);
    }
    }
    className={selectedColorCategory === colorCategory ? 'active' : ''}
  >
    {COLOR_CATEGORIES_TRANSLATIONS[colorCategory]}
  </button>
))}
      
      </div>

      <Breadcrumb categoryId={PRODUCT_CATEGORIES.TOPPERS} />


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