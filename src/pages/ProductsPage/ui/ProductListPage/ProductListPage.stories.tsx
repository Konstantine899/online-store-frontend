import type { Meta, StoryObj } from '@storybook/react';
import { ProductListPage } from './ProductListPage';

const meta: Meta<typeof ProductListPage> = {
  title: 'entities/ArticleListPage',
  component: ProductListPage,
};

export default meta;
type Story = StoryObj<typeof ProductListPage>;

export const Primary: Story = {
  args: {},
  render: () => <ProductListPage />,
};
