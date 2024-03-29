import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import cls from './Tabs.module.scss';
import { Card, CardTheme } from '../Card/Card';
import { AppLink } from '../AppLink/AppLink';
import { getRouteListProductsByBrandAndByCategory } from '@/shared/consts/router/publicRouter';

export interface TabItem {
  id: number;
  name: string;
}

interface TabsProps {
  className?: string;
  tabs?: TabItem[];
  brandId?: number;
  categoryId?: number;
  onTabClick?: (tab: TabItem) => void;
}

export const Tabs = memo((props: TabsProps) => {
  const { className, tabs, onTabClick, brandId, categoryId } = props;

  const onClickHandler = useCallback(
    (tab: TabItem) => () => onTabClick(tab),
    [onTabClick],
  );

  return (
    <div className={classNames(cls.TabsWrapper, {}, [className])}>
      {tabs.map((tab: TabItem) => (
        <AppLink
          key={tab.id}
          to={getRouteListProductsByBrandAndByCategory(
            `${tab.id}`,
            `${categoryId}`,
          )}
        >
          <Card
            className={cls.Tab}
            key={tab.id}
            theme={
              tab.id === brandId
                ? CardTheme.OUTLINED_ACTIVE
                : CardTheme.OUTLINED
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
