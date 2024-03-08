export interface IRating {
  ratingsSum: number;
  votes: number;
  rating: number;
}

export interface RatingSchema {
  rating: IRating;
  isLoading: boolean;
  error: string;
}
