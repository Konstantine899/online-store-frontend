
  import type { Meta, StoryObj } from '@storybook/react';
  import { SortOrder } from './SortOrder';
  
  const meta: Meta<typeof SortOrder> = {
  title: 'entities/SortOrder',   
  component: SortOrder,
};
  
  export default meta;
  type Story = StoryObj<typeof SortOrder>;
  
  export const Primary: Story = {
  args: {},
  render: (args) => <SortOrder {...args}/>,
};
  