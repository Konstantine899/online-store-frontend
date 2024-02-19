import { lazy, FC } from 'react';
import { TabBrandProps } from './TabBrand';

export const TabBrandAsync = lazy<FC<TabBrandProps>>(
  () => import('./TabBrand'),
);
