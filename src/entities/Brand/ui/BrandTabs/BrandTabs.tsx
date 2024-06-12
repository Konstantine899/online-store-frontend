import { memo } from 'react';
import cls from './BrandTabs.module.scss';
import {
  ProductsByCategoryAndBrandActions,
  useProductsByCategoryAndBrand,
} from '@/entities/Product';
import { TabItem, Tabs } from '@/shared/ui/Tabs/Tabs';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { classNames } from '@/shared/lib/classNames/classNames';
import { BrandActions } from '../../model/slices/BrandSlice';
import { useGetBrandsByCategory } from '../../api/brandApi';
import { useNavigate, useParams } from 'react-router-dom';
import { getRouteProductsByCategoryAndBrand } from '@/shared/consts/router/publicRouter';

interface BrandProps {
  className?: string;
}

export const BrandTabs = memo((props: BrandProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const { categoryId, brandId } = useParams();
  const navigate = useNavigate();
  const { data: brands, isSuccess } = useGetBrandsByCategory(`${categoryId}`);
  const [fetchProductsByCategoryAndBrand] = useProductsByCategoryAndBrand();

  const handleClick = (tab: TabItem) => {
    navigate(getRouteProductsByCategoryAndBrand(`${tab.id}`, `${categoryId}`));
    dispatch(BrandActions.setBrandId(Number(tab.id)));
    dispatch(ProductsByCategoryAndBrandActions.setPage(1));
    fetchProductsByCategoryAndBrand({
      categoryId: Number(categoryId),
      brandId: tab.id,
    });
  };

  if (isSuccess) {
    return (
      <div className={classNames(cls.BrandWrapper, {}, [className])}>
        {<Tabs id={Number(brandId)} tabs={brands} onTabClick={handleClick} />}
      </div>
    );
  }
});
