import { createAsyncThunk } from '@reduxjs/toolkit';
import { setUserData } from '@/shared/lib/helpers/setUserData';
import { Auth } from '@/features/Auth';
import { ThunkExtraArg } from '@/app/providers/StoreProvider/config/StateSchema';

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
  {
    rejectValue: string | LoginValidationErrors[];
    extra: ThunkExtraArg;
  }
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
