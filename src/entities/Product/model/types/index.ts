import { ProductsSchema } from '../types/ProductsSchema';
import { ProductDetailsSchema } from '../types/ProductDetailsSchema';
import { ProductsByCategoryCarouselSchema } from '../types/ProductsByCategoryCarouselSchema';

export interface EntityProductSchema {
  products: ProductsSchema;
  productsByCategoryCarousel: ProductsByCategoryCarouselSchema;
  productDetails: ProductDetailsSchema;
}
