import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useState } from 'react';
import cls from './RegistrationForm.module.scss';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input/Input';

interface RegistrationFormProps {
  className?: string;
}

export const RegistrationForm = memo((props: RegistrationFormProps) => {
  const { className } = props;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeEmail = (value: string) => {
    setEmail(value);
  };

  const onChangePassword = (value: string) => {
    setPassword(value);
  };

  return (
    <div className={classNames(cls.RegistrationForm, {}, [className])}>
      <Input
        type="text"
        className={cls.input}
        value={email}
        onChange={onChangeEmail}
      />
      <Input
        type="text"
        className={cls.input}
        value={password}
        onChange={onChangePassword}
      />
      <Button className={cls.Btn}>Регистрация</Button>
    </div>
  );
});
