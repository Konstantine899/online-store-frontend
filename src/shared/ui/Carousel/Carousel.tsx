import { classNames } from '@/shared/lib/classNames/classNames';
import { ReactNode, memo, useEffect, useState } from 'react';
import cls from './Carousel.module.scss';
import { Button } from '../Button/Button';

interface CarouselProps {
  className?: string;
  children?: ReactNode[];
}

export const Carousel = memo((props: CarouselProps) => {
  const { className, children } = props;
  const [currentElement, setCurrentElement] = useState(0);
  const [length, setLength] = useState(children.length);

  // устанавливаю длину соответствующую текущему props children
  useEffect(() => {
    setLength(children.length);
  }, [children.length]);

  const onHandlerNext = () => {
    if (currentElement < length - 1) {
      setCurrentElement((previousState: number) => previousState + 1);
    }
  };
  const onHandlerPrevious = () => {
    if (currentElement > 0) {
      setCurrentElement((previousState: number) => previousState - 1);
    }
  };

  return (
    <div className={classNames(cls.Carousel, {}, [className])}>
      {currentElement > 0 && (
        <Button onClick={onHandlerPrevious} className={cls.ButtonLeft}>
          &lt;
        </Button>
      )}
      <div className={cls.ContentWrapper}>
        <div
          className={cls.Content}
          style={{ transform: `translateX(${currentElement * 100}%)` }}
        >
          {children}
        </div>
      </div>
      {currentElement < length - 1 && (
        <Button onClick={onHandlerNext} className={cls.ButtonRight}>
          &gt;
        </Button>
      )}
    </div>
  );
});
