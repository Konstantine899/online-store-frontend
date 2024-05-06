import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import cls from './Tabs.module.scss';
import { Card, CardTheme } from '../Card/Card';
import { AppLink } from '../AppLink/AppLink';

export interface TabItem {
  id: number;
  name: string;
}

interface TabsProps {
  className?: string;
  tabs?: TabItem[];
  id?: number;
  onTabClick?: (tab: TabItem) => void;
  getRoute?: (tab: TabItem) => string;
}

export const Tabs = memo((props: TabsProps) => {
  const { className, tabs, onTabClick, id, getRoute } = props;

  const onClickHandler = useCallback(
    (tab: TabItem) => () => onTabClick(tab),
    [onTabClick],
  );

  const onHandlerGetRoute = useCallback(
    (tab: TabItem) => getRoute?.(tab),
    [getRoute],
  );

  return (
    <div className={classNames(cls.TabsWrapper, {}, [className])}>
      {tabs.map((tab: TabItem) => (
        <AppLink key={tab.id} to={onHandlerGetRoute(tab)}>
          <Card
            className={cls.Tab}
            key={tab.id}
            theme={
              tab.id === id ? CardTheme.OUTLINED_ACTIVE : CardTheme.OUTLINED
            }
            onClick={onClickHandler(tab)}
          >
            {tab.name}
          </Card>
        </AppLink>
      ))}
    </div>
  );
});
