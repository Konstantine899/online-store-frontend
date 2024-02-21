import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './CategoriesBurgerMenuItemIcon.module.scss';
import { Icon } from '@/shared/ui/Icon';
import SmartphoneIcon from '@/shared/assets/icons/smartphone.svg';
import ImacIcon from '@/shared/assets/icons/imac.svg';
import FridgeIcon from '@/shared/assets/icons/fridge.svg';

interface CategoryIconProps {
  className?: string;
  itemName?: string;
  isActive?: boolean;
}

export const CategoriesBurgerMenuItemIcon = memo((props: CategoryIconProps) => {
  const { className, itemName, isActive } = props;

  return (
    <div className={classNames(cls.BurgerMenuItemIcon, {}, [className])}>
      {itemName === 'Смартфоны' && (
        <Icon
          className={classNames(
            cls.SmartphoneIcon,
            { [cls.active]: isActive },
            [],
          )}
          Svg={SmartphoneIcon}
        />
      )}
      {itemName === 'Компьютеры' && (
        <Icon
          className={classNames(cls.ImacIcon, { [cls.active]: isActive }, [])}
          Svg={ImacIcon}
        />
      )}
      {itemName === 'Холодильники' && (
        <Icon
          className={classNames(cls.FridgeIcon, { [cls.active]: isActive }, [])}
          Svg={FridgeIcon}
        />
      )}
    </div>
  );
});
