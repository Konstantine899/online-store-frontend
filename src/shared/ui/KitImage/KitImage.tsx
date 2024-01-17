import {
  ImgHTMLAttributes,
  memo,
  ReactElement,
  useLayoutEffect,
  useState,
} from 'react';

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
  mainImage?: ReactElement; // основное изображение
  spareImage?: ReactElement; // запасное изображение
}

export const KitImage = memo((props: ImageProps) => {
  const {
    className,
    src,
    alt = 'image',
    mainImage,
    spareImage,
    ...otherProps
  } = props;

  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useLayoutEffect(() => {
    const img = new Image();
    img.src = src ?? '';
    img.onload = () => {
      setIsLoading(true);
    };
    img.onerror = () => {
      setIsLoading(false);
      setHasError(true);
    };
  }, [src]);

  if (isLoading && mainImage) {
    return mainImage; // здесь будет отображаться skeleton
  }

  if (hasError && spareImage) {
    return spareImage; // если изображение не загружено будет отображаться картинка по умолчанию
  }

  return <img className={className} src={src} alt={alt} {...otherProps} />;
});
