import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './NotFoundPage.module.scss';
import { NotFoundImage } from '../NotFoundImage/NotFoundImage';
import { NotFoundMessage } from '../NotFoundMessage/NotFoundMessage';
import { NotFoundContent } from '../NotFoundContent/NotFoundContent';
import { HedgehogImage } from '../HedgehogImage/HedgehogImage';

interface NotFoundPageProps {
  className?: string;
  message: string;
}

export const ProductListNotFound = memo((props: NotFoundPageProps) => {
  const { className } = props;

  return (
    <div className={classNames(cls.contentWrapper, {}, [className])}>
      <div className={cls.contentLeft}>
        <NotFoundImage />
        <NotFoundMessage
          message={'К сожалению запрашиваемая вами страница не найдена'}
        />
      </div>
      <div className={cls.contentRight}>
        <HedgehogImage />
      </div>
      <NotFoundContent />
    </div>
  );
});

ProductListNotFound.displayName = `ProductListNotFound`;
