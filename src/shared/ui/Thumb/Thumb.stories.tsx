import type { Meta, StoryObj } from '@storybook/react';
import { Thumb } from './Thumb';

const meta: Meta<typeof Thumb> = {
  title: 'entities/Thumb',
  component: Thumb,
};

export default meta;
type Story = StoryObj<typeof Thumb>;

export const Primary: Story = {
  args: {},
  render: () => <Thumb />,
};
