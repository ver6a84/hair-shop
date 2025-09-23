import './OffersCard.css'

export default function OffersCard({ title, text, image }) {
  return (
    <div className="offers-card">
      <img src={image} alt={title} className="card-image" />
      <h2 className="card-title">{title}</h2>
      <p className="card-text">{text}</p>
    </div>
  );
}
