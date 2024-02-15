import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useState } from 'react';
import cls from './BurgerMenu.module.scss';
import { CategoriesList } from '@/entities/Category';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { fetchCategoriesList } from '@/entities/Category/model/services/fetchCategoriesList';

interface BurgerMenuButtonProps {
  className?: string;
}

export const BurgerMenu = memo((props: BurgerMenuButtonProps) => {
  const { className } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [isClose, setIsClose] = useState(false);
  const dispatch = useAppDispatch();
  const onToggle = () => {
    dispatch(fetchCategoriesList(1));
    setIsOpen(true);
    setIsClose(false);
  };

  const onClose = () => {
    setIsClose(true);
    setIsOpen(false);
  };

  return (
    <>
      <div
        onClick={onToggle}
        className={classNames(cls.BurgerMenuButton, {}, [className])}
      >
        <span />
      </div>
      <CategoriesList isOpen={isOpen} onClose={onClose} isClose={isClose} />
    </>
  );
});
