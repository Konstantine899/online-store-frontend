import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './RegistrationForm.module.scss';
import { Button } from '@/shared/ui/Button';

interface RegistrationFormProps {
  className?: string;
}

export const RegistrationForm = memo((props: RegistrationFormProps) => {
  const { className } = props;

  return (
    <div className={classNames(cls.RegistrationForm, {}, [className])}>
      <input type="text" className={cls.input} />
      <input type="text" className={cls.input} />
      <Button className={cls.Btn}>Регистрация</Button>
    </div>
  );
});
