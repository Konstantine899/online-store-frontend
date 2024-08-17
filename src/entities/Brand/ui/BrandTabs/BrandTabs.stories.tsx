import type { Meta, StoryObj } from '@storybook/react';
import { BrandTabs } from './BrandTabs';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { handlers } from '@/shared/config/storybook/mocks/handlers';

const meta: Meta<typeof BrandTabs> = {
  title: 'entities/BrandTabs',
  component: BrandTabs,
  decorators: [StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof BrandTabs>;

export const FetchBrandsByCategoryPending: Story = {
  args: {},
  render: () => <BrandTabs />,
  parameters: {
    msw: {
      handlers: [handlers.brandsListByCategoryPending],
    },
  },
};

export const FetchBrandsByCategorySuccess: Story = {
  args: {},
  render: () => <BrandTabs />,
  parameters: {
    msw: {
      handlers: [handlers.brandsListByCategorySuccess],
    },
  },
};
