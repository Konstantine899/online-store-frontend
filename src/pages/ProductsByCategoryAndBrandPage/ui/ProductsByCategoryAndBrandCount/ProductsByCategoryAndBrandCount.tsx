import { memo, useEffect } from 'react';
import { useParams } from 'react-router';
import { useCategory } from '@/entities/Category';
import { useProductsByCategoryAndBrandContext } from '@/entities/Product';
import { Quantities } from '@/entities/Quantities';

export const ProductsByCategoryAndBrandCount = memo(() => {
  const { categoryId } = useParams();
  const [fetchCategory, { data: category }] = useCategory();
  const { productsByCategoryAndBrand, isSuccess, isLoading } =
    useProductsByCategoryAndBrandContext();

  useEffect(() => {
    fetchCategory(`${categoryId}`);
  }, [categoryId, fetchCategory]);

  return (
    <Quantities
      isSuccess={isSuccess}
      isLoading={isLoading}
      products={productsByCategoryAndBrand}
      categoryName={category?.name}
    />
  );
});
