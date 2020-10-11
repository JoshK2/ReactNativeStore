import assert from 'assert';
import {sortPrice} from './sort-price';

const productsList = [
  {
    title: 'Nike Air Max 95 (Korea)',
    description: 'Shoe',
    price: 180,
    image: '',
    stock: 0,
  },
  {
    title: 'Air Jordan 1 Low',
    description: 'Shoe',
    price: 90,
    image: '',
    stock: 2,
  },
  {
    title: 'Nike SuperRep Go',
    description: `Men's Training Shoe`,
    price: 100,
    image: '',
    stock: 2,
  },
  {
    title: 'Nike Air Vapormax 360',
    description: `Men's Shoe`,
    price: 225,
    image: '',
    stock: 2,
  },
];

describe('high result first', function () {
  it('return the products list with higher price first', () => {
    const highFirst = sortPrice(productsList, 'high');
    assert(highFirst[0].price === 225);
  });
});
