import type { Meta, StoryObj } from '@storybook/react';
import { ProductVotes } from './ProductVotes';

const meta: Meta<typeof ProductVotes> = {
  title: 'entities/ProductVotes',
  component: ProductVotes,
};

export default meta;
type Story = StoryObj<typeof ProductVotes>;

export const Primary: Story = {
  args: {},
  render: () => <ProductVotes />,
};
