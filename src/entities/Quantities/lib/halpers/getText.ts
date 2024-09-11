import { transformInflections } from '../halpers/transformInflections';

interface IGetText {
  search?: string;
  count?: number;
}

export function getText({ search = '', count = 0 }: IGetText) {
  if (search?.length > 0) {
    `По запросу "${search}" найдено ${transformInflections({
      count,
      one: 'товар',
      two: 'товара',
      three: 'товаров',
    })}`;
  }
  return `${transformInflections({
    count,
    one: 'товар',
    two: 'товара',
    three: 'товаров',
  })}`;
}
