import { PRODUCT_CATEGORIES,HAIR_LENGTHS_TRANSLATIONS } from '@utils/constants';
import ProductCard from '@components/ProductCard';
import ProductGridSkeleton from '@components/ProductGridSkeleton';
import { useProducts } from '@hooks/useProducts';
import { useState } from 'react';
import '@/styles/pages/pages.css'
import Filters from '@/components/Filters';
import Pagination from '@/components/Pagination';
import Breadcrumb from '@/components/BreadCrumb';
import Sort from '@/components/Sort';

export default function Wigs() {
  const [selectedType, setSelectedType] = useState([]);
  const [selectedLength, setSelectedLength] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState(null);
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);



  const { products, totalPages, loading, error } = useProducts({
  category: PRODUCT_CATEGORIES.WIGS,
  length: selectedLength,
  page: currentPage,
  type: selectedType,
  minPrice,
  maxPrice
  });

  const sortedProducts = sortOrder
  ? products.slice().sort((a, b) => {
      const priceA = Math.min(...a.variants.map(v => v.price));
      const priceB = Math.min(...b.variants.map(v => v.price));
      return sortOrder === 'asc' ? priceA - priceB : priceB - priceA;
    })
  : products;


  return (    
    <div className="category-page container">
      <h1>Перуки</h1>

      <div className="custom-filters">
       
        {['SHORT', 'MEDIUM', 'LONG'].map(length => {
  const isSelected = selectedLength.includes(length);

  return (
    <button
      key={length}
      onClick={() => {
        setSelectedLength(prev =>
          isSelected
            ? prev.filter(l => l !== length)
            : [...prev, length]
        );
        setCurrentPage(1);
      }}
      className={isSelected ? 'selected' : ''}
    >
      {HAIR_LENGTHS_TRANSLATIONS[length]}
    </button>
  );
})}
</div>
        
        <Breadcrumb categoryId={PRODUCT_CATEGORIES.WIGS} />
     <div className="content-wrapper">
       <div className="filters-wrapper">
        <Filters 
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        selectedLength={selectedLength}
        setSelectedLength={setSelectedLength}
        minPrice = {minPrice}
        setMinPrice = {setMinPrice}
        maxPrice = {maxPrice}
        setMaxPrice = {setMaxPrice}
        setCurrentPage={setCurrentPage}
        />
      <Sort
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
        />
        </div>
        <div className="cards-grid-wrapper">
           <Sort
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
        setCurrentPage={setCurrentPage}
        />
      <div className="cards-grid">
        {loading && <ProductGridSkeleton count={4} />}
        {!loading && error && <p>Помилка завантаження: {error.message}</p>}
        {!loading && !error && !products.length && <p>Немає продуктів</p>}
        {!loading && !error && products.length && sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      </div>
      </div>
    
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  )
}