import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ValidationPassword.module.scss';
import { useSelector } from 'react-redux';
import { selectValidatePassword } from '../../model/selectors/selectAuth';
import { Text } from '@/shared/ui/Text';
import { TextTheme } from '@/shared/ui/Text/Text';

interface ValidationPasswordProps {
  className?: string;
}

export const ValidationPassword = memo((props: ValidationPasswordProps) => {
  const { className } = props;
  const messages = useSelector(selectValidatePassword);

  return (
    <div className={classNames(cls.ValidationPassword, {}, [className])}>
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

ValidationPassword.displayName = `ValidationPassword`;
