import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductDetailsSchema } from '../types/ProductDetailsSchema';
import { IProductDetails } from '../types/IProductDetails';
import { fetchProductDetails } from '../services/fetchProductDetails';

const initialState: ProductDetailsSchema = {
  productDetails: {
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
  error: '',
  _inited: false,
};

export const ProductDetailsSlice = createSlice({
  name: 'ProductDetailsSliceSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductDetails.pending, (state: ProductDetailsSchema) => {
        state.isLoading = true;
        state.error = '';
        state._inited = false;
      })
      .addCase(
        fetchProductDetails.fulfilled,
        (
          state: ProductDetailsSchema,
          action: PayloadAction<IProductDetails>,
        ) => {
          state.isLoading = false;
          state.error = '';
          state.productDetails.id = action.payload.id;
          state.productDetails.name = action.payload.name;
          state.productDetails.price = action.payload.price;
          state.productDetails.rating = action.payload.rating;
          state.productDetails.brand_id = action.payload.brand_id;
          state.productDetails.category_id = action.payload.category_id;
          state.productDetails.image = action.payload.image;
          state.productDetails.properties = action.payload.properties;
          state._inited = true;
        },
      )
      .addCase(
        fetchProductDetails.rejected,
        (state: ProductDetailsSchema, action: PayloadAction<string>) => {
          state.isLoading = false;
          state.error = action.payload;
          state._inited = false;
        },
      );
  },
});

export const { actions: ProductDetailsPageActions } = ProductDetailsSlice;
export const { reducer: ProductDetailsPageReducer } = ProductDetailsSlice;
