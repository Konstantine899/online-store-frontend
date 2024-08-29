interface IProductProperty {
  id: number;
  name: string;
  value: string;
  product_id: number;
}

interface IProduct {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
  category_id: number;
  brand_id: number;
  properties: IProductProperty[];
}

export const mockProduct: IProduct = {
  id: 1,
  image: 'f7a10dbd-c699-4bc5-a2eb-90c38d9b053a.jpg',
  category_id: 1,
  brand_id: 1,
  rating: 5,
  price: 1749,
  name: 'Смартфон Samsung Galaxy A55 5G 8GB/256GB (темно-синий)',
  properties: [],
};
