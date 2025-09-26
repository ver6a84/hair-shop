import './OffersCard.css'
import { Link } from 'react-router-dom'
import { CATEGORIES_TRANSLATIONS, CATEGORIES_URLS } from '@utils/constants';

export default function OffersCard({ categoryId }) {
  console.log(categoryId);
  const title = CATEGORIES_TRANSLATIONS[categoryId];
  const text = `Оберіть свою чарівну ${title.toLowerCase()} з нашої колекції, яка налічує більше 100 моделей`;
  const url = CATEGORIES_URLS[categoryId];


  return (
    <Link to={`/products/${url}`} className="offers-card">
      <img src={`/${url}.webp`} alt={title} className="card-image" />
      <h2 className="card-title">{title}</h2>
      <p className="card-text">{text}</p>
    </Link>
  );
}
