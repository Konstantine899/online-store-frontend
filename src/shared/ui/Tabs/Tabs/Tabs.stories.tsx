import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './Tabs';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof Tabs> = {
  title: 'shared/Tabs/Tabs',
  component: Tabs,
  args: {
    onTabClick: action('onTabClick'),
    tabs: [
      { id: 1, name: 'Nokia' },
      { id: 2, name: 'Xiaomi' },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Primary: Story = {
  args: {},

  render: (args) => {
    return <Tabs {...args} />;
  },
};
