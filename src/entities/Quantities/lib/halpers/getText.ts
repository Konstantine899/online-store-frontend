interface IGetText {
  search?: string;
  count?: number;
}

export function getText({ search = '', count = 0 }: IGetText) {
  if (search?.length > 0) {
    `По запросу "${search}" найдено ${count} товаров`;
  }
  return `${count} Товаров`;
}
