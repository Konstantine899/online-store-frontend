
  import type { Meta, StoryObj } from '@storybook/react';
  import { Limit } from './Limit';
  
  const meta: Meta<typeof Limit> = {
  title: 'entities/Limit',   
  component: Limit,
};
  
  export default meta;
  type Story = StoryObj<typeof Limit>;
  
  export const Primary: Story = {
  args: {},
  render: (args) => <Limit {...args}/>,
};
  