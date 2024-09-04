import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Text.module.scss';

export enum TextTheme {
  WHITE = 'white',
  WHITE_DISABLED = 'white_disabled',
  BLACK = 'black',
  BLACK_DISABLED = 'black_disabled',
  RED = 'red',
  YELLOW = 'yellow',
  GRAY = 'gray',
}

export enum TextAlign {
  RIGHT = 'right',
  LEFT = 'left',
  CENTER = 'center',
}

export enum TextSize {
  S = 'size_s',
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  align?: TextAlign;
  size?: TextSize;
  ellipsis?: boolean; // текс в одну строку
  'data-testid'?: string;
}

type HeaderTagType = 'h1' | 'h2' | 'h3' | 'h4';

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
  [TextSize.S]: 'h4',
  [TextSize.M]: 'h3',
  [TextSize.L]: 'h2',
  [TextSize.XL]: 'h1',
};

export const Text = memo((props: TextProps) => {
  const {
    className,
    text,
    title,
    size = TextSize.M,
    theme = TextTheme.WHITE,
    align = TextAlign.LEFT,
    ellipsis = false,
    'data-testid': dataTestId = 'Text',
  } = props;

  const HeaderTag = mapSizeToHeaderTag[size];

  const mods = {
    [cls[size]]: true,
    [cls[theme]]: true,
    [cls[align]]: true,
  };

  const additional = [className];

  return (
    <div className={classNames(cls.Text, mods, additional)}>
      {title && (
        <HeaderTag className={cls.title} data-testid={`${dataTestId}.header`}>
          {title}
        </HeaderTag>
      )}
      {text && (
        <p
          className={classNames(cls.text, { [cls.ellipsis]: ellipsis }, [])}
          data-testid={`${dataTestId}.paragraph`}
        >
          {text}
        </p>
      )}
    </div>
  );
});

Text.displayName = `Text`;
