interface IGetTitle {
  categoryName?: string;
  search?: string;
}

export function getTitle({
  search = ``,
  categoryName = ``,
}: IGetTitle): string {
  if (search?.length > 0) {
    return `Результат поиска`;
  }
  if (categoryName) {
    return `${categoryName}`;
  }
  return `Всего`;
}
