import type { Meta, StoryObj } from '@storybook/react';
import { CategoriesPopular } from './CategoriesPopular';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { handlers } from '@/shared/config/storybook/mocks/handlers/handlers';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './CategoriesPopular.module.scss';
import { Text } from '@/shared/ui/Text';
import { TextSize, TextTheme } from '@/shared/ui/Text/Text';
import { Carousel } from '@/shared/ui/Carousel/Carousel';
import { ICategory } from '../../model/types/ICategory';
import { Card } from '@/shared/ui/Card';
import { CardTheme } from '@/shared/ui/Card/Card';
import { categories } from '@/shared/config/storybook/mocks/mockData';
import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { fn } from '@storybook/test';
import { Skeleton } from '@/shared/ui/Skeleton';

const store: DeepPartial<StateSchema> = {
  rtkApi: { provided: { categories: categories } },
};

const meta: Meta<typeof CategoriesPopular> = {
  title: 'entities/CategoriesPopular',
  component: CategoriesPopular,
  decorators: [StoreDecorator(store)],
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<typeof CategoriesPopular>;

export const OnePending: Story = {
  args: {},
  render: ({ className }) => (
    <div className={classNames(cls.CategoriesPopular, {}, [className])}>
      <Skeleton width={400} height={40} borderRadius={'10px'} />
      <Carousel elementsQuantity={1} infinite={true} isLoading>
        {Array(1)
          .fill(1)
          .map((_, index: number) => (
            <Skeleton
              height={158}
              borderRadius={'10px'}
              key={index}
              className={cls.CardSkeleton}
            />
          ))}
      </Carousel>
    </div>
  ),
  parameters: { msw: { handlers: [handlers.handlerCategory.categories] } },
};

export const OneSuccess: Story = {
  args: {},
  render: ({ className }) => (
    <div className={classNames(cls.CategoriesPopular, {}, [className])}>
      <Text
        title={'Популярные категории'}
        theme={TextTheme.INVERTED}
        size={TextSize.XL}
      />
      <Carousel elementsQuantity={1} infinite={false}>
        {categories.map((category: ICategory) => (
          <Card
            key={category.id}
            theme={CardTheme.OUTLINED}
            className={cls.CategoryCard}
            onClick={fn()}
          >
            <img
              src={category.image}
              height={77}
              width={120}
              className={cls.image}
            />
            <div>
              <p>{category.name}</p>
            </div>
          </Card>
        ))}
      </Carousel>
    </div>
  ),
  parameters: { msw: { handlers: [handlers.handlerCategory.categories] } },
};

export const SecondPending: Story = {
  args: {},
  render: ({ className }) => (
    <div className={classNames(cls.CategoriesPopular, {}, [className])}>
      <Skeleton width={400} height={40} borderRadius={'10px'} />
      <Carousel elementsQuantity={2} infinite={true} isLoading>
        {Array(2)
          .fill(1)
          .map((_, index: number) => (
            <Skeleton
              width={251}
              height={158}
              borderRadius={'10px'}
              key={index}
              className={cls.CardSkeleton}
            />
          ))}
      </Carousel>
    </div>
  ),
  parameters: { msw: { handlers: [handlers.handlerCategory.categories] } },
};

export const SecondSuccess: Story = {
  args: {},
  render: ({ className }) => (
    <div className={classNames(cls.CategoriesPopular, {}, [className])}>
      <Text
        title={'Популярные категории'}
        theme={TextTheme.INVERTED}
        size={TextSize.XL}
      />
      <Carousel elementsQuantity={2} infinite={false}>
        {categories.map((category: ICategory) => (
          <Card
            key={category.id}
            theme={CardTheme.OUTLINED}
            className={cls.CategoryCard}
            onClick={fn()}
          >
            <img
              src={category.image}
              height={77}
              width={120}
              className={cls.image}
            />
            <div>
              <p>{category.name}</p>
            </div>
          </Card>
        ))}
      </Carousel>
    </div>
  ),
  parameters: { msw: { handlers: [handlers.handlerCategory.categories] } },
};

export const InfinitePending: Story = {
  args: {},
  render: ({ className }) => (
    <div className={classNames(cls.CategoriesPopular, {}, [className])}>
      <Skeleton width={400} height={40} borderRadius={'10px'} />
      <Carousel elementsQuantity={4} infinite={true} isLoading>
        {Array(6)
          .fill(1)
          .map((_, index: number) => (
            <Skeleton
              width={251}
              height={158}
              borderRadius={'10px'}
              key={index}
              className={cls.CardSkeleton}
            />
          ))}
      </Carousel>
    </div>
  ),
  parameters: { msw: { handlers: [handlers.handlerCategory.categories] } },
};

export const InfiniteSuccess: Story = {
  args: {},
  render: ({ className }) => (
    <div className={classNames(cls.CategoriesPopular, {}, [className])}>
      <Text
        title={'Популярные категории'}
        theme={TextTheme.INVERTED}
        size={TextSize.XL}
      />
      <Carousel elementsQuantity={4} infinite>
        {categories.map((category: ICategory) => (
          <Card
            key={category.id}
            theme={CardTheme.OUTLINED}
            className={cls.CategoryCard}
            onClick={fn()}
          >
            <img
              src={category.image}
              height={77}
              width={120}
              className={cls.image}
            />
            <div>
              <p>{category.name}</p>
            </div>
          </Card>
        ))}
      </Carousel>
    </div>
  ),
  parameters: { msw: { handlers: [handlers.handlerCategory.categories] } },
};
