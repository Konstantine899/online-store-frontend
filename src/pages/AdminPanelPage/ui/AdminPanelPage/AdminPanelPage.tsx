import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import cls from './AdminPanelPage.module.scss';
import { Button } from '@/shared/ui/Button';
import { Text } from '@/shared/ui/Text';
import { TextAlign, TextSize, TextTheme } from '@/shared/ui/Text/Text';
import {
  CreateCategoryModal,
  ManageCategoriesActions,
} from '@/features/ManageCategories';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';

interface AdminPanelPageProps {
  className?: string;
}

export const AdminPanelPage = memo((props: AdminPanelPageProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();

  const onShowModal = useCallback(() => {
    dispatch(ManageCategoriesActions.setOpenCreateCategoryModal(true));
  }, [dispatch]);

  return (
    <div className={classNames(cls.controls, {}, [className])}>
      <div className={classNames(cls.control_group, {}, [])}>
        <Text
          title={'Категории'}
          theme={TextTheme.BLACK}
          size={TextSize.L}
          align={TextAlign.CENTER}
          className={cls.title}
        />
        <Button fullWidth onClick={onShowModal}>
          Создать категорию
        </Button>
        <Button fullWidth>Редактировать категорию</Button>
        <Button fullWidth>Удалить категорию</Button>
      </div>
      <div className={classNames(cls.control_group, {}, [])}>
        <Text
          title={'Бренды'}
          theme={TextTheme.BLACK}
          size={TextSize.L}
          align={TextAlign.CENTER}
          className={cls.title}
        />
        <Button fullWidth>Создать Бренд</Button>
        <Button fullWidth>Редактировать Бренд</Button>
        <Button fullWidth>Удалить Бренд</Button>
      </div>
      <div className={classNames(cls.control_group, {}, [])}>
        <Text
          title={'Продукт'}
          theme={TextTheme.BLACK}
          size={TextSize.L}
          align={TextAlign.CENTER}
          className={cls.title}
        />
        <Button fullWidth>Создать Продукт</Button>
        <Button fullWidth>Редактировать Продукт</Button>
        <Button fullWidth>Удалить Продукт</Button>
      </div>
      <div className={classNames(cls.control_group, {}, [])}>
        <Text
          title={'Свойства Продукта'}
          theme={TextTheme.BLACK}
          size={TextSize.L}
          align={TextAlign.CENTER}
          className={cls.title}
        />
        <Button fullWidth>Создать свойство Продукта</Button>
        <Button fullWidth>Редактировать свойство Продукта</Button>
        <Button fullWidth>Удалить свойство Продукта</Button>
      </div>
      <div className={classNames(cls.control_group, {}, [])}>
        <Text
          title={'Пользователи'}
          theme={TextTheme.BLACK}
          size={TextSize.L}
          align={TextAlign.CENTER}
          className={cls.title}
        />
        <Button fullWidth>Создать пользователя</Button>
        <Button fullWidth>Добавление роли пользователю</Button>
        <Button fullWidth>Удаление роли пользователю</Button>
        <Button fullWidth>Получение списка всех пользователей</Button>
        <Button fullWidth>Получение пользователя по идентификатору</Button>
        <Button fullWidth>Редактировать пользователя</Button>
        <Button fullWidth>Удалить пользователя</Button>
      </div>
      <div className={classNames(cls.control_group, {}, [])}>
        <Text
          title={'Роли пользователя'}
          theme={TextTheme.BLACK}
          size={TextSize.L}
          align={TextAlign.CENTER}
          className={cls.title}
        />
        <Button fullWidth>Создать роль</Button>
        <Button fullWidth>Удалить роль</Button>
      </div>
      <div className={classNames(cls.control_group, {}, [])}>
        <Text
          title={'Заказы'}
          theme={TextTheme.BLACK}
          size={TextSize.L}
          align={TextAlign.CENTER}
          className={cls.title}
        />
        <Button fullWidth>Получение списка всех заказов</Button>
        <Button fullWidth>Получение списка заказов пользователя</Button>
        <Button fullWidth>Создание заказа</Button>
        <Button fullWidth>Удаление заказа</Button>
      </div>
      <CreateCategoryModal />
    </div>
  );
});
