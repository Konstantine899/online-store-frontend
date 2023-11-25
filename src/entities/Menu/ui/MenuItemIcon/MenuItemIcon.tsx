import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './MenuItemIcon.module.scss';
import { Icon } from '@/shared/ui/Icon';
import SmartphoneIcon from '@/shared/assets/icons/smartphone.svg';
import ImacIcon from '@/shared/assets/icons/imac.svg';
import FridgeIcon from '@/shared/assets/icons/fridge.svg';

interface MenuItemIconProps {
  className?: string;
  itemName: string;
}

export const MenuItemIcon = memo((props: MenuItemIconProps) => {
  const { className, itemName } = props;

  return (
    <div className={classNames(cls.MenuItemIcon, {}, [className])}>
      {itemName === 'Смартфоны' && (
        <Icon className={cls.SmartphoneIcon} Svg={SmartphoneIcon} />
      )}
      {itemName === 'Компьютеры' && (
        <Icon className={cls.ImacIcon} Svg={ImacIcon} />
      )}
      {itemName === 'Холодильники' && (
        <Icon className={cls.FridgeIcon} Svg={FridgeIcon} />
      )}
    </div>
  );
});
