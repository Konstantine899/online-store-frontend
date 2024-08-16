import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './CategoriesList.module.scss';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { Overlay } from '@/shared/ui/Overlay';
import { CategoriesButtonClose } from '../CategoriesButtonClose/CategoriesButtonClose';
import { CategoriesBurgerMenuItem } from '../CategoriesBurgerMenuItem/CategoriesBurgerMenuItem';
import { ICategory } from '../../model/types/ICategory';
import { categoryReducers } from '../../model/slices';
import { useCategories } from '../../api/categoryApi';
import { CategoriesListSkeleton } from '@/entities/Category/ui/CategoriesListSkeleton/CategoriesListSkeleton';

const asyncCategoryListReducer: ReducersList = {
  category: categoryReducers,
};

interface CategoryProps {
  className?: string;
  isOpen: boolean;
  isClose: boolean;
  onClose: () => void;
}

export const CategoriesList = memo((props: CategoryProps) => {
  const { className, isOpen, onClose, isClose } = props;

  const { isLoading, isSuccess, data: categories } = useCategories();

  if (isLoading) {
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
              {Array(10)
                .fill(0)
                .map((_, index) => (
                  <CategoriesListSkeleton key={index} />
                ))}
            </ul>
          </div>
        </div>
      </DynamicModuleLoader>
    );
  }

  if (isSuccess) {
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
              {categories?.map((item: ICategory) => (
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
  }
});

CategoriesList.displayName = `CategoriesList`;
