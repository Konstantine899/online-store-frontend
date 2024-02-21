import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './NotFoundMessage.module.scss';

interface NotFoundMessageProps {
  className?: string;
  message: string;
}

export const NotFoundMessage = memo((props: NotFoundMessageProps) => {
  const { className, message } = props;

  return <p className={classNames(cls.message, {}, [className])}>{message}</p>;
});
