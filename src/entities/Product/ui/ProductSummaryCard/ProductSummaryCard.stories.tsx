import type { Meta, StoryObj } from '@storybook/react';
import { ProductSummaryCard } from './ProductSummaryCard';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { mockRating } from '@/shared/config/storybook/mocks/mockRating';
import { mockProduct } from '@/shared/config/storybook/mocks/mockProduct';
import { handlers } from '@/shared/config/storybook/mocks/handlers/handlers';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from '@/entities/Product/ui/ProductSummaryCard/ProductSummaryCard.module.scss';
import { Card, CardTheme } from '@/shared/ui/Card/Card';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';
import { Text } from '@/shared/ui/Text';
import { Star, StarSize } from '@/shared/ui/Star/Star';
import { Thumb, ThumbSize } from '@/shared/ui/Thumb/Thumb';
import { RatingReducer, transformVotes } from '@/entities/Rating';
import { TextTheme } from '@/shared/ui/Text/Text';
import { ReducersList } from '@/shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { ProductDetailsReducer } from '@/entities/Product';

const meta: Meta<typeof ProductSummaryCard> = {
  title: 'entities/ProductSummaryCard',
  component: ProductSummaryCard,
};

const reducers: ReducersList = {
  rating: RatingReducer,
  product: ProductDetailsReducer,
};

export default meta;
type Story = StoryObj<typeof ProductSummaryCard>;

export const Primary: Story = {
  args: {},
  render: () => (
    <Card
      className={classNames(cls.ProductSummaryCard, {}, [])}
      theme={CardTheme.OUTLINED}
    >
      <div className={cls.upp}>
        <p className={cls.price}>{`Цена:${mockProduct.price}`}</p>
      </div>
      <div className={cls.down}>
        <Button theme={ButtonTheme.FILLED} size={ButtonSize.M} fullWidth>
          В корзину
        </Button>
        <div className={cls.bottom}>
          <div className={cls.RatingWrapper}>
            <Text theme={TextTheme.YELLOW} text={`${mockRating.rating}`} />
            <Star size={StarSize.S} isZero={false} />
          </div>
          <div className={cls.VotesWrapper}>
            <Thumb size={ThumbSize.M} />
            <Text
              text={transformVotes(`${mockRating.votes}`)}
              theme={TextTheme.GRAY}
            />
          </div>
        </div>
      </div>
    </Card>
  ),
  decorators: [
    StoreDecorator(
      {
        rating: { rating: mockRating, isLoading: false },
        product: mockProduct,
      },
      reducers,
    ),
  ],
  parameters: { msw: { handlers: [handlers.handlerRating.getRating] } },
};
