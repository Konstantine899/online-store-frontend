import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './NotFoundContent.module.scss';
import { AppLink } from '@/shared/ui/AppLink';
import {
  getRouteListProducts,
  getRouteMain,
} from '@/shared/consts/router/publicRouter';
import { AppLinkTheme } from '@/shared/ui/AppLink/AppLink';
import { Icon } from '@/shared/ui/Icon';
import ArrowRightIcon from '@/shared/assets/icons/reshot-icon-stick-circle-right.svg';

interface NotFoundContentProps {
  className?: string;
}

export const NotFoundContent = memo((props: NotFoundContentProps) => {
  const { className } = props;

  return (
    <div className={classNames(cls.ContentWrapper, {}, [className])}>
      <AppLink
        to={getRouteMain()}
        theme={AppLinkTheme.PRIMARY}
        className={cls.link}
      >
        <p>Перейдите на главную</p>
        <Icon Svg={ArrowRightIcon} className={cls.ArrowRightIcon} />
      </AppLink>
      <AppLink
        to={getRouteListProducts()}
        theme={AppLinkTheme.PRIMARY}
        className={cls.link}
      >
        <p>Просмотреть каталог товаров</p>
        <Icon Svg={ArrowRightIcon} className={cls.ArrowRightIcon} />
      </AppLink>
    </div>
  );
});
