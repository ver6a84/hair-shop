const products = [
  // ==== WIGS ====
  {
    id: 1,
    name: "Гламурна класика",
    category: 1, // WIGS
    type: 1, // NATURAL
    length: 3, // LONG
    description: "Натуральна довга перука з глибоким об’ємом, підходить для урочистих подій.",
    variants: [
      { id: "1-1", color: 1, price: 4500, availability: true,  image: "https://princesss.store/images/yunona.webp" },
      { id: "1-2", color: 2, price: 4600, availability: true,  image: "https://princesss.store/images/yunona.webp" },
      { id: "1-3", color: 3, price: 4700, availability: false, image: "https://princesss.store/images/yunona.webp" }
    ]
  },
  {
    id: 2,
    name: "Елегантний блонд",
    category: 1,
    type: 2, // SYNTHETIC
    length: 2, // MEDIUM
    description: "Синтетична перука середньої довжини у світлих відтінках для щоденного носіння.",
    variants: [
      { id: "2-1", color: 3, price: 3800, availability: true,  image: "https://princesss.store/images/yunona.webp" },
      { id: "2-2", color: 4, price: 3900, availability: true,  image: "https://princesss.store/images/yunona.webp" }
    ]
  },
  {
    id: 3,
    name: "Рудий акцент",
    category: 1,
    type: 1,
    length: 2, // MEDIUM
    description: "Яскрава рудувата перука з натурального волосся для сміливого стилю.",
    variants: [
      { id: "3-1", color: 4, price: 4200, availability: true,  image: "https://princesss.store/images/yunona.webp" }
    ]
  },
  {
    id: 4,
    name: "Короткий чорний шик",
    category: 1,
    type: 2,
    length: 1, // SHORT
    description: "Сучасна коротка модель чорного кольору, легка у догляді.",
    variants: [
      { id: "4-1", color: 1, price: 3200, availability: true, image: "https://princesss.store/images/yunona.webp" }
    ]
  },

  // ==== TAILS ====
  {
    id: 5,
    name: "Класичний хвіст",
    category: 2, // TAILS
    type: 2,
    length: 3,
    description: "Довгий синтетичний хвіст для швидкої зміни стилю.",
    variants: [
      { id: "5-1", color: 1, price: 1500, availability: true,  image: "https://princesss.store/images/yunona.webp" },
      { id: "5-2", color: 2, price: 1600, availability: true,  image: "https://princesss.store/images/yunona.webp" },
      { id: "5-3", color: 3, price: 1700, availability: false, image: "https://princesss.store/images/yunona.webp" }
    ]
  },
  {
    id: 6,
    name: "Світлий високий хвіст",
    category: 2,
    type: 2,
    length: 2,
    description: "Світлий хвіст середньої довжини для святкових зачісок.",
    variants: [
      { id: "6-1", color: 3, price: 1700, availability: true, image: "https://princesss.store/images/yunona.webp" }
    ]
  },
  {
    id: 7,
    name: "Рудий об’єм",
    category: 2,
    type: 1,
    length: 3,
    description: "Об’ємний рудий хвіст з натурального волосся.",
    variants: [
      { id: "7-1", color: 4, price: 2100, availability: false, image: "https://princesss.store/images/yunona.webp" }
    ]
  },

  // ==== TOPPERS ====
  {
    id: 8,
    name: "Топер чорний об’ємний",
    category: 3, // TOPPERS
    type: 1,
    length: 2,
    description: "Натуральний топер чорного кольору для додаткового об’єму.",
    variants: [
      { id: "8-1", color: 1, price: 2700, availability: true, image: "https://princesss.store/images/yunona.webp" }
    ]
  },
  {
    id: 9,
    name: "Блонд-топер прямий",
    category: 3,
    type: 2,
    length: 1,
    description: "Синтетичний блонд-топер короткої довжини для щоденного використання.",
    variants: [
      { id: "9-1", color: 3, price: 2500, availability: true, image: "https://princesss.store/images/yunona.webp" },
      { id: "9-2", color: 4, price: 2600, availability: true, image: "https://princesss.store/images/yunona.webp" }
    ]
  },
  {
    id: 10,
    name: "Коричневий топер з чубчиком",
    category: 3,
    type: 1,
    length: 1,
    description: "Натуральний топер із чубчиком, доступний у темних відтінках.",
    variants: [
      { id: "10-1", color: 2, price: 3100, availability: true, image: "https://princesss.store/images/yunona.webp" },
      { id: "10-2", color: 1, price: 3150, availability: false, image: "https://princesss.store/images/yunona.webp" }
    ]
  }
];

export const getProducts = ({ category, type }) => {
  return products.filter(product => !category || category === product.category)
    .filter(product => !type || type === product.type);
};
