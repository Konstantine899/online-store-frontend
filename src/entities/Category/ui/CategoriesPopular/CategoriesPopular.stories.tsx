import type { Meta, StoryObj } from '@storybook/react';
import { CategoriesPopular } from './CategoriesPopular';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { handlers } from '@/shared/config/storybook/mocks/handlers';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './CategoriesPopular.module.scss';
import { Text } from '@/shared/ui/Text';
import { TextSize, TextTheme } from '@/shared/ui/Text/Text';
import { Carousel } from '@/shared/ui/Carousel/Carousel';
import { ICategory } from '../../model/types/ICategory';
import { Card } from '@/shared/ui/Card';
import { CardTheme } from '@/shared/ui/Card/Card';
import { KitImage } from '@/shared/ui/KitImage/KitImage';
import { getRouteImage } from '@/shared/consts/router/publicRouter';
import { categories } from '@/shared/config/storybook/mocks/mockData';
import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { fn } from '@storybook/test';

const store: DeepPartial<StateSchema> = {
  rtkApi: { provided: { categories: categories } },
};

const meta: Meta<typeof CategoriesPopular> = {
  title: 'entities/CategoriesPopular',
  component: CategoriesPopular,
  decorators: [StoreDecorator(store)],
};

export default meta;
type Story = StoryObj<typeof CategoriesPopular>;

export const One: Story = {
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
  parameters: { msw: { handlers: [handlers.categories] } },
};

export const Second: Story = {
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
  parameters: { msw: { handlers: [handlers.categories] } },
};

export const Infinite: Story = {
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
  parameters: { msw: { handlers: [handlers.categories] } },
};
