import type { Meta, StoryObj } from '@storybook/react';
import { ProductsByCategoryAndBrandLimit } from './ProductsByCategoryAndBrandLimit';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof ProductsByCategoryAndBrandLimit> = {
  title: 'entities/ProductsByCategoryAndBrandLimit',
  component: ProductsByCategoryAndBrandLimit,
};

export default meta;
type Story = StoryObj<typeof ProductsByCategoryAndBrandLimit>;

export const Primary: Story = {
  args: {},
  render: (args) => <ProductsByCategoryAndBrandLimit {...args} />,
  decorators: [StoreDecorator({ products: { metaData: { limit: 5 } } })],
};
