import type { Meta, StoryObj } from '@storybook/react';
import { ProductsPaginate } from './ProductsPaginate';

const meta: Meta<typeof ProductsPaginate> = {
  title: 'entities/ProductsPaginate',
  component: ProductsPaginate,
};

export default meta;
type Story = StoryObj<typeof ProductsPaginate>;

export const Primary: Story = {
  args: {},
  render: (args) => <ProductsPaginate {...args} />,
};
