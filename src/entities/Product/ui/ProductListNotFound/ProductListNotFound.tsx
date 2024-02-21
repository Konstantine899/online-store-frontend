import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ProductListNotFound.module.scss';
import { NotFoundImage } from './NotFoundImage/NotFoundImage';
import { NotFoundMessage } from './NotFoundMessage/NotFoundMessage';
import { HedgehogImage } from './HedgehogImage/HedgehogImage';
import { NotFoundContent } from './NotFoundContent/NotFoundContent';

interface ProductListNotFoundProps {
  className?: string;
  message: string;
}

export const ProductListNotFound = memo((props: ProductListNotFoundProps) => {
  const { className, message } = props;

  return (
    <div className={classNames(cls.NotFoundPage, {}, [className])}>
      <div className={cls.contentWrapper}>
        <div className={cls.contentLeft}>
          <NotFoundImage />
          <NotFoundMessage message={message} />
        </div>
        <div className={cls.contentRight}>
          <HedgehogImage />
        </div>
      </div>
      <NotFoundContent />
    </div>
  );
});
