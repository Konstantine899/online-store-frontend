import type { Meta, StoryObj } from '@storybook/react';
import { CategoryItem } from './CategoryItem';

const meta: Meta<typeof CategoryItem> = {
  title: 'entities/Category',
  component: CategoryItem,
};

export default meta;
type Story = StoryObj<typeof CategoryItem>;

export const Primary: Story = {
  args: {},
  render: () => <CategoryItem />,
};
