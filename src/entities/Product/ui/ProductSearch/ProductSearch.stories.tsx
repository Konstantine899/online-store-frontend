import type { Meta, StoryObj } from '@storybook/react';
import { ProductSearch } from './ProductSearch';

const meta: Meta<typeof ProductSearch> = {
  title: 'features/Filters',
  component: ProductSearch,
};

export default meta;
type Story = StoryObj<typeof ProductSearch>;

export const Primary: Story = {
  args: {},
  render: () => <ProductSearch />,
};
