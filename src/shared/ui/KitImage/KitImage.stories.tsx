import type { Meta, StoryObj } from '@storybook/react';
import { KitImage } from './KitImage';

const meta: Meta<typeof KitImage> = {
  title: 'entities/Image',
  component: KitImage,
};

export default meta;
type Story = StoryObj<typeof KitImage>;

export const Primary: Story = {
  args: {},
  render: () => <KitImage />,
};
