import type { Meta, StoryObj } from '@storybook/react';
import { CategoriesList } from './CategoriesList';

const meta: Meta<typeof CategoriesList> = {
  title: 'entities/Category',
  component: CategoriesList,
};

export default meta;
type Story = StoryObj<typeof CategoriesList>;

export const Primary: Story = {
  args: {},
  render: () => <CategoriesList />,
};
