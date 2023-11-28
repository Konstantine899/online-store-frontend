
  import type { Meta, StoryObj } from '@storybook/react';
  import { ButtonClose } from './ButtonClose';
  
  const meta: Meta<typeof ButtonClose> = {
  title: 'features/ButtonClose',   
  component: ButtonClose,
};
  
  export default meta;
  type Story = StoryObj<typeof ButtonClose>;
  
  export const Primary: Story = {
  args: {},
  render: () => <ButtonClose />,
};
  