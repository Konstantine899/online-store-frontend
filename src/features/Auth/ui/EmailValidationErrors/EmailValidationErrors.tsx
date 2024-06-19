import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './EmailValidationErrors.module.scss';
import { useSelector } from 'react-redux';
import { selectEmailValidationErrors } from '../../model/selectors/selectAuth';
import { Text } from '@/shared/ui/Text';
import { TextTheme } from '@/shared/ui/Text/Text';

interface EmailErrorsProps {
  className?: string;
}

export const EmailValidationErrors = memo((props: EmailErrorsProps) => {
  const { className } = props;
  const messages = useSelector(selectEmailValidationErrors);

  return (
    <div className={classNames(cls.EmailValidationErrors, {}, [className])}>
      {messages.map((message: string, index: number) => (
        <Text
          key={index}
          theme={TextTheme.ERROR}
          text={message}
          className={cls.message}
        />
      ))}
    </div>
  );
});

EmailValidationErrors.displayName = 'EmailValidationErrors';
