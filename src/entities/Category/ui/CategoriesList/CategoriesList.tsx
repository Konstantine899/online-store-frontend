import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './CategoriesList.module.scss';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Overlay } from '@/shared/ui/Overlay';
import { ButtonClose } from '@/features/ButtonClose';
import { BurgerMenuItem } from '@/features/BurgerMenu/ui/BurgerMenuItem/BurgerMenuItem';
import { useSelector } from 'react-redux';
import { getCategoriesSelectors } from '../../model/selectors/getCategoriesSelectors';
import { Category } from '../../model/types/CategorySchema';
import { CategoryReducer } from '../../model/slices/CategorySlice';
import { CategoriesReducer } from '../../model/slices/CategoriesSlice';

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
