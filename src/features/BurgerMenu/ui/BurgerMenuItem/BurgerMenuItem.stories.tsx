import type { Meta, StoryObj } from '@storybook/react';
import { BurgerMenuItem } from './BurgerMenuItem';

const meta: Meta<typeof BurgerMenuItem> = {
  title: 'entities/Category',
  component: BurgerMenuItem,
};

export default meta;
type Story = StoryObj<typeof BurgerMenuItem>;

export const Primary: Story = {
  args: {},
  render: () => <BurgerMenuItem />,
};
