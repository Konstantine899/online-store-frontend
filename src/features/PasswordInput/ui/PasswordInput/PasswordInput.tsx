import { memo, useState } from 'react';
import { Input } from '@/shared/ui/Input/Input';
import EyeClosed from '@/shared/assets/icons/closed_eye.svg';
import EyeOpen from '@/shared/assets/icons/eye-open.svg';

interface PasswordInputProps {
  password?: string;
  onChangePassword?: (value: string) => void;
}

export const PasswordInput = memo((props: PasswordInputProps) => {
  const { password, onChangePassword } = props;
  const [isViewPassword, setIsViewPassword] = useState(false);

  const onViewPassword = () => {
    setIsViewPassword(!isViewPassword);
  };

  const eyeSvgIcon = isViewPassword ? EyeOpen : EyeClosed;
  return (
    <Input
      type={isViewPassword ? 'text' : 'password'}
      value={password}
      onChange={onChangePassword}
      placeholder={'Пароль'}
      Svg={eyeSvgIcon}
      onViewPassword={onViewPassword}
    />
  );
});
