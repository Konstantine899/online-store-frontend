
  import { classNames } from '@/shared/lib/classNames/classNames';
  import { memo } from 'react';
  import cls from './Scroll.module.scss';
  
  interface ScrollProps {
  className?: string;
  }
  
  export const Scroll = memo((props: ScrollProps)=>{
  const { className } = props;
  
  return (
        <div className={classNames(cls.Scroll, {}, [className])}>
           
        </div>
    );
  });
  