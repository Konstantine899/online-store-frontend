import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './EmailErrors.module.scss';
import { useSelector } from 'react-redux';
import { selectEmailErrors } from '../../model/selectors/selectAuth';
import { Text } from '@/shared/ui/Text';
import { TextTheme } from '@/shared/ui/Text/Text';

interface EmailErrorsProps {
  className?: string;
}

export const EmailErrors = memo((props: EmailErrorsProps) => {
  const { className } = props;
  const messages = useSelector(selectEmailErrors);

  return (
    <div className={classNames(cls.EmailErrors, {}, [className])}>
      {messages.map((message: string, index: number) => (
        <Text key={index} theme={TextTheme.ERROR} text={message} />
      ))}
    </div>
  );
});
