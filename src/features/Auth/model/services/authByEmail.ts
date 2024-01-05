import { createAsyncThunk } from '@reduxjs/toolkit';
import { User } from '@/entities/User';
import axios from 'axios';
import { setUserData } from '@/shared/lib/helpers/setUserData';

interface authByEmailProps {
  email: string;
  password: string;
}

export interface AuthValidationErrors {
  status: number;
  property: string;
  messages: string[];
  value: string;
}

export const authByEmail = createAsyncThunk<
  User,
  authByEmailProps,
  {
    rejectValue: string | AuthValidationErrors[];
  }
>('Authenticate', async ({ email, password }, thunkAPI) => {
  try {
    const response = await axios.post(
      'http://localhost:5000/online-store/auth/login',
      { email, password },
    );
    return setUserData(response.data, thunkAPI);
  } catch (error) {
    const messages: AuthValidationErrors[] = error.response.data;
    return thunkAPI.rejectWithValue(error.response.data.message || messages);
  }
});
