import type { Meta, StoryObj } from '@storybook/react';
import { Limit } from './Limit';
import { fn } from '@storybook/test';
import { mockProducts } from '@/shared/config/storybook/mocks/mockProducts';

const meta: Meta<typeof Limit> = {
  title: 'entities/Limit',
  component: Limit,
};

export default meta;
type Story = StoryObj<typeof Limit>;

export const Primary: Story = {
  args: {
    isSuccess: true,
    limit: '5',
    selectOptions: [
      { content: '5', value: '5' },
      { content: '10', value: '10' },
      { content: '20', value: '20' },
    ],
    onChange: fn(),
    products: mockProducts,
  },
  render: (args) => <Limit {...args} />,
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
  render: (args) => <Limit {...args} />,
};
