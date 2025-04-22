import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Large Sausage Sandwich',
    nameFr: 'Sandwich saucisse grand format',
    description: 'A generous sandwich with grilled sausage, perfect for big appetites.',
    descriptionFr: 'Un sandwich généreux avec saucisse grillée, parfait pour les grosses faims.',
    price: 5.99,
    image: 'https://images.pexels.com/photos/1603901/pexels-photo-1603901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'sandwich'
  },
  {
    id: '2',
    name: 'Small Sausage Sandwich',
    nameFr: 'Sandwich saucisse petit format',
    description: 'A lighter sausage sandwich, ideal for small appetites or children.',
    descriptionFr: 'Un sandwich plus léger à la saucisse, idéal pour les petites faims ou les enfants.',
    price: 3.99,
    image: 'https://images.pexels.com/photos/3219483/pexels-photo-3219483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'sandwich'
  },
  {
    id: '3',
    name: 'Merguez & Fries',
    nameFr: 'Mergez Frite',
    description: 'Well-spiced merguez with crispy fries in fresh bread.',
    descriptionFr: 'Merguez bien épicée accompagnée de frites croustillantes dans un pain frais.',
    price: 6.99,
    image: 'https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'sandwich'
  },
  {
    id: '4',
    name: 'Cordon Bleu',
    nameFr: 'Cordon Bleue',
    description: 'Delicious crispy cordon bleu with melted cheese in soft bread.',
    descriptionFr: 'Délicieux cordon bleu croustillant avec fromage fondant dans un pain moelleux.',
    price: 7.49,
    image: 'https://images.pexels.com/photos/1647163/pexels-photo-1647163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'sandwich'
  },
  {
    id: '5',
    name: 'Chicken Sandwich',
    nameFr: 'Sandwich Poulet',
    description: 'Marinated chicken strips, salad, and homemade sauce in good bread.',
    descriptionFr: 'Émincé de poulet mariné, salade, sauce maison, le tout dans un bon pain.',
    price: 6.49,
    image: 'https://images.pexels.com/photos/5947101/pexels-photo-5947101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'sandwich'
  },
  {
    id: '6',
    name: 'Milkshake',
    nameFr: 'Desert Milk Shake',
    description: 'A sweet touch to finish: fresh milkshake to enjoy on the spot.',
    descriptionFr: 'Une touche sucrée pour finir : milkshake frais à déguster sur place.',
    price: 4.99,
    image: 'https://images.pexels.com/photos/103566/pexels-photo-103566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'dessert'
  }
];