import type { Meta, StoryObj } from '@storybook/react';
import { LoginFormAsync as LoginForm } from './LoginForm.async';

const meta: Meta<typeof LoginForm> = {
  title: 'entities/LoginForm',
  component: LoginForm,
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Primary: Story = {
  args: {},
  render: () => <LoginForm />,
};
  