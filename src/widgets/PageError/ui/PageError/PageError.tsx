import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}

export const PageError = memo((props: PageErrorProps) => {
  const { className } = props;

  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      <div className={cls.ErrorCard}>
        <h1>Что-то пошло не так!</h1>
        <h1>Произошла не предвиденная ошибка!</h1>
      </div>
    </div>
  );
});
