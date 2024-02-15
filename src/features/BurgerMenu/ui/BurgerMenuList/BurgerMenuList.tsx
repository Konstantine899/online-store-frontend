import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './BurgerMenuList.module.scss';
import { Overlay } from '@/shared/ui/Overlay';
import { BurgerMenuItem } from '../BurgerMenuItem/BurgerMenuItem';
import { ButtonClose } from '@/features/ButtonClose';

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

interface CategoryListProps {
  className?: string;
  isOpen?: boolean;
  isClose?: boolean;
  onClose?: () => void;
}

export const BurgerMenuList = memo((props: CategoryListProps) => {
  const { className, isOpen, onClose, isClose } = props;

  return (
    <div
      className={classNames(
        cls.BurgerMenuList,
        {
          [cls.opened]: isOpen,
          [cls.closed]: isClose,
        },
        [className],
      )}
    >
      <Overlay onClose={onClose} />
      <ButtonClose className={cls.BurgerMenuButtonClose} onClose={onClose}>
        Закрыть меню
      </ButtonClose>
      <div className={cls.burgerMenuContent}>
        <ul>
          {categories?.map((item) => (
            <BurgerMenuItem key={item.id} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
});
