import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './PasswordValidationErrors.module.scss';
import { useSelector } from 'react-redux';
import { selectPasswordValidationErrors } from '../../model/selectors/selectAuth';
import { Text } from '@/shared/ui/Text';
import { TextTheme } from '@/shared/ui/Text/Text';

interface PasswordValidationErrorsProps {
  className?: string;
}

export const PasswordValidationErrors = memo(
  (props: PasswordValidationErrorsProps) => {
    const { className } = props;
    const messages = useSelector(selectPasswordValidationErrors);

    return (
      <div
        className={classNames(cls.PasswordValidationErrors, {}, [className])}
      >
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
  },
);
