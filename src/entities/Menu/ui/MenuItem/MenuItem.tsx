import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './MenuItem.module.scss';
import { IMenuItem } from '@/entities/Menu/model/types/IMenuItem';
import { AppLink } from '@/shared/ui/AppLink';
import { MenuItemIcon } from '@/entities/Menu/ui/MenuItemIcon/MenuItemIcon';

interface MenuItemProps {
  className?: string;
  item: IMenuItem;
}

export const MenuItem = memo((props: MenuItemProps) => {
  const { className, item } = props;

  return (
    <AppLink to={`/category/one/${item.id}`}>
      <li className={classNames(cls.MenuItem, {}, [className])}>
        <MenuItemIcon itemName={item.name} />
        {item.name}
      </li>
    </AppLink>
  );
});
