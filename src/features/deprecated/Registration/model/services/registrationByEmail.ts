import { createAsyncThunk } from '@reduxjs/toolkit';
import { IAuth, setUserData } from '@/entities/deprecated/Auth';
import { ThunkAPIConfig } from '@/app/providers/StoreProvider/config/StateSchema';
import { RegistrationValidationErrors } from '@/shared/types/RegistrationValidationErrors';

interface RegistrationByEmailProps {
  email: string;
  password: string;
}

/**
 * @deprecated
 */
export const registrationByEmail = createAsyncThunk<
  IAuth,
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
    return rejectWithValue(`${error}`);
  }
});
