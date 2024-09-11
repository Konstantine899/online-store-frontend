import type { Meta, StoryObj } from '@storybook/react';
import { SortOrder } from './SortOrder';
import { mockProducts } from '@/shared/config/storybook/mocks/mockProducts';

const meta: Meta<typeof SortOrder> = {
  title: 'entities/SortOrder',
  component: SortOrder,
};

export default meta;
type Story = StoryObj<typeof SortOrder>;

export const Primary: Story = {
  args: {
    products: mockProducts,
    isSuccess: true,
    selectOptions: [
      { value: 'asc', content: 'возрастанию' },
      { value: 'desc', content: 'убыванию' },
    ],
    sort: 'asc',
  },
  render: (args) => <SortOrder {...args} />,
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
  render: (args) => <SortOrder {...args} />,
};
