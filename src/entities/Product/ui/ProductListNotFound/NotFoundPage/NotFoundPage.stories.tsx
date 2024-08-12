import type { Meta, StoryObj } from '@storybook/react';
import { ProductListNotFound } from './ProductListNotFound';

const meta: Meta<typeof ProductListNotFound> = {
  title: 'pages/NotFoundPage',
  component: ProductListNotFound,
};

export default meta;
type Story = StoryObj<typeof ProductListNotFound>;

export const Primary: Story = {
  args: {},
  render: () => (
    <ProductListNotFound
      message={'К сожалению запрашиваемая вами страница не найдена'}
    />
  ),
};
