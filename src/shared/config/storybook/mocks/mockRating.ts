interface IRating {
  ratingsSum: number;
  votes: number;
  rating: number;
}

export const mockRating: IRating = { rating: 5, ratingsSum: 30, votes: 6 };
