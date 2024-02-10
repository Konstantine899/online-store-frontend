export interface IBrand {
  id: number;
  name: string;
}

export interface BrandSchema {
  brands: IBrand[];
  isLoading: boolean;
  error: string;
}
