import type { Meta, StoryObj } from '@storybook/react';
import { ProductsByCategoryFilters } from './ProductsByCategoryFilters';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { handlers } from '@/shared/config/storybook/mocks/handlers/handlers';

const meta: Meta<typeof ProductsByCategoryFilters> = {
  title: 'entities/ProductsByCategoryFilters',
  component: ProductsByCategoryFilters,
  decorators: [
    StoreDecorator({
      category: { category: { id: 1, name: 'Смартфоны', image: '' } },
    }),
  ],
};

export default meta;
type Story = StoryObj<typeof ProductsByCategoryFilters>;

export const Pending: Story = {
  args: {},
  render: (args) => <ProductsByCategoryFilters {...args} />,
  parameters: {
    msw: {
      handlers: [
        handlers.productsAllByCategoryIdPending,
        handlers.brandsListByCategoryPending,
      ],
    },
  },
};

export const Success: Story = {
  args: {},
  render: (args) => <ProductsByCategoryFilters {...args} />,
  parameters: {
    msw: {
      handlers: [
        handlers.productsAllByCategoryIdSuccess,
        handlers.brandsListByCategorySuccess,
      ],
    },
  },
};
