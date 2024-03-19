import type { Meta, StoryObj } from '@storybook/react';
import { Star } from './Star';

const meta: Meta<typeof Star> = {
  title: 'entities/Star',
  component: Star,
};

export default meta;
type Story = StoryObj<typeof Star>;

export const Primary: Story = {
  args: {},
  render: () => <Star />,
};
