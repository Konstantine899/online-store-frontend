import type { Meta, StoryObj } from '@storybook/react';
import { PageHeading } from './PageHeading';

const meta: Meta<typeof PageHeading> = {
  title: 'entities/PageHeading',
  component: PageHeading,
};

export default meta;
type Story = StoryObj<typeof PageHeading>;

export const Primary: Story = {
  args: {},
  render: (args) => <PageHeading {...args} />,
};
