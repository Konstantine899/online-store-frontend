import { classNames } from '@/shared/lib/classNames/classNames';
import {
  memo,
  MutableRefObject,
  ReactNode,
  UIEvent,
  useEffect,
  useRef,
  useState,
} from 'react';
import cls from './Page.module.scss';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { ScrollActions, selectScrollPosition } from '@/entities/Scroll';
import { useLocation } from 'react-router';
import { useSelector } from 'react-redux';
import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect';
import { useThrottle } from '@/shared/lib/hooks/useThrottle';

interface PageProps {
  className?: string;
  children?: ReactNode;
}

export const Page = memo((props: PageProps) => {
  const { className, children } = props;
  const { pathname, key } = useLocation();
  const ref = useRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement>;
  const dispatch = useAppDispatch();
  const scrollPosition = useSelector((state: StateSchema) =>
    selectScrollPosition(state, pathname),
  );

  const [pathKey, setPathKey] = useState(key);

  // Сбрасываю позицию scroll при переходе на другую категорию
  useEffect(() => {
    if (pathKey !== key) {
      setPathKey(key);
      ref.current.scrollTop = 0;
    }
  }, [key, pathKey]);

  // восстанавливаю позицию scroll после перезагрузки страницы
  useInitialEffect(() => {
    const position = setTimeout(() => {
      ref.current.scrollTo({ top: scrollPosition, behavior: 'smooth' });
      ref.current.scrollTop = scrollPosition;
    }, 500);
    return () => clearTimeout(position);
  });

  const onScroll = useThrottle((event: UIEvent<HTMLDivElement>) => {
    dispatch(
      ScrollActions.setScrollPosition({
        path: pathname,
        position: event.currentTarget.scrollTop,
      }),
    );
  }, 500);

  return (
    <main
      className={classNames(cls.Page, {}, [className])}
      ref={ref}
      onScroll={onScroll}
    >
      {children}
    </main>
  );
});

Page.displayName = `Page`;
