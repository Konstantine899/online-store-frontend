import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ProductTabBrand.module.scss';
import { Brand } from '@/entities/Brand';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { BrandReducer, AllBrandsReducer } from '@/entities/Brand';

const asyncBrandReducer: ReducersList = {
  brand: BrandReducer,
  allBrands: AllBrandsReducer,
};

export interface TabBrandProps {
  className?: string;
}

export const ProductTabBrand = memo((props: TabBrandProps) => {
  const { className } = props;

  return (
    <DynamicModuleLoader reducers={asyncBrandReducer}>
      <div className={classNames(cls.TabBrand, {}, [className])}>
        <Brand />
      </div>
    </DynamicModuleLoader>
  );
});