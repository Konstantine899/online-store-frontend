import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './InputEmail.module.scss';
import { Input, InputTheme } from '@/shared/ui/Input/Input';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { selectEmail } from '../../model/selectors/selectAuth';
import { AuthActions } from '../../model/slices/AuthSlice';

interface InputEmailProps {
  className?: string;
}

export const InputEmail = memo((props: InputEmailProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const email = useSelector(selectEmail);

  const onChangeEmail = (email: string) => {
    dispatch(AuthActions.setEmail(email));
  };

  return (
    <div className={classNames(cls.InputEmail, {}, [className])}>
      <Input
        type="text"
        label={'email'}
        htmlFor={'email'}
        value={email}
        required
        onChange={onChangeEmail}
        theme={InputTheme.OUTLINE_BOTTOM}
      />
    </div>
  );
});

InputEmail.displayName = `InputEmail`;
