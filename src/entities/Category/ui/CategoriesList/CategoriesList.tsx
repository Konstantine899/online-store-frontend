import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './CategoriesList.module.scss';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Overlay } from '@/shared/ui/Overlay';
import { CategoriesButtonClose } from '../CategoriesButtonClose/CategoriesButtonClose';
import { CategoriesBurgerMenuItem } from '../CategoriesBurgerMenuItem/CategoriesBurgerMenuItem';
import { useSelector } from 'react-redux';
import { getAllCategoriesSelector } from '../../model/selectors/getAllCategoriesSelector';
import { FilteringByCategoryIdReducer } from '../../model/slices/FilteringByCategoryIdSlice';
import { CategoriesReducer } from '../../model/slices/CategoriesSlice';
import { ICategory } from '../../model/types/ICategory';

const asyncCategoryListReducer: ReducersList = {
  categoriesList: CategoriesReducer,
  filteringCategory: FilteringByCategoryIdReducer,
};

interface CategoryProps {
  className?: string;
  isOpen?: boolean;
  isClose?: boolean;
  onClose?: () => void;
}

export const CategoriesList = memo((props: CategoryProps) => {
  const { className, isOpen, onClose, isClose } = props;

  const categories: ICategory[] = useSelector(getAllCategoriesSelector);

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
        <CategoriesButtonClose
          className={cls.BurgerMenuButtonClose}
          onClose={onClose}
        >
          Закрыть меню
        </CategoriesButtonClose>
        <div className={cls.burgerMenuContent}>
          <ul>
            {categories?.map((item) => (
              <CategoriesBurgerMenuItem
                key={item.id}
                item={item}
                onClose={onClose}
              />
            ))}
          </ul>
        </div>
      </div>
    </DynamicModuleLoader>
  );
});
