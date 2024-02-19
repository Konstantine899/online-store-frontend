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

export const NotFoundPage = memo((props: NotFoundPageProps) => {
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
