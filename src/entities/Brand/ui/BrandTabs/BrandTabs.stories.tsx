import type { Meta, StoryObj } from '@storybook/react';
import { BrandTabs } from './BrandTabs';

const meta: Meta<typeof BrandTabs> = {
  title: 'entities/BrandTabs',
  tags: ['autodocs'],
  component: BrandTabs,
};

export default meta;
type Story = StoryObj<typeof BrandTabs>;

export const Primary: Story = {
  args: {},
  render: () => <BrandTabs />,
};
