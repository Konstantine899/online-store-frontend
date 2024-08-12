import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from './Skeleton';

const meta: Meta<typeof Skeleton> = {
  title: 'shared/Skeleton',
  parameters: { layout: 'fullscreen' },
  component: Skeleton,
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Primary: Story = {
  args: {},
  render: (args) => <Skeleton {...args} />,
};
