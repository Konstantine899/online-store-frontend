import type { Meta, StoryObj } from '@storybook/react';
import { Carousel } from './Carousel';
import { Card, CardTheme } from '../Card/Card';

const mokData: { id: number; name: string }[] = [
  { id: 1, name: '1' },
  { id: 2, name: '2' },
  { id: 3, name: '3' },
  { id: 4, name: '4' },
  {
    id: 5,
    name: '5',
  },
  { id: 6, name: '6' },
];

const meta: Meta<typeof Carousel> = {
  title: 'shared/Carousel',
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
  component: Carousel,
  args: {
    infinite: true,
    children: mokData.map((item) => (
      <Card theme={CardTheme.OUTLINED} key={item.id} style={{ height: '50px' }}>
        {item.name}
      </Card>
    )),
  },
};

export default meta;
type Story = StoryObj<typeof Carousel>;

export const OneElement: Story = {
  args: { elementsQuantity: 1 },
  render: (args) => <Carousel {...args} />,
};

export const TwoElements: Story = {
  args: {
    elementsQuantity: 2,
  },
  render: (args) => <Carousel {...args} />,
};

export const ThreeElements: Story = {
  args: {
    elementsQuantity: 3,
  },
  render: (args) => <Carousel {...args} />,
};

export const FourElements: Story = {
  args: {
    elementsQuantity: 4,
  },
  render: (args) => <Carousel {...args} />,
};

export const FiveElements: Story = {
  args: {
    elementsQuantity: 5,
  },
  render: (args) => <Carousel {...args} />,
};
