import type { Meta, StoryObj } from '@storybook/react';
import { ProductCard } from './ProductCard';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Card, CardTheme } from '@/shared/ui/Card/Card';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ProductCard.module.scss';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';
import { mockProduct } from '@/shared/config/storybook/mocks/mockProduct';
import { ProductDetailsReducer } from '../../model/slices/ProductDetailsSlice';
import { ReducersList } from '@/shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { getRouteProduct } from '@/shared/consts/router/publicRouter';
import { AppLink, AppLinkFontSize } from '@/shared/ui/AppLink/AppLink';
import { Text } from '@/shared/ui/Text';
import { TextTheme } from '@/shared/ui/Text/Text';

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
      className={classNames(cls.Card, {}, [])}
    >
      <div className={cls.Top}>
        <AppLink to={getRouteProduct(`${product.id}`)}>
          <img
            src={product.image}
            width={225}
            height={220}
            alt={product.image}
          />
        </AppLink>
      </div>
      <div className={cls.Bottom}>
        <AppLink
          to={getRouteProduct(`${product.id}`)}
          fontSize={AppLinkFontSize.M}
        >
          <Text text={product.name} theme={TextTheme.BLACK} ellipsis />
        </AppLink>
        <Text
          className={cls.Price}
          text={`${product.price}`}
          theme={TextTheme.BLACK}
        />
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
