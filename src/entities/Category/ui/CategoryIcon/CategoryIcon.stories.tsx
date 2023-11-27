import type { Meta, StoryObj } from '@storybook/react';
import { CategoryIcon } from './CategoryIcon';

const meta: Meta<typeof CategoryIcon> = {
  title: 'entities/CategoryIcon',
  component: CategoryIcon,
};

export default meta;
type Story = StoryObj<typeof CategoryIcon>;

export const Primary: Story = {
  args: {},
  render: () => <CategoryIcon />,
};
  