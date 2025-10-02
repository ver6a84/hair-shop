import './HeroBanner.css';

export default function HeroBanner() {
  return (
    <section className="hero">
      <img
        srcSet={'./hero_image.webp 600w, ./hero_image_mob.webp 320w'}
        sizes='(max-width: 600px) 160px, 600px'
        alt="Hero"
        width={1920}
        height={1080}
      />
      <div className="greetings">
        <h1 className="greetings-title">Перуки<br/>т<span>у</span>т</h1>
        <div>
          <h2 className="greetings-subtitle">Якісні перуки та аксесуари для волосся</h2>
          <p className="greetings-text">
            Відкрийте для себе наш широкий асортимент преміальних перук та сучасних синтетичних альтернатив
          </p>
        </div>
      </div>
    </section>
  );
}

