


import { memo } from 'react';
import cls from './ProductsByCategoryCount.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';



interface ProductsByCategoryCountProps {
className?:string;
}

export const ProductsByCategoryCount = memo((props: ProductsByCategoryCountProps) => {
const { className } = props
  return <div className={classNames(cls.ProductsByCategoryCount, {}, [className])}>$END$</div>;
});

ProductsByCategoryCount.displayName = `ProductsByCategoryCount`;