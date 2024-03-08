import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductDetailsPageSchema } from '../types/ProductDetailsPageSchema';
import { IProductDetails, fetchProductDetailsPage } from '@/entities/Product';

const initialState: ProductDetailsPageSchema = {
  productDetails: {
    id: 0,
    name: '',
    properties: [],
    category_id: 0,
    brand_id: 0,
    image: '',
    price: 0,
    rating: 0,
    _inited: false,
  },
  isLoading: false,
  error: '',
};

export const ProductDetailsPageSlice = createSlice({
  name: 'ProductDetailsSliceSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchProductDetailsPage.pending,
        (state: ProductDetailsPageSchema) => {
          state.isLoading = true;
          state.error = '';
        },
      )
      .addCase(
        fetchProductDetailsPage.fulfilled,
        (
          state: ProductDetailsPageSchema,
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
          state.productDetails._inited = true;
        },
      )
      .addCase(
        fetchProductDetailsPage.rejected,
        (state: ProductDetailsPageSchema, action: PayloadAction<string>) => {
          state.isLoading = false;
          state.error = action.payload;
        },
      );
  },
});

export const { actions: ProductDetailsPageActions } = ProductDetailsPageSlice;
export const { reducer: ProductDetailsPageReducer } = ProductDetailsPageSlice;
