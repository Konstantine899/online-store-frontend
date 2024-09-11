import type { Meta, StoryObj } from '@storybook/react';
import { RegistrationError } from './RegistrationError';

const meta: Meta<typeof RegistrationError> = {
  title: 'features/RegistrationError',
  component: RegistrationError,
};

export default meta;
type Story = StoryObj<typeof RegistrationError>;

export const Primary: Story = {
  args: {},
  render: () => <RegistrationError />,
};
