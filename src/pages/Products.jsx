import { useState } from 'react'
import { useParams } from 'react-router-dom'
import OffersCard from '@components/OffersCard'
import '@styles/pages/pages.css'

const categories = [
  {
    id: 'wigs',
    title: 'Перуки',
    text: 'Оберіть свою чарівну перуку з нашої колекції, яка налічує більше 100 моделей',
    image: '/Wigs.webp',
  },
  {
    id: 'tails',
    title: 'Хвостики',
    text: 'Понад 10 моделей непревершених хвостиків',
    image: '/tails.webp',
  },
  {
    id: 'toppers',
    title: 'Топери',
    text: 'Секретний інгредієнт для вашого образу',
    image: '/toppers.webp',
  },
  {
    id: 'sale',
    title: 'Sale',
    text: 'Обмежена кількість товару',
    image: '/sale.webp',
  },
];

export default function Products() {
  const { category } = useParams()
  const [selectedCategory, setSelectedCategory] = useState(category || 'all')

  const filteredCategories = selectedCategory === 'all' 
    ? categories 
    : categories.filter(cat => cat.id === selectedCategory)

  return (
    <div className="products-page container">
      <h1>Наші товари</h1>
      
      {/* Category Filter */}
      <div className="category-filter">
        <button 
          className={selectedCategory === 'all' ? 'active' : ''}
          onClick={() => setSelectedCategory('all')}
        >
          Всі товари
        </button>
        {categories.map(cat => (
          <button 
            key={cat.id}
            className={selectedCategory === cat.id ? 'active' : ''}
            onClick={() => setSelectedCategory(cat.id)}
          >
            {cat.title}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="products-grid">
        {filteredCategories.map((item) => (
          <OffersCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  )
}
