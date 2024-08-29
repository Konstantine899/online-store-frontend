import type { Meta, StoryObj } from '@storybook/react';
import { CategoriesBurgerMenu } from './CategoriesBurgerMenu';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { handlers } from '@/shared/config/storybook/mocks/handlers/handlers';

const meta: Meta<typeof CategoriesBurgerMenu> = {
  title: 'entities/CategoriesBurgerMenu',
  component: CategoriesBurgerMenu,
  decorators: [StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof CategoriesBurgerMenu>;

export const Primary: Story = {
  args: {},
  render: () => <CategoriesBurgerMenu />,
  parameters: {
    backgrounds: {
      default: 'monochrome-violet',
      values: [{ name: 'monochrome-violet', value: '#481173' }],
    },
    msw: { handlers: [handlers.handlerCategory.categories] },
  },
};
