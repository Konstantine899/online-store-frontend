import type { Meta, StoryObj } from '@storybook/react';
import { CategoriesPopular } from './CategoriesPopular';

const meta: Meta<typeof CategoriesPopular> = {
  title: 'entities/CategoriesPopular',
  tags: ['autodocs'],
  component: CategoriesPopular,
};

export default meta;
type Story = StoryObj<typeof CategoriesPopular>;

export const Primary: Story = {
  args: {},
  render: (args) => <CategoriesPopular {...args} />,
};
