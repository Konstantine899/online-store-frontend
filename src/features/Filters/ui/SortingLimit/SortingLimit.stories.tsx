import type { Meta, StoryObj } from '@storybook/react';
import { SortingLimit } from './SortingLimit';

const meta: Meta<typeof SortingLimit> = {
  title: 'entities/SortingLimit',
  component: SortingLimit,
};

export default meta;
type Story = StoryObj<typeof SortingLimit>;

export const Primary: Story = {
  args: {},
  render: () => <SortingLimit />,
};
