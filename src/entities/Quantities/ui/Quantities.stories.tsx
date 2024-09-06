import type { Meta, StoryObj } from '@storybook/react';
import { Quantities } from './Quantities';

const meta: Meta<typeof Quantities> = {
  title: 'entities/Quantities',
  component: Quantities,
};

export default meta;
type Story = StoryObj<typeof Quantities>;

export const Primary: Story = {
  args: {},
  render: (args) => <Quantities {...args} />,
};
