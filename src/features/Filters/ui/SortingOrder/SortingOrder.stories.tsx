import type { Meta, StoryObj } from '@storybook/react';
import { SortingOrder } from './SortingOrder';

const meta: Meta<typeof SortingOrder> = {
  title: 'entities/SortingOrder',
  component: SortingOrder,
};

export default meta;
type Story = StoryObj<typeof SortingOrder>;

export const Primary: Story = {
  args: {},
  render: () => <SortingOrder />,
};
  