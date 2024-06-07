import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ProductTabBrand.module.scss';
import { BrandTabs, brandReducers } from '@/entities/Brand';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { selectCategoryId } from '@/entities/Category';

const asyncBrandReducer: ReducersList = {
  brand: brandReducers,
};

export interface TabBrandProps {
  className?: string;
}

/* @deprecated */
export const ProductTabBrand = memo((props: TabBrandProps) => {
  const { className } = props;
  const categoryId = useSelector(selectCategoryId);

  if (categoryId !== 0) {
    return (
      <DynamicModuleLoader reducers={asyncBrandReducer}>
        <div className={classNames(cls.TabBrand, {}, [className])}>
          <BrandTabs />
        </div>
      </DynamicModuleLoader>
    );
  }
});
