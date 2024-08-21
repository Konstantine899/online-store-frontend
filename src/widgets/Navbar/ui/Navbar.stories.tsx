import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from './Navbar';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import { user } from '@/shared/config/storybook/mocks/mockUserData';

const meta: Meta<typeof Navbar> = {
  title: 'widgets/Navbar',
  component: Navbar,
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Guest: Story = {
  render: () => <Navbar />,
  decorators: [StoreDecorator({})],
};

export const User: Story = {
  render: () => <Navbar />,
  decorators: [StoreDecorator({ user })],
};
