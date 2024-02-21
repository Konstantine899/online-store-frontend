import type { Meta, StoryObj } from '@storybook/react';
import { CategoriesBurgerMenu } from './CategoriesBurgerMenu';

const meta: Meta<typeof CategoriesBurgerMenu> = {
  title: 'features/BurgerMenuButton',
  component: CategoriesBurgerMenu,
};

export default meta;
type Story = StoryObj<typeof CategoriesBurgerMenu>;

export const Primary: Story = {
  args: {},
  render: () => <CategoriesBurgerMenu />,
};
