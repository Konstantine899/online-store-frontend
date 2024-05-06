import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './Tabs';
import { action } from '@storybook/addon-actions';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
// eslint-disable-next-line feature-slised-design-bak-plugin/layer-imports
import { AllBrandsReducer } from '@/entities/Brand';

const meta: Meta<typeof Tabs> = {
  title: 'shared/Tabs',
  tags: ['autodocs'],
  component: Tabs,
  args: {
    tabs: [
      { id: 1, name: 'Nokia' },
      { id: 2, name: 'Xiaomi' },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Primary: Story = {
  args: {
    onTabClick: action('onTabClick'),
  },

  decorators: [
    StoreDecorator(
      {
        allBrands: {
          brands: [
            { id: 1, name: 'Nokia' },
            { id: 2, name: 'Xiaomi' },
          ],
        },
      },
      { allBrands: AllBrandsReducer },
    ),
  ],

  render: (args) => {
    return <Tabs {...args} />;
  },
};
