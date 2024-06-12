export interface IProductProperty {
  id: number;
  name: string;
  value: string;
  product_id: number;
}

export interface IProduct {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
  category_id: number;
  brand_id: number;
  properties: IProductProperty[];
}
