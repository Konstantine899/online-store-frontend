import type { Meta, StoryObj } from '@storybook/react';
import { PageHeadingSkeleton } from './PageHeadingSkeleton';

const meta: Meta<typeof PageHeadingSkeleton> = {
  title: 'entities/PageHeadingSkeleton',
  component: PageHeadingSkeleton,
};

export default meta;
type Story = StoryObj<typeof PageHeadingSkeleton>;

export const Primary: Story = {
  args: {},
  render: (args) => <PageHeadingSkeleton {...args} />,
};
