import type { Meta, StoryObj } from '@storybook/react';
import { LoginModal } from './LoginModal';

const meta: Meta<typeof LoginModal> = {
  title: 'entities/LoginModal',
  tags: ['autodocs'],
  component: LoginModal,
};

export default meta;
type Story = StoryObj<typeof LoginModal>;

export const Primary: Story = {
  args: {},
  render: () => <LoginModal />,
};
