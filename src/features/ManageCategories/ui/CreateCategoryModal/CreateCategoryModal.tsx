import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './CreateCategoryModal.module.scss';
import { Modal } from '@/shared/ui/Modal/Modal';
import { useSelector } from 'react-redux';
import { selectCreateCategoryModal } from '../../model/selectors/selectors';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { ManageCategoriesActions } from '../../model/slices/ManageCategoriesSlice';
import { Input, InputTheme } from '@/shared/ui/Input/Input';
import { Text } from '@/shared/ui/Text';
import { TextTheme } from '@/shared/ui/Text/Text';

export const CreateCategoryModal = memo(() => {
  const isOpen = useSelector(selectCreateCategoryModal);
  const dispatch = useAppDispatch();

  const onCloseModal = useCallback(() => {
    dispatch(ManageCategoriesActions.setOpenCreateCategoryModal(false));
  }, [dispatch]);

  return (
    <Modal
      className={classNames(cls.CreateCategoryModal, {}, [])}
      isOpen={isOpen}
      lazy={true}
      onClose={onCloseModal}
    >
      <div className={cls.CreateCategoryForm}>
        <Text title={'Создайте категорию'} theme={TextTheme.BLACK} />
        <Input
          type={'text'}
          placeholder={'Введите категорию'}
          theme={InputTheme.OUTLINE_BOTTOM}
        />
        <Input
          type={'file'}
          placeholder={'Загрузите файл'}
          theme={InputTheme.OUTLINE_BOTTOM}
        />
      </div>
    </Modal>
  );
});

CreateCategoryModal.displayName = `CreateCategoryModal`;
