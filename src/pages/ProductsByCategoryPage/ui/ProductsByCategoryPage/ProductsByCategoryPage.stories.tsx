import type { Meta, StoryObj } from '@storybook/react';
import ProductsByCategoryPage from './ProductsByCategoryPage';

const meta: Meta<typeof ProductsByCategoryPage> = {
  title: 'pages/ProductsByCategoryPage',
  component: ProductsByCategoryPage,
};

export default meta;
type Story = StoryObj<typeof ProductsByCategoryPage>;

export const Primary: Story = {
  args: {},
  render: (args) => <ProductsByCategoryPage {...args} />,
};
