import './HeroBanner.css';

export default function HeroBanner() {
  return (
    <section className="hero">
      <img
        src={'./hero_image_mob.webp'}
        srcSet={'./hero_image.webp 1920w, ./hero_image_mob.webp 640w'}
        sizes='(max-width: 640px) 160px, 640px'
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

