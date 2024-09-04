import type { Meta, StoryObj } from '@storybook/react';
import { ProductsByCategoryAndBrandCount } from './ProductsByCategoryAndBrandCount';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ProductsByCategoryAndBrandCount.module.scss';
import { Text } from '@/shared/ui/Text';
import { TextSize, TextTheme } from '@/shared/ui/Text/Text';

const meta: Meta<typeof ProductsByCategoryAndBrandCount> = {
  title: 'entities/ProductsByCategoryAndBrandCount',
  component: ProductsByCategoryAndBrandCount,
};

export default meta;
type Story = StoryObj<typeof ProductsByCategoryAndBrandCount>;

export const Primary: Story = {
  args: {},
  render: () => (
    <div className={classNames(cls.ProductsByCategoryAndBrandCount, {}, [])}>
      <Text text={`Смартфоны`} theme={TextTheme.BLACK} size={TextSize.XL} />
      <Text text={`(10)`} theme={TextTheme.BLACK} size={TextSize.XL} />
    </div>
  ),
};
