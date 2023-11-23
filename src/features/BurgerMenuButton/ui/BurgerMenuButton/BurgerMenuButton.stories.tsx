
  import type { Meta, StoryObj } from '@storybook/react';
  import { BurgerMenuButton } from './BurgerMenuButton';
  
  const meta: Meta<typeof BurgerMenuButton> = {
  title: 'features/BurgerMenuButton',   
  component: BurgerMenuButton,
};
  
  export default meta;
  type Story = StoryObj<typeof BurgerMenuButton>;
  
  export const Primary: Story = {
  args: {},
  render: () => <BurgerMenuButton />,
};
  