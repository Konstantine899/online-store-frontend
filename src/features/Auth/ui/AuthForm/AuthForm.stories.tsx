import type { Meta, StoryObj } from '@storybook/react';
import AuthForm from './AuthForm';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof AuthForm> = {
  title: 'features/Auth/AuthForm',
  component: AuthForm,
  decorators: [StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof AuthForm>;

export const Primary: Story = {
  args: {},
  render: (args) => <AuthForm {...args} />,
};
