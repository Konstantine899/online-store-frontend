import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProductSchema } from '../types/IProductSchema';
import { IProduct } from '../types/IProduct';
import { fetchProductDetails } from '../services/fetchProductDetails';

const initialState: IProductSchema = {
  product: {
    id: 0,
    name: '',
    properties: [],
    category_id: 0,
    brand_id: 0,
    image: '',
    price: 0,
    rating: 0,
  },
  isLoading: false,
  error: undefined,
  _inited: false,
};

export const ProductDetailsSlice = createSlice({
  name: 'ProductDetailsSliceSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductDetails.pending, (state: IProductSchema) => {
        state.isLoading = true;
        state.error = undefined;
        state._inited = false;
      })
      .addCase(
        fetchProductDetails.fulfilled,
        (state: IProductSchema, action: PayloadAction<IProduct>) => {
          state.isLoading = false;
          state.product.id = action.payload.id;
          state.product.name = action.payload.name;
          state.product.price = action.payload.price;
          state.product.rating = action.payload.rating;
          state.product.brand_id = action.payload.brand_id;
          state.product.category_id = action.payload.category_id;
          state.product.image = action.payload.image;
          state.product.properties = action.payload.properties;
          state._inited = true;
        },
      )
      .addCase(
        fetchProductDetails.rejected,
        (state: IProductSchema, action: PayloadAction<string | undefined>) => {
          state.isLoading = false;
          state.error = action.payload;
          state._inited = false;
        },
      );
  },
});

export const { actions: ProductDetailsPageActions } = ProductDetailsSlice;
export const { reducer: ProductDetailsReducer } = ProductDetailsSlice;
