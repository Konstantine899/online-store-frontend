import { createAsyncThunk } from '@reduxjs/toolkit';
import { User } from '@/entities/User';
import axios from 'axios';
import { setUserData } from '@/shared/lib/helpers/setUserData';

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
  User,
  RegistrationByEmailProps,
  { rejectValue: string | RegistrationValidationErrors[] }
>('Registration', async ({ email, password }, thunkAPI) => {
  try {
    const response = await axios.post(
      'http://localhost:5000/online-store/auth/registration',
      { email, password },
    );
    return setUserData(response.data, thunkAPI);
  } catch (error) {
    const messages: RegistrationValidationErrors[] = error.response.data;
    return thunkAPI.rejectWithValue(error.response.data.message || messages);
  }
});
