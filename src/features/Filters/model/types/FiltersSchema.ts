import { ISortOrder } from '@/shared/types/ISortOrder';

export interface FiltersSchema {
  search?: string;
  sortingOrder?: ISortOrder;
}
