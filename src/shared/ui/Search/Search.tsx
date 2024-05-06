import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Search.module.scss';
import { useDebounce } from '@/shared/lib/hooks/useDebounce';
import { Input, InputTheme } from '../Input/Input';

interface SearchProps {
  className?: string;
  fetchData: () => void;
  onSearch: (value: string) => void;
  search: string;
  navigate?: () => void;
  placeholder: string;
}

export const Search = memo((props: SearchProps) => {
  const { className, onSearch, fetchData, search, navigate, placeholder } =
    props;

  const onFetchData = () => {
    navigate?.();
    fetchData?.();
  };

  const debounce = useDebounce(onFetchData, 1000);

  const onChangeSearch = (value: string) => {
    onSearch?.(value);
    debounce();
  };

  return (
    <Input
      type={'text'}
      className={classNames(cls.InputSearch, {}, [className])}
      value={search}
      onChange={onChangeSearch}
      theme={InputTheme.WITHOUT_OUTLINE}
      placeholder={placeholder}
    />
  );
});
