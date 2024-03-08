export {
  RatingReducer,
  RatingActions,
} from '../Rating/model/slices/RatingSlice';
export { getRating } from './model/selectors/getRating';
export { getVotes } from './model/selectors/getVotes';
export { fetchRating } from './model/services/fetchRating';
export type { RatingSchema } from './model/types/RatingSchema';
