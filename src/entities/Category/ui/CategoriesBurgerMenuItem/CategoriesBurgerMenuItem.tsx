import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './CategoriesBurgerMenuItem.module.scss';
import { AppLink } from '@/shared/ui/AppLink';
import { CategoriesBurgerMenuItemIcon } from '../CategoriesBurgerMenuItemIcon/CategoriesBurgerMenuItemIcon';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { FetchProductsByCategory, ProductsActions } from '@/entities/Product';
import { useSelector } from 'react-redux';
import { CategoryActions } from '../../model/slices/CategorySlice';
import { selectCategoryId } from '../../model/selectors/selectCategory';
import { getRouteListProductsByCategory } from '@/shared/consts/router/publicRouter';
import { BrandActions } from '@/entities/Brand';
import { ICategory } from '../../model/types/ICategory';

interface BurgerMenuItemProps {
  item: ICategory;
  className?: string;
  onClose?: () => void;
}

export const CategoriesBurgerMenuItem = memo((props: BurgerMenuItemProps) => {
  const { className, item, onClose } = props;
  const dispatch = useAppDispatch();
  const categoryId = useSelector(selectCategoryId);

  const onHandleClick = (categoryId: number) => () => {
    dispatch(ProductsActions.setPage(1));
    dispatch(CategoryActions.setCategoryId(categoryId));
    dispatch(BrandActions.setBrandId(0));
    dispatch(FetchProductsByCategory({ categoryId }));
    onClose?.();
  };

  const isActive = categoryId === item.id;
  return (
    <AppLink
      to={getRouteListProductsByCategory(`${item.id}`)}
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
