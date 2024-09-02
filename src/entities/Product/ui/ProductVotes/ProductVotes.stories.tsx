import type { Meta, StoryObj } from '@storybook/react';
import { ProductVotes } from './ProductVotes';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { handlers } from '@/shared/config/storybook/mocks/handlers/handlers';
import { ReducersList } from '@/shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { RatingReducer } from '@/entities/Rating';

const reducers: ReducersList = {
  rating: RatingReducer,
};

const meta: Meta<typeof ProductVotes> = {
  title: 'entities/ProductVotes',
  component: ProductVotes,
  decorators: [
    StoreDecorator(
      {
        rating: {
          rating: { rating: 5, ratingsSum: 5, votes: 1 },
          isLoading: false,
        },
      },
      reducers,
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ProductVotes>;

export const Primary: Story = {
  args: {},
  render: () => <ProductVotes />,
  parameters: { msw: { handlers: [handlers.handlerRating.rating] } },
};
