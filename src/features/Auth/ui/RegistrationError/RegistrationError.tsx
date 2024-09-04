import { memo } from 'react';
import cls from './RegistrationError.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { selectAuthError } from '../../model/selectors/selectAuth';
import { Text } from '@/shared/ui/Text';
import { TextAlign, TextSize, TextTheme } from '@/shared/ui/Text/Text';

interface RegistrationErrorProps {
  className?: string;
}

export const RegistrationError = memo((props: RegistrationErrorProps) => {
  const { className } = props;

  const error = useSelector(selectAuthError);

  return (
    <div className={classNames(cls.RegistrationError, {}, [className])}>
      <Text
        theme={TextTheme.RED}
        text={error?.message}
        size={TextSize.L}
        align={TextAlign.CENTER}
      />
    </div>
  );
});

RegistrationError.displayName = `RegistrationError`;
