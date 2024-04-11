import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Search.module.scss';
import { useDebounce } from '@/shared/lib/hooks/useDebounce';
import { Input, InputTheme } from '../Input/Input';

interface SearchProps {
  className?: string;
  onValue: () => void;
  onSearch: (value: string) => void;
  search: string;
}

export const Search = memo((props: SearchProps) => {
  const { className, onSearch, onValue, search } = props;

  const onValueHandler = () => {
    onValue?.();
  };

  const debounce = useDebounce(onValueHandler, 1000);

  const onSearchHandler = (value: string) => {
    onSearch?.(value);
    debounce();
  };

  return (
    <Input
      type={'text'}
      className={classNames(cls.InputSearch, {}, [className])}
      value={search}
      onChange={onSearchHandler}
      theme={InputTheme.OUTLINED}
    />
  );
});
