import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { ReactNode, memo, useEffect, useState } from 'react';
import cls from './Carousel.module.scss';
import { Button } from '../Button/Button';

interface CarouselProps {
  className?: string;
  children?: ReactNode[];
  elementsQuantity: number;
}

export const Carousel = memo((props: CarouselProps) => {
  const { className, children, elementsQuantity } = props;
  const [currentElement, setCurrentElement] = useState(0);
  const [length, setLength] = useState(children.length);

  // устанавливаю длину соответствующую текущему props children
  useEffect(() => {
    setLength(children.length);
  }, [children.length]);

  const onHandlerNext = () => {
    if (currentElement < length - elementsQuantity) {
      setCurrentElement((previousState: number) => previousState + 1);
    }
  };
  const onHandlerPrevious = () => {
    if (currentElement > 0) {
      setCurrentElement((previousState: number) => previousState - 1);
    }
  };

  const isOneElement = elementsQuantity === 1;
  const isTwoElement = elementsQuantity === 2;
  const isThreeElement = elementsQuantity === 3;
  const isFourElement = elementsQuantity === 4;
  const isFiveElement = elementsQuantity === 5;

  const contentMods: Mods = {
    [cls.oneElement]: isOneElement,
    [cls.twoElement]: isTwoElement,
    [cls.threeElement]: isThreeElement,
    [cls.fourElement]: isFourElement,
    [cls.fiveElement]: isFiveElement,
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
          className={classNames(cls.Content, contentMods, [])}
          style={{
            transform: `translateX(-${
              currentElement * (100 / elementsQuantity)
            }%)`,
          }}
        >
          {children}
        </div>
      </div>
      {currentElement < length - elementsQuantity && (
        <Button onClick={onHandlerNext} className={cls.ButtonRight}>
          &gt;
        </Button>
      )}
    </div>
  );
});
