import type { Meta, StoryObj } from '@storybook/react';
import { RegistrationFormAsync as RegistrationForm } from './RegistrationForm.async';

const meta: Meta<typeof RegistrationForm> = {
  title: 'entities/RegistrationForm',
  component: RegistrationForm,
};

export default meta;
type Story = StoryObj<typeof RegistrationForm>;

export const Primary: Story = {
  args: {},
  render: () => <RegistrationForm />,
};
