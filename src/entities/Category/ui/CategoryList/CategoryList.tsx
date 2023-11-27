import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './CategoryList.module.scss';
import { Overlay } from '@/shared/ui/Overlay';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';
import { CategoryItem } from '../CategoryItem/CategoryItem';

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
          {categories?.map((item) => (
            <CategoryItem key={item.id} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
});
