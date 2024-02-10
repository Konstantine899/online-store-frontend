import type { Meta, StoryObj } from '@storybook/react';
import TabBrand from './TabBrand';

const meta: Meta<typeof TabBrand> = {
  title: 'entities/TabBrand',
  component: TabBrand,
};

export default meta;
type Story = StoryObj<typeof TabBrand>;

export const Primary: Story = {
  args: {},
  render: () => <TabBrand />,
};
