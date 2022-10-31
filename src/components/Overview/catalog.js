import bomberURL from '../../assets/products/bomber2k.png';
import coatURL from '../../assets/products/coat.png';
import dopeShirtURL from '../../assets/products/dopeshirt.png';
import jeansURL from '../../assets/products/jeans.png';
import shirtURL from '../../assets/products/shirt.png';
import uniqid from 'uniqid';

export const catalog = {
  products: [
    {
      name: '1',
      description:
        'This is a super cool product and you should totally spend all your hard earned dallarydoos on this bad boy',
      url: `${bomberURL}`,
      id: uniqid(),
    },
    {
      name: '2',
      description:
        'This is a super cool product and you should totally spend all your hard earned dallarydoos on this bad boy',
      url: `${coatURL}`,
      id: uniqid(),
    },
    {
      name: '3',
      description:
        'This is a super cool product and you should totally spend all your hard earned dallarydoos on this bad boy',
      url: `${dopeShirtURL}`,
      id: uniqid(),
    },
    {
      name: '4',
      description:
        'This is a super cool product and you should totally spend all your hard earned dallarydoos on this bad boy',
      url: `${jeansURL}`,
      id: uniqid(),
    },
    {
      name: '5',
      description:
        'This is a super cool product and you should totally spend all your hard earned dallarydoos on this bad boy',
      url: `${shirtURL}`,
      id: uniqid(),
    },
  ],
};
