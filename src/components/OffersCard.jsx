import './OffersCard.css'
import { Link } from 'react-router-dom'

export default function OffersCard({ title, text, image, id }) {
  return (
    <Link to={`/products/${id || title.toLowerCase()}`} className="offers-card">
      <img src={image} alt={title} className="card-image" />
      <h2 className="card-title">{title}</h2>
      <p className="card-text">{text}</p>
    </Link>
  );
}
