import type { Meta, StoryObj } from '@storybook/react';
import { BurgerMenuItemIcon } from './BurgerMenuItemIcon';

const meta: Meta<typeof BurgerMenuItemIcon> = {
  title: 'entities/CategoryIcon',
  component: BurgerMenuItemIcon,
};

export default meta;
type Story = StoryObj<typeof BurgerMenuItemIcon>;

export const Primary: Story = {
  args: {},
  render: () => <BurgerMenuItemIcon />,
};
