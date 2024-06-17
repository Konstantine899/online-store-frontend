import type { Meta, StoryObj } from '@storybook/react';
import AuthForm from './AuthForm';

const meta: Meta<typeof AuthForm> = {
  title: 'features/Auth/AuthForm',
  component: AuthForm,
};

export default meta;
type Story = StoryObj<typeof AuthForm>;

export const Primary: Story = {
  args: {},
  render: (args) => <AuthForm {...args} />,
};
