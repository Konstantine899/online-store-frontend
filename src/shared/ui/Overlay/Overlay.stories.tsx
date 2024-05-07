import type { Meta, StoryObj } from '@storybook/react';
import { Overlay } from './Overlay';

const meta: Meta<typeof Overlay> = {
  title: 'shared/Overlay',
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  component: Overlay,
};

export default meta;
type Story = StoryObj<typeof Overlay>;

export const Primary: Story = {
  render: () => <Overlay />,
};
