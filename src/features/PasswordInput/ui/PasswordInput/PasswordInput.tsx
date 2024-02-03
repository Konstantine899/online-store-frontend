import { memo, useState } from 'react';
import { Input, InputTheme } from '@/shared/ui/Input/Input';
import EyeClosed from '@/shared/assets/icons/closed_eye.svg';
import EyeOpen from '@/shared/assets/icons/eye-open.svg';

interface PasswordInputProps {
  label?: string;
  htmlFor?: string;
  password?: string;
  onChangePassword?: (value: string) => void;
}

export const PasswordInput = memo((props: PasswordInputProps) => {
  const { password, onChangePassword, htmlFor, label } = props;
  const [isViewPassword, setIsViewPassword] = useState(false);

  const onViewPassword = () => {
    setIsViewPassword(!isViewPassword);
  };

  const eyeSvgIcon = isViewPassword ? EyeOpen : EyeClosed;
  return (
    <Input
      type={isViewPassword ? 'text' : 'password'}
      label={label}
      htmlFor={htmlFor}
      value={password}
      required
      onChange={onChangePassword}
      Svg={eyeSvgIcon}
      onViewPassword={onViewPassword}
      theme={InputTheme.STANDARD}
    />
  );
});
