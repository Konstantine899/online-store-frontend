import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './MenuList.module.scss';
import { MenuItem } from '@/entities/Menu/ui/MenuItem/MenuItem';

interface MenuProps {
  className?: string;
}

export const MenuList = memo((props: MenuProps) => {
  const { className } = props;

  const categories = [
    {
      id: 1,
      name: 'Смартфоны',
    },
    {
      id: 2,
      name: 'Компьютеры',
    },
    {
      id: 3,
      name: 'Холодильники',
    },
  ];

  return (
    <div className={classNames(cls.MenuList, {}, [className])}>
      <div className={cls.blur} />
      <div className={cls.menuContent}>
        <ul>
          {categories?.map((item) => <MenuItem key={item.id} item={item} />)}
        </ul>
      </div>
    </div>
  );
});
