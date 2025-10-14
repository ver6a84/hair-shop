import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { PRODUCT_CATEGORIES, CATEGORIES_URLS, CATEGORIES_TRANSLATIONS, HAIR_LENGTHS_TRANSLATIONS } from '@utils/constants';
import ProductCard from '@components/ProductCard';
import ProductGridSkeleton from '@components/ProductGridSkeleton';
import Filters from '@components/Filters';
import Pagination from '@components/Pagination';
import Breadcrumb from '@components/BreadCrumb';
import Sort from '@components/Sort';
import { useProducts } from '@hooks/useProducts';
import '@/styles/pages/pages.css';
import { itemsPerPage } from '@/api';

export default function CategoryPage() {
  const { categorySlug } = useParams();

  const urlToCategoryMap = Object.entries(CATEGORIES_URLS).reduce((acc, [id, slug]) => {
    acc[slug] = Number(id);
    return acc;
  }, {});

  const selectedCategory = urlToCategoryMap[categorySlug] || PRODUCT_CATEGORIES.WIGS;

  const [selectedType, setSelectedType] = useState([]);
  const [selectedLength, setSelectedLength] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState(null);
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);

  const { products, totalPages, loading, error } = useProducts({
    category: selectedCategory,
    length: selectedLength,
    page: currentPage,
    type: selectedType,
    minPrice,
    maxPrice
  });

  const sortedProducts = sortOrder
    ? products.slice().sort((a, b) => {
        const priceA = Math.min(...a.variants.map(v => v.promo_price));
        const priceB = Math.min(...b.variants.map(v => v.promo_price));
        return sortOrder === 'asc' ? priceA - priceB : priceB - priceA;
      })
    : products;

  return (
    <div className="category-page container">
      <h1>{CATEGORIES_TRANSLATIONS[selectedCategory]}</h1>

      <div className={`custom-filters ${selectedCategory !== PRODUCT_CATEGORIES.WIGS ? 'hidden' : ''}`}>
        {['SHORT', 'MEDIUM', 'LONG'].map(length => {
          const isSelected = selectedLength.includes(length);
          return (
            <button
              key={length}
              onClick={() => {
                setSelectedLength(prev =>
                  isSelected ? prev.filter(l => l !== length) : [...prev, length]
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

      <Breadcrumb categoryId={selectedCategory} />

      <div className="content-wrapper">
        <div className="filters-wrapper">
          <Filters
            selectedType={selectedType}
            setSelectedType={setSelectedType}
            selectedLength={selectedLength}
            setSelectedLength={setSelectedLength}
            minPrice={minPrice}
            setMinPrice={setMinPrice}
            maxPrice={maxPrice}
            setMaxPrice={setMaxPrice}
            setCurrentPage={setCurrentPage}
          />
          <Sort
            sortOrder={sortOrder}
            setSortOrder={setSortOrder}
            setCurrentPage={setCurrentPage}
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
            {!loading && !error && products.length && sortedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    {sortedProducts.length > 0 && sortedProducts.length >= itemsPerPage && (
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
      )}
    </div>
  );
}
