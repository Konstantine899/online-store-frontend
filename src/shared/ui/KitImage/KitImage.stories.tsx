import type { Meta, StoryObj } from '@storybook/react';
import { KitImage } from './KitImage';

const meta: Meta<typeof KitImage> = {
  title: 'shared/KitImage',
  tags: ['autodocs'],
  component: KitImage,
  args: {},
};

export default meta;
type Story = StoryObj<typeof KitImage>;

export const MainImage: Story = {
  args: {},
  render: (args) => <KitImage {...args} />,
};
