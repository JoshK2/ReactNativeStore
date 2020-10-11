const productsList = [
  {
    title: 'Nike Air Vapormax 360',
    description: `Men's Shoe`,
    price: 225,
    image:
      'https://static.nike.com/a/images/f_auto/q_auto/t_PDP_864_v1/i1-9944e829-002c-4a6b-93ed-cc8801c7eb0c/air-vapormax-360-mens-shoe-b09bdB.jpg',
    stock: 2,
  },
  {
    title: 'Nike Air Max 95 (Korea)',
    description: 'Shoe',
    price: 180,
    image:
      'https://static.nike.com/a/images/f_auto/q_auto/t_PDP_864_v1/5efc19ea-b3b5-428b-9558-bf4ca3f6d05f/air-max-95-korea-shoe-ZKTfcL.jpg',
    stock: 0,
  },
  {
    title: 'Air Jordan 1 Low',
    description: 'Shoe',
    price: 90,
    image:
      'https://static.nike.com/a/images/f_auto/q_auto/t_PDP_864_v1/b9026d85-06bd-4629-a727-dd68f6c49807/air-jordan-1-low-shoe-z3Tl2VeJ.jpg',
    stock: 2,
  },
  {
    title: 'Nike SuperRep Go',
    description: `Men's Training Shoe`,
    price: 100,
    image:
      'https://static.nike.com/a/images/f_auto/q_auto/t_PDP_864_v1/i1-29a5195b-aa65-48a9-80f6-72166078abdc/superrep-go-mens-training-shoe-19sK4X.jpg',
    stock: 2,
  },
];

export const getProducts = async () => {
  return productsList;
};
