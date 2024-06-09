
  import { classNames } from '@/shared/lib/classNames/classNames';
  import { memo } from 'react';
  import cls from './Paginate.module.scss';
  
  interface PaginateProps {
  className?: string;
  }
  
  export const Paginate = memo((props: PaginateProps)=>{
  const { className } = props;
  
  return (
        <div className={classNames(cls.Paginate, {}, [className])}>
           
        </div>
    );
  });
  