import { createAsyncThunk } from '@reduxjs/toolkit';
import { Auth, setUserData } from '@/entities/Auth';
import { ThunkAPIConfig } from '@/app/providers/StoreProvider/config/StateSchema';
import { LoginValidationErrors } from '@/shared/types/LoginValidationErrors';

interface loginByEmailProps {
  email: string;
  password: string;
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
