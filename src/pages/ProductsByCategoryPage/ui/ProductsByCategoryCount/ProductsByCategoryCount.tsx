import { memo, useEffect } from 'react';
import { useCategory } from '@/entities/Category';
import { useParams } from 'react-router';
import { Quantities } from '@/entities/Quantities';
import { useProductsByCategoryContext } from '@/entities/Product';

export const ProductsByCategoryCount = memo(() => {
  const { categoryId } = useParams();
  const [fetchCategory, { data: category }] = useCategory();
  const { productsByCategory, isLoading, isSuccess } =
    useProductsByCategoryContext();

  useEffect(() => {
    fetchCategory(`${categoryId}`);
  }, [categoryId, fetchCategory]);

  return (
    <Quantities
      isSuccess={isSuccess}
      isLoading={isLoading}
      products={productsByCategory}
      categoryName={category?.name}
    />
  );
});
