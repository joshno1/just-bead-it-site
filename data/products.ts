type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
};

const PRODUCTS: Product[] = [
  {
    id: 'evergreen',
    name: 'Evergreen Sparkle Charm Bracelet',
    price: 24.0,
    description: 'Festive green beaded bracelet with snowflake, ornament and gem charms. Lightweight and handmade.',
    image: '/images/IMG_6763_1200.jpg',
  },
  {
    id: 'rednoel',
    name: 'Red Noel Charms Bracelet',
    price: 22.0,
    description: 'Classic red holiday bracelet with gold-tone charms.',
    image: '/images/IMG_6762_1200.jpg',
  },
  {
    id: 'holidaymix',
    name: 'Holiday Charm Bracelet',
    price: 26.0,
    description: 'Mixed festive beads with gold holiday charms and gem accents.',
    image: '/images/IMG_6761_1200.jpg',
  },
];

export default PRODUCTS;
