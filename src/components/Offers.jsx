import './Offers.css'
import Icon from './icon'
import OffersCard from './OffersCard';

const categories = [
  {
    title: 'Перуки',
    text: 'Оберіть свою чарівну перуку з нашої колекції, яка налічує більше 100 моделей',
    image: '/Wigs.webp',
  },
   {
    title: 'Хвостики',
    text: 'Понад 10 моделей непревершених хвостиків',
    image: '/tails.webp',
  },
  {
    title: 'Топери',
    text: 'Секретний інгредієнт для вашого образу',
    image: '/toppers.webp',
  },
  {
    title: 'Sale',
    text: 'Обмежена кількість товару',
    image: '/sale.webp',
  },
];

export default function Offers() {
    return (
    <section className="offers container">
        {categories.map((item) => (
        <OffersCard key={item.title} {...item} />
        ))}
    </section>
    );
}