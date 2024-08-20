import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { ReactNode, memo, useEffect, useState } from 'react';
import cls from './Carousel.module.scss';
import { Button, ButtonSize, ButtonTheme } from '../Button/Button';
import { Skeleton } from '../Skeleton/Skeleton';

interface CarouselProps {
  className?: string;
  children: ReactNode[];
  elementsQuantity: number;
  infinite: boolean;
  isLoading?: boolean;
}

export const Carousel = memo((props: CarouselProps) => {
  const { className, children, elementsQuantity, infinite, isLoading } = props;
  const [currentElement, setCurrentElement] = useState(
    infinite ? elementsQuantity : 0,
  );
  const [length, setLength] = useState(children.length);

  const [isRepeating, setIsRepeating] = useState(
    infinite && children.length > elementsQuantity,
  ); // isRepeating будет в true толко в том случае если infinite = true и children.length больше отображаемых элементов в ленте elementsQuantity

  const [transitionEnabled, setTransitionEnabled] = useState(true); // По умолчанию анимация включена

  // устанавливаю длину соответствующую текущему props children
  useEffect(() => {
    setLength(children.length);
    setIsRepeating(infinite && children.length > elementsQuantity);
  }, [children.length, infinite, elementsQuantity]);

  useEffect(() => {
    if (isRepeating) {
      if (currentElement === elementsQuantity || currentElement === length) {
        setTransitionEnabled(true); // Включаю анимацию
      }
    }
  }, [isRepeating, currentElement, length, elementsQuantity]);

  const onHandlerNext = () => {
    if (isRepeating || currentElement < length - elementsQuantity) {
      setCurrentElement((previousState: number) => previousState + 1);
    }
  };
  const onHandlerPrevious = () => {
    if (isRepeating || currentElement > 0) {
      setCurrentElement((previousState: number) => previousState - 1);
    }
  };

  const transitionEndHandler = () => {
    if (isRepeating) {
      if (currentElement === 0) {
        setTransitionEnabled(false);
        setCurrentElement(length);
      } else if (currentElement === length + elementsQuantity) {
        setTransitionEnabled(false);
        setCurrentElement(elementsQuantity);
      }
    }
  };

  const renderPrev = () => {
    const output = [];
    for (let index = 0; index < elementsQuantity; index++) {
      output.push(children[length - 1 - index]);
    }
    output.reverse();
    return output;
  };

  const renderNext = () => {
    const output = [];
    for (let index = 0; index < elementsQuantity; index++) {
      output.push(children[index]);
    }
    return output;
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

  if (isLoading) {
    return (
      <div className={classNames(cls.Carousel, {}, [className])}>
        <Skeleton
          className={cls.ButtonLeft}
          height={40}
          width={40}
          borderRadius={'50%'}
        />
        <div className={cls.ContentWrapper}>
          <div className={classNames(cls.Content, {}, [])}>{children}</div>
        </div>
        <Skeleton
          className={cls.ButtonRight}
          height={40}
          width={40}
          borderRadius={'50%'}
        />
      </div>
    );
  }

  return (
    <div className={classNames(cls.Carousel, {}, [className])}>
      {(isRepeating || currentElement > 0) && (
        <Button
          theme={ButtonTheme.ROUND_ARROW}
          size={ButtonSize.M}
          onClick={onHandlerPrevious}
          className={cls.ButtonLeft}
        >
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
            transition: !transitionEnabled ? 'none' : undefined,
          }}
          onTransitionEnd={() => transitionEndHandler()}
        >
          {length > elementsQuantity && isRepeating && renderPrev()}
          {children}
          {length > elementsQuantity && isRepeating && renderNext()}
        </div>
      </div>
      {(isRepeating || currentElement < length - elementsQuantity) && (
        <Button
          theme={ButtonTheme.ROUND_ARROW}
          size={ButtonSize.M}
          onClick={onHandlerNext}
          className={cls.ButtonRight}
        >
          &gt;
        </Button>
      )}
    </div>
  );
});

Carousel.displayName = `Carousel`;
