import { memo } from 'react';
import cls from './BrandTabs.module.scss';
import {
  ProductsByCategoryAndBrandActions,
  selectProductsByCategoryAndBrandCurrentPage,
  selectProductsByCategoryAndBrandLimit,
  selectProductsByCategoryAndBrandSort,
  useProductsByCategoryAndBrand,
} from '@/entities/Product';
import { TabItem, Tabs } from '@/shared/ui/Tabs/Tabs/Tabs';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { classNames } from '@/shared/lib/classNames/classNames';
import { BrandActions } from '../../model/slices/BrandSlice';
import { useGetBrandsByCategory } from '../../api/brandApi';
import { useParams } from 'react-router-dom';
import { getRouteProductsByCategoryAndBrand } from '@/shared/consts/router/publicRouter';
import { useNavigateSearch } from '@/shared/lib/hooks/useNavigateSearch';
import { useSelector } from 'react-redux';

interface BrandProps {
  className?: string;
}

export const BrandTabs = memo((props: BrandProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const { categoryId, brandId } = useParams();
  const navigate = useNavigateSearch();
  const {
    data: brands,
    isSuccess,
    isLoading,
  } = useGetBrandsByCategory(`${categoryId}`);
  const [fetchProductsByCategoryAndBrand] = useProductsByCategoryAndBrand();
  const limit = useSelector(selectProductsByCategoryAndBrandLimit);
  const sort = useSelector(selectProductsByCategoryAndBrandSort);
  const currentPage = useSelector(selectProductsByCategoryAndBrandCurrentPage);

  const handleClick = (tab: TabItem) => {
    navigate(getRouteProductsByCategoryAndBrand(`${tab.id}`, `${categoryId}`), {
      limit: `${limit}`,
      sort,
      page: `${currentPage}`,
    });
    dispatch(BrandActions.setBrandId(Number(tab.id)));
    dispatch(ProductsByCategoryAndBrandActions.setPage(1));
    fetchProductsByCategoryAndBrand({
      categoryId: Number(categoryId),
      brandId: tab.id,
    });
  };

  return (
    <div className={classNames(cls.BrandWrapper, {}, [className])}>
      {
        <Tabs
          isLoading={isLoading}
          isSuccess={isSuccess}
          id={Number(brandId)}
          tabs={brands}
          onTabClick={handleClick}
        />
      }
    </div>
  );
});

BrandTabs.displayName = `BrandTabs`;
