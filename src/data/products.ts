import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Large Sausage Sandwich',
    nameFr: 'Sandwich saucisse grand format',
    description: 'A generous sandwich with grilled sausage, perfect for big appetites.',
    descriptionFr: 'Un sandwich généreux avec saucisse grillée, parfait pour les grosses faims.',
    price: 2.40,
    image: 'https://images.pexels.com/photos/1603901/pexels-photo-1603901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'sandwich'
  },
  {
    id: '2',
    name: 'Small Sausage Sandwich',
    nameFr: 'Sandwich saucisse petit format',
    description: 'A lighter sausage sandwich, ideal for small appetites or children.',
    descriptionFr: 'Un sandwich plus léger à la saucisse, idéal pour les petites faims ou les enfants.',
    price: 1.90,
    image: 'https://images.pexels.com/photos/3219483/pexels-photo-3219483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'sandwich'
  },
  {
    id: '3',
    name: 'Merguez & Fries',
    nameFr: 'Mergez Frite',
    description: 'Well-spiced merguez with crispy fries in fresh bread.',
    descriptionFr: 'Merguez bien épicée accompagnée de frites croustillantes dans un pain frais.',
    price: 3.45,
    image: 'https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'sandwich'
  },
  {
    id: '4',
    name: 'Cordon Bleu',
    nameFr: 'Cordon Bleue',
    description: 'Delicious crispy cordon bleu with melted cheese in soft bread.',
    descriptionFr: 'Délicieux cordon bleu croustillant avec fromage fondant dans un pain moelleux.',
    price: 3.99,
    image: 'https://images.pexels.com/photos/1647163/pexels-photo-1647163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'sandwich'
  },
  {
    id: '5',
    name: 'Chicken Sandwich',
    nameFr: 'Sandwich Poulet',
    description: 'Marinated chicken strips, salad, and homemade sauce in good bread.',
    descriptionFr: 'Lanières de poulet mariné, salade et sauce maison dans un bon pain.',
    price: 2.40,
    image: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg',
    category: 'sandwich'
  },
  {
    id: '6',
    name: 'Milkshake',
    nameFr: 'Desert Milk Shake',
    description: 'A sweet touch to finish: fresh milkshake to enjoy on the spot.',
    descriptionFr: 'Une touche sucrée pour finir : milkshake frais à déguster sur place.',
    price: 3.99,
    image: 'https://images.pexels.com/photos/103566/pexels-photo-103566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'dessert'
  },
  {
    id: '7',
    name: 'Coca Cola',
    nameFr: 'Coca Cola',
    description: 'Ice-cold Coca Cola to accompany your meal.',
    descriptionFr: 'Coca Cola bien frais pour accompagner votre repas.',
    price: 1.49,
    image: 'https://images.pexels.com/photos/2983100/pexels-photo-2983100.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'drink'
  },
  {
    id: '9',
    name: 'Fanta',
    nameFr: 'Fanta',
    description: 'Refreshing orange flavored soda.',
    descriptionFr: 'Soda rafraîchissant à l\'orange.',
    price: 1.49,
    image: 'https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'drink'
  },
  {
    id: '10',
    name: 'Sprite Berry',
    nameFr: 'Sprite Berry',
    description: 'Sparkling lemon-lime soda with berry flavor.',
    descriptionFr: 'Soda pétillant citron-vert avec saveur baies.',
    price: 1.49,
    image: 'https://images.pexels.com/photos/50593/coca-cola-cold-drink-soft-drink-coke-50593.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'drink'
  }
];