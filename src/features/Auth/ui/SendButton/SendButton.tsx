import { memo, useCallback } from 'react';
import cls from './SendButton.module.scss';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { useSelector } from 'react-redux';
import { selectEmail, selectPassword } from '../../model/selectors/selectAuth';

interface SendButtonProps {
  isLoading: boolean;
  fetch: ({ email, password }: { email: string; password: string }) => void;
}

export const SendButton = memo((props: SendButtonProps) => {
  const { isLoading, fetch } = props;
  const email = useSelector(selectEmail);
  const password = useSelector(selectPassword);

  const onClick = useCallback(() => {
    fetch({ email, password });
  }, [email, fetch, password]);

  return (
    <Button
      className={cls.SendButton}
      theme={ButtonTheme.OUTLINE}
      disabled={isLoading}
      onClick={onClick}
    >
      Войти
    </Button>
  );
});
