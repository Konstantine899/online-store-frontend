import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './NotFoundPage.module.scss';
import { Text } from '@/shared/ui/Text';
import { TextAlign, TextSize, TextTheme } from '@/shared/ui/Text/Text';
import { KitImage } from '@/shared/ui/KitImage/KitImage';
import { getRouteImage } from '@/shared/consts/router/publicRouter';

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage = memo((props: NotFoundPageProps) => {
  const { className } = props;

  return (
    <div className={classNames(cls.NotFoundPage, {}, [className])}>
      <div className={cls.rebootImg}>
        <KitImage src={getRouteImage(`reboot.gif`)} height={300} width={406} />
      </div>
      <Text
        theme={TextTheme.INVERTED_DISABLED}
        title={'Страница не найдена'}
        text={'Что бы найти товары воспользуйтесь поиском'}
        size={TextSize.L}
        align={TextAlign.CENTER}
      />
    </div>
  );
});

NotFoundPage.displayName = `NotFoundPage`;
