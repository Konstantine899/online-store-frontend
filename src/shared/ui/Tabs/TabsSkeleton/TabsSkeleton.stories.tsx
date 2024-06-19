import type { Meta, StoryObj } from '@storybook/react';
import { TabsSkeleton } from './TabsSkeleton';

const meta: Meta<typeof TabsSkeleton> = {
  title: 'shared/Tabs/TabsSkeleton',
  component: TabsSkeleton,
};

export default meta;
type Story = StoryObj<typeof TabsSkeleton>;

export const Primary: Story = {
  args: {},
  render: (args) => <TabsSkeleton {...args} />,
};
