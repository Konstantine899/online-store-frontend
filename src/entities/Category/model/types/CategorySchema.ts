export interface Category {
  id: number;
  name: string;
}

export interface CategorySchema {
  categories: Category[];
  isLoading: boolean;
  error: string;
}
