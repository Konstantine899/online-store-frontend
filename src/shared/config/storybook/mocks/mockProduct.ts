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
  properties: [
    { id: 1, name: 'Бренд', value: `SAMSUNG`, product_id: 1 },
    { id: 2, name: 'Тип телефона', value: `Смартфон`, product_id: 1 },
    { id: 3, name: 'Год выхода модели', value: `2024 год`, product_id: 1 },
    {
      id: 4,
      name: 'Стандарты связи',
      value: `2G, 3G, 4G (LTE), 5G`,
      product_id: 1,
    },
    { id: 5, name: 'Операционная система', value: `Android`, product_id: 1 },
    {
      id: 6,
      name: 'Версия операционной системы',
      value: `Android 14 (One UI 6.1)`,
      product_id: 1,
    },
    { id: 7, name: 'Линейка', value: `Samsung Galaxy A55 5G`, product_id: 1 },
    {
      id: 8,
      name: 'Количество физических SIM-карт',
      value: `2`,
      product_id: 1,
    },
    {
      id: 9,
      name: 'Формат физической SIM-карты',
      value: `Nano`,
      product_id: 1,
    },
    { id: 10, name: 'Поддержка eSIM', value: `Нет`, product_id: 1 },
  ],
};
