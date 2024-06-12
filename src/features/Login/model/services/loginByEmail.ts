import { createAsyncThunk } from '@reduxjs/toolkit';
import { IAuth, setUserData } from '@/entities/Auth';
import { ThunkAPIConfig } from '@/app/providers/StoreProvider/config/StateSchema';
import { LoginValidationErrors } from '@/shared/types/LoginValidationErrors';

interface loginByEmailProps {
  email: string;
  password: string;
}

export const loginByEmail = createAsyncThunk<
  IAuth,
  loginByEmailProps,
  ThunkAPIConfig<string | LoginValidationErrors[]>
>('LoginSlice', async ({ email, password }, thunkAPI) => {
  const { rejectWithValue, extra } = thunkAPI;
  try {
    const response = await extra.api.post('/auth/login', { email, password });
    return setUserData(response.data, thunkAPI);
  } catch (error) {
    return rejectWithValue(`${error}`);
  }
});
