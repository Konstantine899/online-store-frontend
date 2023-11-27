import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './MenuList.module.scss';
import { MenuItem } from '@/entities/Menu/ui/MenuItem/MenuItem';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';
import { Overlay } from '@/shared/ui/Overlay';

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

interface MenuProps {
  className?: string;
  isOpen?: boolean;
  isClose?: boolean;
  onClose?: () => void;
}

export const MenuList = memo((props: MenuProps) => {
  const { className, isOpen, onClose, isClose } = props;

  return (
    <div
      className={classNames(
        cls.MenuList,
        { [cls.opened]: isOpen, [cls.closed]: isClose },
        [className],
      )}
    >
      <Overlay onClose={onClose} />
      <Button
        className={cls.close}
        size={ButtonSize.L}
        theme={ButtonTheme.CLEAR}
        square
        buttonFontSizeZero
        onClick={onClose}
      >
        Закрыть меню
      </Button>
      <div className={cls.menuContent}>
        <ul>
          {categories?.map((item) => <MenuItem key={item.id} item={item} />)}
        </ul>
      </div>
    </div>
  );
});
