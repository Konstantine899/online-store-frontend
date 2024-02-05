import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, ReactNode, useCallback } from 'react';
import cls from './Tabs.module.scss';
import { Card } from '@/shared/ui/Card';
import { CardTheme } from '@/shared/ui/Card/Card';

export interface TabItem {
  value: string;
  content: ReactNode;
}

interface TabsProps {
  className?: string;
  tabs?: TabItem[];
  value?: string;
  onTabClick?: (tab: TabItem) => void;
}

export const Tabs = memo((props: TabsProps) => {
  const { className, tabs, onTabClick, value } = props;

  const onClickHandler = useCallback(
    (tab: TabItem) => () => onTabClick(tab),
    [onTabClick],
  );

  return (
    <div className={classNames(cls.TabsWrapper, {}, [className])}>
      {tabs.map((tab) => (
        <Card
          className={cls.Tab}
          key={tab.value}
          theme={tab.value === value && CardTheme.OUTLINED}
          onClick={onClickHandler(tab)}
        >
          {tab.content}
        </Card>
      ))}
    </div>
  );
});
