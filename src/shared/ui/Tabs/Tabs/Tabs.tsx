import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import cls from './Tabs.module.scss';
import { Card, CardTheme } from '../../Card/Card';
import { TabsSkeleton } from '../TabsSkeleton/TabsSkeleton';

export interface TabItem {
  id: number;
  name: string;
}

interface TabsProps {
  className?: string;
  tabs: TabItem[] | undefined;
  id: number;
  onTabClick: (tab: TabItem) => void;
  isSuccess: boolean;
  isLoading: boolean;
}

export const Tabs = memo((props: TabsProps) => {
  const { className, tabs, onTabClick, id, isSuccess, isLoading } = props;

  const onClickHandler = useCallback(
    (tab: TabItem) => () => onTabClick(tab),
    [onTabClick],
  );

  if (isLoading) {
    return <TabsSkeleton />;
  }

  if (isSuccess && tabs) {
    return (
      <div className={classNames(cls.TabsWrapper, {}, [className])}>
        {tabs.map((tab: TabItem) => (
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
        ))}
      </div>
    );
  }
});

Tabs.displayName = `Tabs`;
