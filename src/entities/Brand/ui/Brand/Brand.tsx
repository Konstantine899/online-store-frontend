import { useSelector } from 'react-redux';
import { memo, useEffect } from 'react';
import cls from './Brand.module.scss';
import { FilteringByBrandIdActions } from '../../model/slices/FilteringByBrandIdSlice';
import { filteringByBrandSelector } from '../../model/selectors/filteringByBrandSelector';
import { FetchAllBrands } from '../../model/services/FetchAllBrands';
import { getAllBrandsSelector } from '../../model/selectors/getAllBrandsSelector';
import { FetchProductsByBrand } from '@/entities/Product';
import { TabItem, Tabs } from '@/shared/ui/Tabs/Tabs';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ProductsPageActions } from '@/entities/Product';

interface BrandProps {
  className?: string;
}

export const Brand = memo((props: BrandProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(FetchAllBrands());
  }, [dispatch]);

  const brands = useSelector(getAllBrandsSelector);
  const brandId = useSelector(filteringByBrandSelector);

  const handleClick = (tab: TabItem) => {
    dispatch(FilteringByBrandIdActions.setBrandId(tab.id));
    dispatch(ProductsPageActions.setPage(1));
    dispatch(FetchProductsByBrand({ brandId: tab.id }));
  };

  return (
    <div className={classNames(cls.BrandWrapper, {}, [className])}>
      {<Tabs tabs={brands} brandId={brandId} onTabClick={handleClick} />}
    </div>
  );
});
