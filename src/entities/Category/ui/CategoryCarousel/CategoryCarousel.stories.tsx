import type { Meta, StoryObj } from '@storybook/react';
import { CategoryCarousel } from './CategoryCarousel';

const meta: Meta<typeof CategoryCarousel> = {
  title: 'entities/CategoryCarousel',
  component: CategoryCarousel,
};

export default meta;
type Story = StoryObj<typeof CategoryCarousel>;

export const Primary: Story = {
  args: {},
  render: () => <CategoryCarousel />,
};
