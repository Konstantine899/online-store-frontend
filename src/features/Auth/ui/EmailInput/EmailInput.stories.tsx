import type { Meta, StoryObj } from '@storybook/react';
import { EmailInput } from './EmailInput';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof EmailInput> = {
  title: 'features/Auth/EmailInput',
  component: EmailInput,
};

export default meta;
type Story = StoryObj<typeof EmailInput>;

export const Primary: Story = {
  args: {},
  render: (args) => <EmailInput {...args} />,
  decorators: [StoreDecorator({})],
};

export const Secondary: Story = {
  args: {},
  render: (args) => <EmailInput {...args} />,
  decorators: [StoreDecorator({ auth: { email: 'test@email.com' } })],
};
