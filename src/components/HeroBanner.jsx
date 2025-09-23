import bannerImg from '../assets/img/hero_image.webp';
import './HeroBanner.css'
export default function HeroBanner() {
  return (
    <section className="hero">
      <img src={bannerImg} />
      <div className="greetings">
        <h1 className='greetings-title'>Перуки<br/>т<span>у</span>т</h1>
        <div>
        <h2 className="greetings-subtitle">Якісні перуки та аксесуари для волосся</h2>
        <p className='greetings-text'>Відкрийте для себе наш широкий асортимент преміальних перук та сучасних синтетичних альтернатив</p>
        </div>      
      </div>
    </section>
  );
}

