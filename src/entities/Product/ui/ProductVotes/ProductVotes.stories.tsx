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

export const One: Story = {
  args: {},
  render: () => <ProductVotes />,
  parameters: { msw: { handlers: [handlers.handlerVotes.voteOne] } },
};

export const OneHundred: Story = {
  args: {},
  render: () => <ProductVotes />,
  parameters: { msw: { handlers: [handlers.handlerVotes.votesOneHundred] } },
};

export const Thousand: Story = {
  args: {},
  render: () => <ProductVotes />,
  parameters: { msw: { handlers: [handlers.handlerVotes.votesThousand] } },
};

export const TenThousand: Story = {
  args: {},
  render: () => <ProductVotes />,
  parameters: { msw: { handlers: [handlers.handlerVotes.votesTenThousand] } },
};

export const OneHundredThousand: Story = {
  args: {},
  render: () => <ProductVotes />,
  parameters: {
    msw: { handlers: [handlers.handlerVotes.votesOneHundredThousand] },
  },
};

export const Million: Story = {
  args: {},
  render: () => <ProductVotes />,
  parameters: {
    msw: { handlers: [handlers.handlerVotes.votesMillion] },
  },
};

export const TenMillion: Story = {
  args: {},
  render: () => <ProductVotes />,
  parameters: {
    msw: { handlers: [handlers.handlerVotes.votesTenMillion] },
  },
};

export const OneHundredMillion: Story = {
  args: {},
  render: () => <ProductVotes />,
  parameters: {
    msw: { handlers: [handlers.handlerVotes.votesOneHundredMillion] },
  },
};
