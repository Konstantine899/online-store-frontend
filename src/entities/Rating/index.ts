export {
  RatingReducer,
  RatingActions,
} from '../Rating/model/slices/RatingSlice';
export { selectRating } from './model/selectors/selectRating';
export { selectVotes } from './model/selectors/selectVotes';
export { fetchRating } from './model/services/fetchRating';
export type { IRatingSchema } from './model/types/IRatingSchema';
