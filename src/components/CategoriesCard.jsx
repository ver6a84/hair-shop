import './CategoriesCard.css'
import { Link } from 'react-router-dom'
import { CATEGORIES_TRANSLATIONS, CATEGORIES_URLS, CATEGORIES_DESCRIPTION } from '@utils/constants';

export default function CategoriesCard({ categoryId }) {
  console.log(categoryId);
  const title = CATEGORIES_TRANSLATIONS[categoryId];
  const text = CATEGORIES_DESCRIPTION[categoryId];
  const url = CATEGORIES_URLS[categoryId];


  return (
    <Link to={`/products/${url}`} className="offers-card">
      <img src={`/${url}.webp`} alt={title} className="card-image" />
      <h2 className="card-title">{title}</h2>
      <p className="card-text">{text}</p>
    </Link>
  );
}
