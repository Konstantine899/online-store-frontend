import { useSelector } from 'react-redux';
import { memo, useEffect } from 'react';
import cls from './Brand.module.scss';
import {
  FetchProductsByBrandAndCategory,
  ProductsActions,
} from '@/entities/Product';
import { TabItem, Tabs } from '@/shared/ui/Tabs/Tabs';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { classNames } from '@/shared/lib/classNames/classNames';
import { BrandActions } from '../../model/slices/BrandSlice';
import { getBrandIdSelector } from '../../model/selectors/getBrandSelector';
import { getAllBrandsByCategorySelector } from '../../model/selectors/getAllBrandsByCategorySelector';
import { fetchAllBrandsByCategory } from '../../model/services/fetchAllBrandsByCategory';
import { getCategoryIdSelector } from '@/entities/Category';
import { getRouteListProductsByBrandAndByCategory } from '@/shared/consts/router/publicRouter';
import { useNavigate } from 'react-router';

interface BrandProps {
  className?: string;
}

export const Brand = memo((props: BrandProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const brands = useSelector(getAllBrandsByCategorySelector);
  const brandId = useSelector(getBrandIdSelector);
  const categoryId = useSelector(getCategoryIdSelector);

  useEffect(() => {
    if (categoryId) dispatch(fetchAllBrandsByCategory({ categoryId }));
  }, [categoryId, dispatch]);

  const handleClick = (tab: TabItem) => {
    dispatch(BrandActions.setBrandId(tab.id));
    dispatch(ProductsActions.setPage(1));
    dispatch(FetchProductsByBrandAndCategory({ categoryId, brandId: tab.id }));
    navigate(
      getRouteListProductsByBrandAndByCategory(`${tab.id}`, `${categoryId}`),
    );
  };

  return (
    <div className={classNames(cls.BrandWrapper, {}, [className])}>
      {<Tabs id={brandId} tabs={brands} onTabClick={handleClick} />}
    </div>
  );
});
