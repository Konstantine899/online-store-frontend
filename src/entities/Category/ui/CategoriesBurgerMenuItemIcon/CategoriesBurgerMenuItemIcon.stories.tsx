import type { Meta, StoryObj } from '@storybook/react';
import { CategoriesBurgerMenuItemIcon } from './CategoriesBurgerMenuItemIcon';

const meta: Meta<typeof CategoriesBurgerMenuItemIcon> = {
  title: 'entities/CategoryIcon',
  component: CategoriesBurgerMenuItemIcon,
};

export default meta;
type Story = StoryObj<typeof CategoriesBurgerMenuItemIcon>;

export const Primary: Story = {
  args: {},
  render: () => <CategoriesBurgerMenuItemIcon />,
};
