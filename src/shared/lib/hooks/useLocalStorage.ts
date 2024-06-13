import { useState } from 'react';

export function useLocalStorage(key: string, value: any) {
  const [storage, setStorage] = useState(() => {
    try {
      const valueFomStorage = window.localStorage.getItem(key);
      if (valueFomStorage) return JSON.parse(valueFomStorage);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      return value;
    }
  });

  const setValue = (newValue: any) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(newValue));
    } catch (error) {
      setStorage(newValue);
    }
  };
  return [storage, setValue];
}
