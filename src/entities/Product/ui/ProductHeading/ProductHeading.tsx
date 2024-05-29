import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ProductHeading.module.scss';
import { useSelector } from 'react-redux';
import { selectProductName } from '../../model/selectors/selectProductDetails';

interface ProductHeadingProps {
  className?: string;
}

export const ProductHeading = memo((props: ProductHeadingProps) => {
  const { className } = props;
  const name = useSelector(selectProductName);

  return (
    <div className={classNames(cls.ProductHeading, {}, [className])}>
      <h1>{name}</h1>
    </div>
  );
});
