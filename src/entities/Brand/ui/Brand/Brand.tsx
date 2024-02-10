import { useSelector } from 'react-redux';
import { memo, useEffect } from 'react';
import cls from './Brand.module.scss';
import { BrandActions } from '../../model/slices/BrandSlice';
import { getBrandSelector } from '../../model/selectors/getBrandSelector';
import { FetchAllBrands } from '../../model/services/FetchAllBrands';
import { GetAllBrandsSelector } from '../../model/selectors/getAllBrandsSelector';
import { FetchProductsByBrand, ProductsPageActions } from '@/entities/Product';
import { TabItem, Tabs } from '@/shared/ui/Tabs/Tabs';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { classNames } from '@/shared/lib/classNames/classNames';

interface BrandProps {
  className?: string;
}

export const Brand = memo((props: BrandProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(FetchAllBrands());
  }, [dispatch]);

  const brands = useSelector(GetAllBrandsSelector);
  const brandId = useSelector(getBrandSelector);

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
