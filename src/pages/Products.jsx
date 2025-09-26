import { useState } from 'react'
import { useParams } from 'react-router-dom'
import OffersCard from '@components/OffersCard'
import '@styles/pages/pages.css'
import { CATEGORIES_TRANSLATIONS, PRODUCT_CATEGORIES } from '@utils/constants'

export default function Products() {

  const [selectedCategory, setSelectedCategory] = useState(null)

  return (
    <div className="products-page container">
      <h1>Наші товари</h1>
      
    
      <div className="category-filter">
       
        {Object.values(PRODUCT_CATEGORIES).map(cat => (
          <button 
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
          >
            {CATEGORIES_TRANSLATIONS[cat]}
          </button>
        ))}
      </div>

    
      <div className="products-grid">
        {Object.values(PRODUCT_CATEGORIES).map((item) => (
          <OffersCard key={item} categoryId={item}/>
        ))}
      </div>
    </div>
  )
}
