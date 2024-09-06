


import { memo } from 'react';
import cls from './ProductsSortOrder.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';



interface ProductsSortOrderProps {
className?:string;
}

export const ProductsSortOrder = memo((props: ProductsSortOrderProps) => {
const { className } = props
  return <div className={classNames(cls.ProductsSortOrder, {}, [className])}>$END$</div>;
});

ProductsSortOrder.displayName = `ProductsSortOrder`;