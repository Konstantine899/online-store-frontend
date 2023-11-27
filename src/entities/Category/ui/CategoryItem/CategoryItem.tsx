import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './CategoryItem.module.scss';
import { AppLink } from '@/shared/ui/AppLink';
import { ICategoryItem } from '../../model/types/ICategoryItem';
import { CategoryIcon } from '../CategoryIcon/CategoryIcon';

interface CategoryProps {
  className?: string;
  item?: ICategoryItem;
}

export const CategoryItem = memo((props: CategoryProps) => {
  const { className, item } = props;
  return (
    <AppLink to={`/category/one/${item.id}`}>
      <li className={classNames(cls.CategoryItem, {}, [className])}>
        <CategoryIcon itemName={item.name} />
        {item.name}
      </li>
    </AppLink>
  );
});
