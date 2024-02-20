import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './BurgerMenuItem.module.scss';
import { AppLink } from '@/shared/ui/AppLink';
import { IBurgerMenuItem } from '../../model/types/IBurgerMenuItem';
import { BurgerMenuItemIcon } from '../BurgerMenuItemIcon/BurgerMenuItemIcon';
import { getRouteCategory } from '@/shared/consts/router/publicRouter';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { CategoryActions, getCategoryIdSelector } from '@/entities/Category';
import {
  FetchProductsByCategory,
  ProductsPageActions,
} from '@/entities/Product';
import { useSelector } from 'react-redux';

interface CategoryProps {
  className?: string;
  item?: IBurgerMenuItem;
  onClose?: () => void;
}

export const BurgerMenuItem = memo((props: CategoryProps) => {
  const { className, item, onClose } = props;
  const dispatch = useAppDispatch();
  const categoryId = useSelector(getCategoryIdSelector);

  const onHandleClick = (categoryId: number) => () => {
    dispatch(ProductsPageActions.setPage(1));
    dispatch(CategoryActions.setCategoryId(categoryId));
    dispatch(FetchProductsByCategory({ categoryId }));
    onClose();
  };

  const isActive = categoryId === item.id;

  return (
    <AppLink
      to={getRouteCategory(`${item.id}`)}
      onClick={onHandleClick(item.id)}
    >
      <li
        className={classNames(cls.BurgerMenuItem, { [cls.active]: isActive }, [
          className,
        ])}
      >
        <BurgerMenuItemIcon itemName={item.name} isActive={isActive} />
        {item.name}
      </li>
    </AppLink>
  );
});
