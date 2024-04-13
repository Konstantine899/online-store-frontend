import type { Meta, StoryObj } from '@storybook/react';
import { Search } from './Search';

const meta: Meta<typeof Search> = {
  title: 'entities/Search',
  component: Search,
};

export default meta;
type Story = StoryObj<typeof Search>;

export const Primary: Story = {
  args: {},
  render: () => (
    <Search
      search={''}
      onSearch={() => {}}
      fetchData={() => {}}
      placeholder={'Найти товары'}
    />
  ),
};
