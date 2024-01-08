import { createAsyncThunk } from '@reduxjs/toolkit';
import { Auth } from '@/entities/User';
import axios from 'axios';
import { setUserData } from '@/shared/lib/helpers/setUserData';

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
  }
>('LoginSlice', async ({ email, password }, thunkAPI) => {
  try {
    const response = await axios.post(
      'http://localhost:5000/online-store/auth/login',
      { email, password },
    );
    return setUserData(response.data, thunkAPI);
  } catch (error) {
    const messages: LoginValidationErrors[] = error.response.data;
    return thunkAPI.rejectWithValue(error.response.data.message || messages);
  }
});
