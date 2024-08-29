import type { Meta, StoryObj } from '@storybook/react';
import { Product } from './Product';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof Product> = {
  title: 'entities/Product',
  component: Product,
  decorators: [StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof Product>;

export const Primary: Story = {
  args: {},
  render: (arg) => <Product {...arg} />,
};
