import type { Meta, StoryObj } from '@storybook/react';
import { MenuItemIcon } from './MenuItemIcon';

const meta: Meta<typeof MenuItemIcon> = {
  title: 'entities/MenuItemIcon',
  component: MenuItemIcon,
};

export default meta;
type Story = StoryObj<typeof MenuItemIcon>;

export const Primary: Story = {
  args: {},
  render: () => <MenuItemIcon itemName={'Компьютеры'} />,
};
