import type { Meta, StoryObj } from '@storybook/react';
import { CategoriesList } from './CategoriesList';
import { handlers } from '@/shared/config/storybook/mocks/handlers';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { fn } from '@storybook/test';

const meta: Meta<typeof CategoriesList> = {
  title: 'entities/CategoriesList',
  component: CategoriesList,
  decorators: [StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof CategoriesList>;

export const FetchCategories: Story = {
  args: {
    isClose: false,
    isOpen: true,
    className: '',
    onClose: fn(),
  },
  render: (args) => <CategoriesList {...args} />,
  parameters: { msw: { handlers: [handlers.categories] } },
};
