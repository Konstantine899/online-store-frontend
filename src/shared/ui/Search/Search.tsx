import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Search.module.scss';
import { useDebounce } from '@/shared/lib/hooks/useDebounce';
import { Input, InputTheme } from '../Input/Input';

interface SearchProps {
  className?: string;
  fetchData: () => void;
  onSearch: (value: string) => void;
  theme: InputTheme;
  search: string;
  placeholder: string;
}

export const Search = memo((props: SearchProps) => {
  const { className, onSearch, fetchData, search, placeholder, theme } = props;

  const onFetchData = () => {
    fetchData?.();
  };

  const debounce = useDebounce(onFetchData, 1000);

  const onChangeSearch = (value: string) => {
    onSearch(value);
    debounce();
  };

  return (
    <Input
      type={'text'}
      className={classNames(cls.InputSearch, {}, [className])}
      value={search}
      onChange={onChangeSearch}
      theme={theme}
      placeholder={placeholder}
    />
  );
});
