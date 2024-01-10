import { createAsyncThunk } from '@reduxjs/toolkit';
import { setUserData } from '@/shared/lib/helpers/setUserData';
import { Auth } from '@/features/Auth';
import { ThunkAPIConfig } from '@/app/providers/StoreProvider/config/StateSchema';
import { publicRoutePath } from '@/app/providers/router/config/publicRouterConfig';

interface RegistrationByEmailProps {
  email: string;
  password: string;
}

export interface RegistrationValidationErrors {
  status: number;
  property: string;
  messages: string[];
  value: string;
}

export const registrationByEmail = createAsyncThunk<
  Auth,
  RegistrationByEmailProps,
  ThunkAPIConfig<string | RegistrationValidationErrors[]>
>('Registration', async ({ email, password }, thunkAPI) => {
  const { rejectWithValue, extra } = thunkAPI;
  try {
    const response = await extra.api.post(
      'http://localhost:5000/online-store/auth/registration',
      { email, password },
    );
    extra.navigate(publicRoutePath.main);
    return setUserData(response.data, thunkAPI);
  } catch (error) {
    const messages: RegistrationValidationErrors[] = error.response.data;
    return rejectWithValue(error.response.data.message || messages);
  }
});
