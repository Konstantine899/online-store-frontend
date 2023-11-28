import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './CategoryList.module.scss';
import { Overlay } from '@/shared/ui/Overlay';
import { CategoryItem } from '../CategoryItem/CategoryItem';
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

export const CategoryList = memo((props: CategoryListProps) => {
  const { className, isOpen, onClose, isClose } = props;

  return (
    <div
      className={classNames(
        cls.CategoryList,
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
      <div className={cls.menuContent}>
        <ul>
          {categories?.map((item) => (
            <CategoryItem key={item.id} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
});
