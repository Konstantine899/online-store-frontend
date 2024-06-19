import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useState } from 'react';
import cls from './PasswordInput.module.scss';
import { useSelector } from 'react-redux';
import { selectPassword } from '../../model/selectors/selectAuth';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import EyeOpen from '@/shared/assets/icons/eye-open.svg';
import EyeClosed from '@/shared/assets/icons/closed_eye.svg';
import { AuthActions } from '../../model/slices/AuthSlice';
import { Input, InputTheme } from '@/shared/ui/Input/Input';

interface PasswordInputProps {
  className?: string;
}

export const PasswordInput = memo((props: PasswordInputProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const password = useSelector(selectPassword);

  const [viewPassword, setViewPassword] = useState(false);

  const onViewPassword = () => {
    setViewPassword(!viewPassword);
  };

  const eyeSvgIcon = viewPassword ? EyeOpen : EyeClosed;

  const onChangePassword = (password: string) => {
    dispatch(AuthActions.setPassword(password));
  };

  return (
    <div className={classNames(cls.PasswordInput, {}, [className])}>
      <Input
        type={viewPassword ? 'text' : 'password'}
        label={'пароль'}
        htmlFor={'password'}
        value={password}
        required
        onChange={onChangePassword}
        Svg={eyeSvgIcon}
        onViewPassword={onViewPassword}
        theme={InputTheme.OUTLINE_BOTTOM}
      />
    </div>
  );
});

PasswordInput.displayName = `PasswordInput`;
