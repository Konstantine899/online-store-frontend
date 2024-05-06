import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardTheme } from './Card';

const meta: Meta<typeof Card> = {
  title: 'shared/Card',
  tags: ['autodocs'],
  component: Card,
  args: { children: <div style={{ padding: '5px' }}>Карточка</div> },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Outline: Story = {
  args: {
    theme: CardTheme.OUTLINED,
  },
  render: (args) => <Card {...args} />,
};

export const OutlineActive: Story = {
  args: {
    theme: CardTheme.OUTLINED_ACTIVE,
  },
  render: (args) => <Card {...args} />,
};
