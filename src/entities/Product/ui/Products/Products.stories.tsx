import type { Meta, StoryObj } from '@storybook/react';
import { Products } from './Products';

const meta: Meta<typeof Products> = {
  title: 'entities/Products',
  component: Products,
};

export default meta;
type Story = StoryObj<typeof Products>;

export const Primary: Story = {
  args: {},
  render: (args) => <Products {...args} />,
};
