import type { Meta, StoryObj } from '@storybook/react';
import { MenuList } from './MenuList';

const meta: Meta<typeof MenuList> = {
  title: 'entities/Menu',
  component: MenuList,
};

export default meta;
type Story = StoryObj<typeof MenuList>;

export const Primary: Story = {
  args: {},
  render: () => <MenuList />,
};
