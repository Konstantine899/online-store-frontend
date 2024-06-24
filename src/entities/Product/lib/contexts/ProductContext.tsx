import { createContext, ReactNode, useContext, useEffect } from 'react';
import { IProduct } from '../../model/types/IProduct';
import { useProduct } from '../../api/productApi';
import { useParams } from 'react-router';

interface IProps {
  children: ReactNode;
}

interface IProductContext {
  product?: IProduct;
  isLoading: boolean;
  isSuccess: boolean;
}

const ProductContext = createContext<IProductContext>({
  isLoading: false,
  isSuccess: false,
});

export const useProductContext = () => useContext(ProductContext);

export const ProductProvider = ({ children }: IProps) => {
  const { productId } = useParams<{ productId: string }>();
  const [fetchProduct, { data, isLoading, isSuccess }] = useProduct();

  useEffect(() => {
    fetchProduct({ productId: Number(productId) });
  }, [fetchProduct, productId]);

  return (
    <ProductContext.Provider value={{ product: data, isSuccess, isLoading }}>
      {children}
    </ProductContext.Provider>
  );
};
