import type { Meta, StoryObj } from '@storybook/react';
import { ProductsListPage } from './ProductsListPage';

const meta: Meta<typeof ProductsListPage> = {
  title: 'entities/ArticleListPage',
  component: ProductsListPage,
};

export default meta;
type Story = StoryObj<typeof ProductsListPage>;

export const Primary: Story = {
  args: {},
  render: () => <ProductsListPage />,
};
