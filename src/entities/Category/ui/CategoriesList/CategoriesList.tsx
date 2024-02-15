import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './CategoriesList.module.scss';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { CategoriesReducer } from '@/entities/Category/model/slices/CategoriesSlice';
import { Overlay } from '@/shared/ui/Overlay';
import { ButtonClose } from '@/features/ButtonClose';
import { BurgerMenuItem } from '@/features/BurgerMenu/ui/BurgerMenuItem/BurgerMenuItem';
import { Category } from '@/entities/Category/model/types/CategorySchema';
import { useSelector } from 'react-redux';
import { getCategoriesSelectors } from '@/entities/Category/model/selectors/getCategoriesSelectors';
import { CategoryReducer } from '@/entities/Category/model/slices/CategorySlice';

const asyncCategoryListReducer: ReducersList = {
  categoriesList: CategoriesReducer,
  category: CategoryReducer,
};

interface CategoryProps {
  className?: string;
  isOpen?: boolean;
  isClose?: boolean;
  onClose?: () => void;
}

export const CategoriesList = memo((props: CategoryProps) => {
  const { className, isOpen, onClose, isClose } = props;

  const categories: Category[] = useSelector(getCategoriesSelectors);

  return (
    <DynamicModuleLoader reducers={asyncCategoryListReducer}>
      <div
        className={classNames(
          cls.CategoriesList,
          {
            [cls.opened]: isOpen,
            [cls.closed]: isClose,
          },
          [className],
        )}
      >
        <Overlay onClose={onClose} />
        <ButtonClose className={cls.BurgerMenuButtonClose} onClose={onClose}>
          Закрыть меню
        </ButtonClose>
        <div className={cls.burgerMenuContent}>
          <ul>
            {categories?.map((item) => (
              <BurgerMenuItem key={item.id} item={item} onClose={onClose} />
            ))}
          </ul>
        </div>
      </div>
    </DynamicModuleLoader>
  );
});
