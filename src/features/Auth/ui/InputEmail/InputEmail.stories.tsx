import type { Meta, StoryObj } from '@storybook/react';
import { InputEmail } from './InputEmail';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof InputEmail> = {
  title: 'features/Auth/InputEmail',
  component: InputEmail,
};

export default meta;
type Story = StoryObj<typeof InputEmail>;

export const Primary: Story = {
  args: {},
  render: (args) => <InputEmail {...args} />,
  decorators: [StoreDecorator({})],
};

export const Secondary: Story = {
  args: {},
  render: (args) => <InputEmail {...args} />,
  decorators: [StoreDecorator({ auth: { email: 'test@email.com' } })],
};
