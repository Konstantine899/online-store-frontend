import type { Meta, StoryObj } from '@storybook/react';
import { Star, StarSize } from './Star';

const meta: Meta<typeof Star> = {
  title: 'shared/Star',
  component: Star,
};

export default meta;
type Story = StoryObj<typeof Star>;

export const StarS: Story = {
  args: { size: StarSize.S },
  render: (args) => <Star {...args} />,
};

export const StarM: Story = {
  args: { size: StarSize.M },
  render: (args) => <Star {...args} />,
};

export const StarL: Story = {
  args: { size: StarSize.L },
  render: (args) => <Star {...args} />,
};

export const StarXL: Story = {
  args: { size: StarSize.XL },
  render: (args) => <Star {...args} />,
};
