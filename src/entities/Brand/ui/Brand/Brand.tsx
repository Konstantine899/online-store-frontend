import { useSelector } from 'react-redux';
import { memo } from 'react';
import cls from './Brand.module.scss';
import {
  fetchProductsByCategoryAndBrand,
  ProductsActions,
} from '@/entities/Product';
import { TabItem, Tabs } from '@/shared/ui/Tabs/Tabs';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { classNames } from '@/shared/lib/classNames/classNames';
import { BrandActions } from '../../model/slices/BrandSlice';
import { selectCategoryId } from '@/entities/Category';
import { getRouteListProductsByBrandAndByCategory } from '@/shared/consts/router/publicRouter';
import { useNavigate } from 'react-router';
import { useGetBrandsByCategory } from '../../api/brandApi';
import { selectBrandId } from '../../model/selectors/selectBrand';

interface BrandProps {
  className?: string;
}

export const Brand = memo((props: BrandProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const brandId = useSelector(selectBrandId);
  const categoryId = useSelector(selectCategoryId);

  const { data: brands, isSuccess } = useGetBrandsByCategory(categoryId);

  const handleClick = (tab: TabItem) => {
    dispatch(BrandActions.setBrandId(tab.id));
    dispatch(ProductsActions.setPage(1));
    dispatch(fetchProductsByCategoryAndBrand({ categoryId, brandId: tab.id }));
    navigate(
      getRouteListProductsByBrandAndByCategory(`${tab.id}`, `${categoryId}`),
    );
  };

  if (isSuccess) {
    return (
      <div className={classNames(cls.BrandWrapper, {}, [className])}>
        {<Tabs id={brandId} tabs={brands} onTabClick={handleClick} />}
      </div>
    );
  }
});
