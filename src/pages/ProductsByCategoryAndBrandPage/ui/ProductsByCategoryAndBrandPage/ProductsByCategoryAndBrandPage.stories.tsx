import type { Meta, StoryObj } from '@storybook/react';
import ProductsByCategoryAndBrandPage from './ProductsByCategoryAndBrandPage';

const meta: Meta<typeof ProductsByCategoryAndBrandPage> = {
  title: 'pages/ProductsByCategoryAndBrandPage',
  component: ProductsByCategoryAndBrandPage,
};

export default meta;
type Story = StoryObj<typeof ProductsByCategoryAndBrandPage>;

export const Primary: Story = {
  args: {},
  render: (args) => <ProductsByCategoryAndBrandPage {...args} />,
};
