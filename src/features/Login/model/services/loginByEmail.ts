import { createAsyncThunk } from '@reduxjs/toolkit';
import { setUserData } from '@/entities/Auth/helpers/setUserData';
import { Auth } from '@/entities/Auth';
import { ThunkAPIConfig } from '@/app/providers/StoreProvider/config/StateSchema';

interface loginByEmailProps {
  email: string;
  password: string;
}

export interface LoginValidationErrors {
  status: number;
  property: string;
  messages: string[];
  value: string;
}

export const loginByEmail = createAsyncThunk<
  Auth,
  loginByEmailProps,
  ThunkAPIConfig<string | LoginValidationErrors[]>
>('LoginSlice', async ({ email, password }, thunkAPI) => {
  const { rejectWithValue, extra } = thunkAPI;
  try {
    const response = await extra.api.post('/auth/login', { email, password });
    return setUserData(response.data, thunkAPI);
  } catch (error) {
    const messages: LoginValidationErrors[] = error.response.data;
    return rejectWithValue(error.response.data.message || messages);
  }
});
