import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './MenuItem.module.scss';
import { IMenuItem } from '@/entities/Menu/model/types/IMenuItem';
import { AppLink } from '@/shared/ui/AppLink';
import SmartphoneIcon from '@/shared/assets/icons/smartphone.svg';
import ImacIcon from '@/shared/assets/icons/imac.svg';
import FridgeIcon from '@/shared/assets/icons/fridge.svg';
import { Icon } from '@/shared/ui/Icon';

interface MenuItemProps {
  className?: string;
  item: IMenuItem;
}

export const MenuItem = memo((props: MenuItemProps) => {
  const { className, item } = props;

  return (
    <AppLink to={`/category/one/${item.id}`}>
      <li className={classNames(cls.MenuItem, {}, [className])}>
        {item.name === 'Смартфоны' ? (
          <Icon className={cls.SmartphoneIcon} Svg={SmartphoneIcon} />
        ) : null}
        {item.name === 'Компьютеры' ? (
          <Icon className={cls.ImacIcon} Svg={ImacIcon} />
        ) : null}
        {item.name === 'Холодильники' ? (
          <Icon className={cls.FridgeIcon} Svg={FridgeIcon} />
        ) : null}
        {item.name}
      </li>
    </AppLink>
  );
});
