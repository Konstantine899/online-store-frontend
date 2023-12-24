import type { Meta, StoryObj } from '@storybook/react';
import { RegistrationModal } from './RegistrationModal';

const meta: Meta<typeof RegistrationModal> = {
  title: 'entities/RegistrationModal',
  component: RegistrationModal,
};

export default meta;
type Story = StoryObj<typeof RegistrationModal>;

export const Primary: Story = {
  args: {},
  render: () => <RegistrationModal />,
};
  