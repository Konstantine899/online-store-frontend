
  import type { Meta, StoryObj } from '@storybook/react';
  import { Scroll } from './Scroll';
  
  const meta: Meta<typeof Scroll> = {
  title: 'widgets/Scroll',   
  component: Scroll,
};
  
  export default meta;
  type Story = StoryObj<typeof Scroll>;
  
  export const Primary: Story = {
  args: {},
  render: () => <Scroll />,
};
  