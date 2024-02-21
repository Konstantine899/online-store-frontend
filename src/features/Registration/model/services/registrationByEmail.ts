import { createAsyncThunk } from '@reduxjs/toolkit';
import { Auth, setUserData } from '@/entities/Auth';
import { ThunkAPIConfig } from '@/app/providers/StoreProvider/config/StateSchema';
import { RegistrationValidationErrors } from '@/shared/types/RegistrationValidationErrors';

interface RegistrationByEmailProps {
  email: string;
  password: string;
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
    return setUserData(response.data, thunkAPI);
  } catch (error) {
    const messages: RegistrationValidationErrors[] = error.response.data;
    return rejectWithValue(error.response.data.message || messages);
  }
});
