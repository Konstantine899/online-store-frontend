import type { Meta, StoryObj } from '@storybook/react';
import { ProductCard } from './ProductCard';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Card, CardTheme } from '@/shared/ui/Card/Card';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ProductCard.module.scss';
import { ProductCardTitle } from '../ProductCardTitle/ProductCardTitle';
import { ProductCardPrice } from '../ProductCardPrice/ProductCardPrice';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';
import { mockProduct } from '@/shared/config/storybook/mocks/mockProduct';
import { ProductDetailsReducer } from '../../model/slices/ProductDetailsSlice';
import { ReducersList } from '@/shared/lib/DynamicModuleLoader/DynamicModuleLoader';

const asyncReducers: ReducersList = {
  product: ProductDetailsReducer,
};

const meta: Meta<typeof ProductCard> = {
  title: 'entities/ProductCard',
  component: ProductCard,
  decorators: [StoreDecorator({ product: mockProduct }, asyncReducers)],
};

export default meta;
type Story = StoryObj<typeof ProductCard>;

export const Primary: Story = {
  args: {
    product: mockProduct,
  },
  render: ({ product }) => (
    <Card
      key={product.id}
      theme={CardTheme.OUTLINED}
      className={classNames(cls.ProductCard, {}, [])}
    >
      <div className={cls.CardTop}>
        <img
          src={product.image}
          alt={'картинка'}
          width={`100%`}
          height={`100%`}
        />
      </div>
      <div className={cls.CardBottom}>
        <ProductCardTitle product={product} />
        <ProductCardPrice product={product} />
        <Button
          className={cls.CardAdd}
          theme={ButtonTheme.OUTLINE}
          size={ButtonSize.M}
          fullWidth
        >
          Добавить в корзину
        </Button>
      </div>
    </Card>
  ),
};
