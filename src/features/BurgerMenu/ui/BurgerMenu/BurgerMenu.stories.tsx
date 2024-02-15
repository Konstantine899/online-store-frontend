import type { Meta, StoryObj } from '@storybook/react';
import { BurgerMenu } from './BurgerMenu';

const meta: Meta<typeof BurgerMenu> = {
  title: 'features/BurgerMenuButton',
  component: BurgerMenu,
};

export default meta;
type Story = StoryObj<typeof BurgerMenu>;

export const Primary: Story = {
  args: {},
  render: () => <BurgerMenu />,
};
  