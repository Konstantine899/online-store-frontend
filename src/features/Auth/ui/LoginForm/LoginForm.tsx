import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './LoginForm.module.scss';
import { Button } from '@/shared/ui/Button';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo((props: LoginFormProps) => {
  const { className } = props;

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <input type="text" className={cls.input} />
      <input type="text" className={cls.input} />
      <Button className={cls.Btn}>Войти</Button>
    </div>
  );
});
