import type { Meta, StoryObj } from '@storybook/react';
import { CategoriesButtonClose } from './CategoriesButtonClose';

const meta: Meta<typeof CategoriesButtonClose> = {
  title: 'features/ButtonClose',
  component: CategoriesButtonClose,
};

export default meta;
type Story = StoryObj<typeof CategoriesButtonClose>;

export const Primary: Story = {
  args: {},
  render: () => <CategoriesButtonClose />,
};
