import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './BurgerMenuItem.module.scss';
import { AppLink } from '@/shared/ui/AppLink';
import { IBurgerMenuItem } from '../../model/types/IBurgerMenuItem';
import { BurgerMenuItemIcon } from '../BurgerMenuItemIcon/BurgerMenuItemIcon';

interface CategoryProps {
  className?: string;
  item?: IBurgerMenuItem;
}

export const BurgerMenuItem = memo((props: CategoryProps) => {
  const { className, item } = props;
  return (
    <AppLink to={`/category/one/${item.id}`}>
      <li className={classNames(cls.BurgerMenuItem, {}, [className])}>
        <BurgerMenuItemIcon itemName={item.name} />
        {item.name}
      </li>
    </AppLink>
  );
});
