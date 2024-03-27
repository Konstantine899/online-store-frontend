import { useSelector } from 'react-redux';
import { memo, useEffect } from 'react';
import cls from './Brand.module.scss';
import { FetchProductsByBrand, ProductsPageActions } from '@/entities/Product';
import { TabItem, Tabs } from '@/shared/ui/Tabs/Tabs';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { classNames } from '@/shared/lib/classNames/classNames';
import { BrandActions } from '../../model/slices/BrandSlice';
import { getBrandIdSelector } from '../../model/selectors/getBrandSelector';
import { getAllBrandsByCategorySelector } from '../../model/selectors/getAllBrandsByCategorySelector';
import { fetchAllBrandsByCategory } from '../../model/services/fetchAllBrandsByCategory';
import { getCategoryIdSelector } from '@/entities/Category';

interface BrandProps {
  className?: string;
}

export const Brand = memo((props: BrandProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const brands = useSelector(getAllBrandsByCategorySelector);
  const brandId = useSelector(getBrandIdSelector);
  const categoryId = useSelector(getCategoryIdSelector);

  useEffect(() => {
    if (brandId !== 0) {
      dispatch(BrandActions.setBrandId(brandId));
      dispatch(ProductsPageActions.setPage(1));
      dispatch(FetchProductsByBrand({ brandId }));
    }
    dispatch(fetchAllBrandsByCategory({ categoryId: 2 }));
  }, [brandId, categoryId, dispatch]);

  const handleClick = (tab: TabItem) => {
    dispatch(BrandActions.setBrandId(tab.id));
    dispatch(ProductsPageActions.setPage(1));
    dispatch(FetchProductsByBrand({ brandId: tab.id }));
  };

  return (
    <div className={classNames(cls.BrandWrapper, {}, [className])}>
      {<Tabs tabs={brands} brandId={brandId} onTabClick={handleClick} />}
    </div>
  );
});
