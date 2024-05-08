import type { Meta, StoryObj } from '@storybook/react';
import { Thumb, ThumbSize } from './Thumb';

const meta: Meta<typeof Thumb> = {
  title: 'shared/Thumb',
  tags: ['autodocs'],
  component: Thumb,
};

export default meta;
type Story = StoryObj<typeof Thumb>;

export const ThumbS: Story = {
  args: { size: ThumbSize.S },
  render: (args) => <Thumb {...args} />,
};

export const ThumbM: Story = {
  args: { size: ThumbSize.M },
  render: (args) => <Thumb {...args} />,
};

export const ThumbL: Story = {
  args: { size: ThumbSize.L },
  render: (args) => <Thumb {...args} />,
};

export const ThumbXL: Story = {
  args: { size: ThumbSize.XL },
  render: (args) => <Thumb {...args} />,
};
