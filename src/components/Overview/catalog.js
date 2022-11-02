import bomberURL from '../../assets/products/bomber2k.png';
import coatURL from '../../assets/products/coat.png';
import dopeShirtURL from '../../assets/products/dopeshirt.png';
import jeansURL from '../../assets/products/jeans.png';
import shirtURL from '../../assets/products/shirt.png';
import kyotopantsURL from '../../assets/products/jpants.png';
import stockpinkURL from '../../assets/products/stockpink.png';

import uniqid from 'uniqid';

export const catalog = {
  products: [
    {
      name: 'Breezy Bomber',
      description:
        "This bomber is so soft and strong you'll think it was made in a lab.",
      url: `${bomberURL}`,
      id: uniqid(),
      price: 149.99,
    },
    {
      name: "Trencher's Coat",
      description: 'Big coat for big personalities. Own the style.',
      url: `${coatURL}`,
      id: uniqid(),
      price: 209.99,
    },
    {
      name: 'Dope Shirt',
      description: 'I just thought it was cool.',
      url: `${dopeShirtURL}`,
      id: uniqid(),
      price: 49.99,
    },
    {
      name: 'Jeans',
      description:
        'A classic no matter the decade. Quality denim with minimal inseams for maximal comfort.',
      url: `${jeansURL}`,
      id: uniqid(),
      price: 79.99,
    },
    {
      name: 'House Special',
      description:
        "Just leave the fashion to us and we'll make sure you're taken care of.",
      url: `${shirtURL}`,
      id: uniqid(),
      price: 599.99,
    },
    {
      name: 'Pink Hoodie',
      description:
        'Comfortable, fluffy and of course a bright stand out color. This hoodie has exactly what it needs.',
      url: `${stockpinkURL}`,
      id: uniqid(),
      price: 39.99,
    },
    {
      name: 'Kyoto Sweats',
      description:
        'Breathable, stylable, comfortable, functional, fashionable,   ...-able.',
      url: `${kyotopantsURL}`,
      id: uniqid(),
      price: 129.99,
    },
  ],
};
