import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './NotFoundPage.module.scss';
import { KitImage } from '@/shared/ui/KitImage/KitImage';
import { Icon } from '@/shared/ui/Icon';
import NotFoundImageIcon from '@/shared/assets/icons/not_found_404.svg';
import { AppLink } from '@/shared/ui/AppLink';
import { publicRoutePath } from '@/app/providers/router/config/publicRouterConfig';
import { AppLinkTheme } from '@/shared/ui/AppLink/AppLink';
import ArrowRightIcon from '@/shared/assets/icons/reshot-icon-stick-circle-right.svg';

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage = memo((props: NotFoundPageProps) => {
  const { className } = props;

  return (
    <div className={classNames(cls.NotFoundPage, {}, [className])}>
      <div className={cls.contentWrapper}>
        <div className={cls.errorNotfoundWrapper}>
          <Icon className={cls.NotFoundImageIcon} Svg={NotFoundImageIcon} />
          <p>Ошибка!</p>
        </div>
        <p className={cls.contentMessage}>
          К сожалению запрашиваемая вами страница не найдена
        </p>
        <div className={cls.linkWrapper}>
          <AppLink
            to={publicRoutePath.main}
            theme={AppLinkTheme.PRIMARY}
            className={cls.link}
          >
            <p>Перейдите на главную</p>
            <Icon Svg={ArrowRightIcon} className={cls.ArrowRightIcon} />
          </AppLink>
          <AppLink
            to={publicRoutePath.get_list_product}
            theme={AppLinkTheme.PRIMARY}
            className={cls.link}
          >
            <p>Просмотреть каталог товаров</p>
            <Icon Svg={ArrowRightIcon} className={cls.ArrowRightIcon} />
          </AppLink>
        </div>
      </div>
      <div className={cls.notFoundImageWrapper}>
        <KitImage
          className={cls.notFoundImage}
          src={`${__API_URL__}/static/hedgehog.jpg`}
          alt={'ежик в тумане'}
        />
      </div>
    </div>
  );
});
