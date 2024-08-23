import type { Meta, StoryObj } from '@storybook/react';
import { EmailInput } from './EmailInput';

const meta: Meta<typeof EmailInput> = {
  title: 'entities/EmailInput',
  component: EmailInput,
};

export default meta;
type Story = StoryObj<typeof EmailInput>;

export const Primary: Story = {
  args: {},
  render: () => <EmailInput />,
};
