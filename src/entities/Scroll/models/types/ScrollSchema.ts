export type TScroll = Record<string, number>;

/*TScroll - объект у которого
 * key - string pathname страницы
 * value - number позиция scroll*/

export interface ScrollSchema {
  scroll: TScroll;
}
