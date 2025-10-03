import './CategoriesCard.css'
import { Link } from 'react-router-dom'
import { CATEGORIES_TRANSLATIONS, CATEGORIES_URLS } from '@utils/constants';

export default function CategoriesCard({ categoryId }) {
  const title = CATEGORIES_TRANSLATIONS[categoryId];
  const url = CATEGORIES_URLS[categoryId];
  const srcSet = `
  ${url}.webp 190w,
  ${url}_desktop.webp 576w
`;



  return (
    <Link to={`/products/${url}`} className="offers-card">
      <img 
      src={`/${url}.webp`} 
      loading='lazy' 
      alt={title} 
      className="card-image" 
      srcSet={srcSet}
      sizes='(max-width: 190px) 48px, 190px'
      width={576}
      height={768}
      />
      <h2 className="card-title">{title}</h2>
    </Link>
  );
}
