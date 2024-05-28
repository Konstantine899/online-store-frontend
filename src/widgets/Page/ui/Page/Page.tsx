import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, MutableRefObject, ReactNode, UIEvent, useRef } from 'react';
import cls from './Page.module.scss';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import {
  getScrollPositionByPathSelector,
  ScrollActions,
} from '@/features/Scroll';
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
  const { pathname } = useLocation();
  const ref = useRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement>;
  const dispatch = useAppDispatch();
  const scrollPosition = useSelector((state: StateSchema) =>
    getScrollPositionByPathSelector(state, pathname),
  );

  useInitialEffect(() => {
    ref.current.scrollTop = scrollPosition;
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
