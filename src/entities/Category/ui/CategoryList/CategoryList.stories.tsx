import type { Meta, StoryObj } from '@storybook/react';
import { CategoryList } from './CategoryList';

const meta: Meta<typeof CategoryList> = {
  title: 'entities/CategoryList',
  component: CategoryList,
};

export default meta;
type Story = StoryObj<typeof CategoryList>;

export const Primary: Story = {
  args: {},
  render: () => <CategoryList />,
};
  