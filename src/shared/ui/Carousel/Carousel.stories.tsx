import type { Meta, StoryObj } from '@storybook/react';
import { Carousel } from './Carousel';

const meta: Meta<typeof Carousel> = {
  title: 'entities/Carousel',
  component: Carousel,
};

export default meta;
type Story = StoryObj<typeof Carousel>;

export const Primary: Story = {
  args: {},
  render: () => <Carousel elementsQuantity={4} infinite={true} />,
};
