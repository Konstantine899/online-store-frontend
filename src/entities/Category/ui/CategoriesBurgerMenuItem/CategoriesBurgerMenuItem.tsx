import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './CategoriesBurgerMenuItem.module.scss';
import { CategoriesBurgerMenuItemIcon } from '../CategoriesBurgerMenuItemIcon/CategoriesBurgerMenuItemIcon';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { ProductsActions, useProductsByCategory } from '@/entities/Product';
import { useSelector } from 'react-redux';
import { CategoryActions } from '../../model/slices/CategorySlice';
import { selectCategoryId } from '../../model/selectors/selectCategory';
import { getRouteProductsByCategory } from '@/shared/consts/router/publicRouter';
import { BrandActions } from '@/entities/Brand';
import { ICategory } from '../../model/types/ICategory';
import { useNavigate } from 'react-router-dom';

interface BurgerMenuItemProps {
  item: ICategory;
  className?: string;
  onClose?: () => void;
}

export const CategoriesBurgerMenuItem = memo((props: BurgerMenuItemProps) => {
  const { className, item, onClose } = props;
  const dispatch = useAppDispatch();
  const categoryId = useSelector(selectCategoryId);
  const navigate = useNavigate();
  const [fetchProductsByCategory] = useProductsByCategory();

  const onHandleClick = (categoryId: number) => () => {
    dispatch(ProductsActions.setPage(1));
    dispatch(CategoryActions.setCategoryId(categoryId));
    dispatch(BrandActions.setBrandId(0));
    fetchProductsByCategory({ categoryId });
    navigate(getRouteProductsByCategory(`${categoryId}`));
    onClose?.();
  };

  const isActive = categoryId === item.id;
  return (
    <li
      className={classNames(cls.BurgerMenuItem, { [cls.active]: isActive }, [
        className,
      ])}
      onClick={onHandleClick(item.id)}
    >
      <CategoriesBurgerMenuItemIcon itemName={item.name} isActive={isActive} />
      {item.name}
    </li>
  );
});

CategoriesBurgerMenuItem.displayName = `CategoriesBurgerMenuItem`;
