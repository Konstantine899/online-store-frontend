import type { Meta, StoryObj } from '@storybook/react';
import { ProductList } from './ProductList';
import { Product } from '../../model/types/ProductsSchema';

const products: Product[] = [
  {
    id: 1,
    name: '',
    rating: 5,
    price: 100,
    voted: 1,
    category_id: 1,
    image: ``,
    brand_id: 1,
  },
];
const meta: Meta<typeof ProductList> = {
  title: 'entities/Product',
  tags: ['autodocs'],
  component: ProductList,
};

export default meta;
type Story = StoryObj<typeof ProductList>;

export const Primary: Story = {
  args: {},
  render: () => (
    <ProductList products={products} isLoading={false} _inited={true} />
  ),
};
