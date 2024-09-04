import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ValidationEmail.module.scss';
import { useSelector } from 'react-redux';
import { selectValidateEmail } from '../../model/selectors/selectAuth';
import { Text } from '@/shared/ui/Text';
import { TextTheme } from '@/shared/ui/Text/Text';

interface ValidationEmailProps {
  className?: string;
}

export const ValidationEmail = memo((props: ValidationEmailProps) => {
  const { className } = props;
  const messages = useSelector(selectValidateEmail);

  return (
    <div className={classNames(cls.ValidationEmail, {}, [className])}>
      {messages?.map((message: string, index: number) => (
        <Text
          key={index}
          theme={TextTheme.RED}
          text={message}
          className={cls.message}
        />
      ))}
    </div>
  );
});

ValidationEmail.displayName = 'ValidationEmail';
