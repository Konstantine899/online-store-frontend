
  import { classNames } from '@/shared/lib/classNames/classNames';
  import { memo } from 'react';
  import cls from './SortOrder.module.scss';
  
  interface SortOrderProps {
  className?: string;
  }
  
  export const SortOrder = memo((props: SortOrderProps)=>{
  const { className } = props;
  
  return (
        <div className={classNames(cls.SortOrder, {}, [className])}>
           
        </div>
    );
  });
  