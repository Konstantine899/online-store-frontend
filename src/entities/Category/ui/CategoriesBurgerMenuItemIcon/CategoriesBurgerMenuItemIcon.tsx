import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './CategoriesBurgerMenuItemIcon.module.scss';
import { Icon } from '@/shared/ui/Icon';
import SmartphoneIcon from '@/shared/assets/icons/smartphone.svg';
import ImacIcon from '@/shared/assets/icons/imac.svg';
import FridgeIcon from '@/shared/assets/icons/fridge.svg';
import WashingMachineIcon from '@/shared/assets/icons/washing-machine.svg';
import TvIcon from '@/shared/assets/icons/tv.svg';
import HeadphonesIcon from '@/shared/assets/icons/headphones.svg';

interface CategoryIconProps {
  className?: string;
  itemName: string;
  isActive: boolean;
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
      {itemName === 'Ноутбуки' && (
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
      {itemName === 'Стиральные машины' && (
        <Icon
          className={classNames(
            cls.WashingMachineIcon,
            { [cls.active]: isActive },
            [],
          )}
          Svg={WashingMachineIcon}
        />
      )}
      {itemName === 'Телевизоры' && (
        <Icon
          className={classNames(cls.TvIcon, { [cls.active]: isActive }, [])}
          Svg={TvIcon}
        />
      )}
      {itemName === 'Наушники' && (
        <Icon
          className={classNames(
            cls.HeadphonesIcon,
            { [cls.active]: isActive },
            [],
          )}
          Svg={HeadphonesIcon}
        />
      )}
    </div>
  );
});

CategoriesBurgerMenuItemIcon.displayName = `CategoriesBurgerMenuItemIcon`;
