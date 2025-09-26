import { useState, useEffect } from 'react';
import './HeroBanner.css';

export default function HeroBanner() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const imageSrc = isMobile ? './hero_image_mobile.png' : './hero_image.webp';

  return (
    <section className="hero">
      <img src={imageSrc} alt="Hero" />
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

