import type { Meta, StoryObj } from '@storybook/react';
import { BurgerMenuList } from './BurgerMenuList';

const meta: Meta<typeof BurgerMenuList> = {
  title: 'entities/CategoryList',
  component: BurgerMenuList,
};

export default meta;
type Story = StoryObj<typeof BurgerMenuList>;

export const Primary: Story = {
  args: {},
  render: () => <BurgerMenuList />,
};
