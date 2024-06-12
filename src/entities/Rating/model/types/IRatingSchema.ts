export interface IRating {
  ratingsSum: number;
  votes: number;
  rating: number;
}

export interface IRatingSchema {
  rating: IRating;
  isLoading: boolean;
  error?: string;
}
