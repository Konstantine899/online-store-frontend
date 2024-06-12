import type { Meta, StoryObj } from '@storybook/react';
import { Product } from './Product';

const meta: Meta<typeof Product> = {
  title: 'entities/ProductDetails',
  tags: ['autodocs'],
  component: Product,
};

export default meta;
type Story = StoryObj<typeof Product>;

export const Primary: Story = {
  args: {},
  render: (arg) => <Product {...arg} />,
};
