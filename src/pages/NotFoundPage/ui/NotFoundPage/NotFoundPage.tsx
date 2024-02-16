import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './NotFoundPage.module.scss';
import { KitImage } from '@/shared/ui/KitImage/KitImage';
import { Icon } from '@/shared/ui/Icon';
import NotFoundImageIcon from '@/shared/assets/icons/not_found_404.svg';
import { AppLink } from '@/shared/ui/AppLink';
import { AppLinkTheme } from '@/shared/ui/AppLink/AppLink';
import ArrowRightIcon from '@/shared/assets/icons/reshot-icon-stick-circle-right.svg';
import {
  getRouteListProducts,
  getRouteMain,
} from '@/shared/consts/router/publicRouter';
import { NotFoundImage } from '@/pages/NotFoundPage/ui/NotFoundImage/NotFoundImage';
import { NotFoundMessage } from '@/pages/NotFoundPage/ui/NotFoundMessage/NotFoundMessage';
import { NotFoundContent } from '@/pages/NotFoundPage/ui/NotFoundContent/NotFoundContent';
import { HedgehogImage } from '@/pages/NotFoundPage/ui/HedgehogImage/HedgehogImage';

interface NotFoundPageProps {
  className?: string;
  message: string;
}

export const NotFoundPage = memo((props: NotFoundPageProps) => {
  const { className, message } = props;

  return (
    <div className={classNames(cls.NotFoundPage, {}, [className])}>
      <div className={cls.contentWrapper}>
        <div className={cls.contentLeft}>
          <NotFoundImage />
          <NotFoundMessage message={message} />
        </div>
        <div className={cls.contentRight}>
          <HedgehogImage />
        </div>
      </div>
      <NotFoundContent />
    </div>
  );
});
