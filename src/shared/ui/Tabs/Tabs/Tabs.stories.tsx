import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './Tabs';
import { brands } from '@/shared/config/storybook/mocks/mockData';

const meta: Meta<typeof Tabs> = {
  title: 'shared/Tabs',
  component: Tabs,
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Primary: Story = {
  args: { isLoading: false, isSuccess: true, tabs: brands },
  render: (args) => {
    return <Tabs {...args} />;
  },
};

export const Active: Story = {
  args: { isLoading: false, isSuccess: true, tabs: brands, id: 3 },
  render: (args) => {
    return <Tabs {...args} />;
  },
};

export const Loading: Story = {
  args: { isLoading: true },
  render: (args) => {
    return <Tabs {...args} />;
  },
};
