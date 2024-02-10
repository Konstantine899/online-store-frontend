import { lazy, FC } from 'react';
import { TabBrandProps } from '@/features/Filters/ui/TabBrand/TabBrand';

export const TabBrandAsync = lazy<FC<TabBrandProps>>(
  () => import('./TabBrand'),
);