import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './CategoriesBurgerMenuItem.module.scss';
import { AppLink } from '@/shared/ui/AppLink';
import { ICategoryBurgerMenuItem } from '../../model/types/ICategoryBurgerMenuItem';
import { CategoriesBurgerMenuItemIcon } from '../CategoriesBurgerMenuItemIcon/CategoriesBurgerMenuItemIcon';
import { getRouteCategory } from '@/shared/consts/router/publicRouter';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import {
  FetchProductsByCategory,
  ProductsPageActions,
} from '@/entities/Product';
import { useSelector } from 'react-redux';
import { getCategoryIdSelector } from '../../model/selectors/getAllCategoriesSelector';
import { CategorySliceActions } from '../../model/slices/CategorySlice';

interface BurgerMenuItemProps {
  className?: string;
  item?: ICategoryBurgerMenuItem;
  onClose?: () => void;
}

export const CategoriesBurgerMenuItem = memo((props: BurgerMenuItemProps) => {
  const { className, item, onClose } = props;
  const dispatch = useAppDispatch();
  const categoryId = useSelector(getCategoryIdSelector);

  const onHandleClick = (categoryId: number) => () => {
    dispatch(ProductsPageActions.setPage(1));
    dispatch(CategorySliceActions.setCategoryId(categoryId));
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
        <CategoriesBurgerMenuItemIcon
          itemName={item.name}
          isActive={isActive}
        />
        {item.name}
      </li>
    </AppLink>
  );
});
