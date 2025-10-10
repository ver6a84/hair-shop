import { useState } from 'react'
import { useParams } from 'react-router-dom'
import CategoriesCard from '@components/CategoriesCard'
import '@styles/pages/pages.css'
import { CATEGORIES_TRANSLATIONS, PRODUCT_CATEGORIES } from '@utils/constants'
import Breadcrumb from '@/components/BreadCrumb'
import Reviews from '@/components/Reviews'

export default function Products() {
  return (
    <div className="products-page container">
      <h1>Наші товари</h1>
      <Breadcrumb/>
      <div className="cards-grid">
        {Object.values(PRODUCT_CATEGORIES).map((item) => (
          <CategoriesCard key={item} categoryId={item}/>
        ))}
      </div>
        <Reviews/>
    </div>
  )
}
