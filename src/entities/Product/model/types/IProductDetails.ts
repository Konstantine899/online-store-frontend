export interface IProductProperty {
  id: number;
  name: string;
  value: string;
  product_id: number;
}

export interface IProductDetails {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
  category_id: number;
  brand_id: number;
  properties: IProductProperty[];
  _inited: boolean;
}
