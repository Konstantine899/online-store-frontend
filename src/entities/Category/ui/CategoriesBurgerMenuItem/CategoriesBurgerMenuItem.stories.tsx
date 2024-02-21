import type { Meta, StoryObj } from '@storybook/react';
import { CategoriesBurgerMenuItem } from './CategoriesBurgerMenuItem';

const meta: Meta<typeof CategoriesBurgerMenuItem> = {
  title: 'entities/Category',
  component: CategoriesBurgerMenuItem,
};

export default meta;
type Story = StoryObj<typeof CategoriesBurgerMenuItem>;

export const Primary: Story = {
  args: {},
  render: () => <CategoriesBurgerMenuItem />,
};
