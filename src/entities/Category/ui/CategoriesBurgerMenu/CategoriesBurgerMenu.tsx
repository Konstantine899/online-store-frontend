import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useState } from 'react';
import cls from './CategoriesBurgerMenu.module.scss';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { fetchAllCategories } from '../../model/services/fetchAllCategories';
import { CategoriesList } from '../CategoriesList/CategoriesList';

interface BurgerMenuButtonProps {
  className?: string;
}

export const CategoriesBurgerMenu = memo((props: BurgerMenuButtonProps) => {
  const { className } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [isClose, setIsClose] = useState(false);
  const dispatch = useAppDispatch();
  const onToggle = () => {
    dispatch(fetchAllCategories());
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
