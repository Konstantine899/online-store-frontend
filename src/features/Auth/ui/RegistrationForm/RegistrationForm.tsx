


import { memo } from 'react';
import cls from './RegistrationForm.module.scss';


interface RegistrationFormProps {
className:string;
}

export const RegistrationForm = memo((props: RegistrationFormProps) => {
const { className } = props
  return <div className={classNames(cls.RegistrationForm, {}, [className])}>$END$</div>;
});

RegistrationForm.displayName = `RegistrationForm`;