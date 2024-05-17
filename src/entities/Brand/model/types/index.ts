import { BrandSchema } from './BrandSchema';
import { AllBrandsSchema } from './AllBrandsSchema';
import { AllBrandsByCategorySchema } from './AllBrandsByCategorySchema';

export interface EntityBrandSchema {
  allBrands: AllBrandsSchema;
  allBrandsByCategory: AllBrandsByCategorySchema;
  brand: BrandSchema;
}
