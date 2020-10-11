/**
 * @description
 * sort product by price
 * @param {Array} products
 * @param {string} by sort by high or low
 * @returns {Array} sorted array
 */

export const sortPrice = (products, by) => {
  return products.sort((a, b) => {
    return by === 'high' ? b.price - a.price : a.price - b.price;
  });
};
