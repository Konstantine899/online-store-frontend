
  import type { Meta, StoryObj } from '@storybook/react';
  import { Paginate } from './Paginate';
  
  const meta: Meta<typeof Paginate> = {
  title: 'entities/Paginate',   
  component: Paginate,
};
  
  export default meta;
  type Story = StoryObj<typeof Paginate>;
  
  export const Primary: Story = {
  args: {},
  render: () => <Paginate />,
};
  