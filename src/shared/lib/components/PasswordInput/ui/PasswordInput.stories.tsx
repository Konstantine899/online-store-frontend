
  import type { Meta, StoryObj } from '@storybook/react';
  import { PasswordInput } from './PasswordInput';
  
  const meta: Meta<typeof PasswordInput> = {
  title: 'features/PasswordInput',   
  component: PasswordInput,
};
  
  export default meta;
  type Story = StoryObj<typeof PasswordInput>;
  
  export const Primary: Story = {
  args: {},
  render: () => <PasswordInput />,
};
  