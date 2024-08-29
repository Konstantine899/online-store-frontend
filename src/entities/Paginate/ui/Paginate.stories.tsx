import type { Meta, StoryObj } from '@storybook/react';
import { Paginate } from './Paginate';
import { fn } from '@storybook/test';

const meta: Meta<typeof Paginate> = {
  title: 'entities/Paginate',
  component: Paginate,
};

export default meta;
type Story = StoryObj<typeof Paginate>;

export const Primary: Story = {
  args: {
    paginationRange: [1, '...', 3, 4, 5, 6, 7, 8, 9, '...', 35],
    currentPage: 6,
    lastPage: 35,
    onPageChange: fn(),
  },
  render: (args) => <Paginate {...args} />,
};
