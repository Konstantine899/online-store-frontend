import { createAsyncThunk } from '@reduxjs/toolkit';
import { User } from '@/entities/User';
import axios from 'axios';

interface RegistrationByEmailProps {
  email: string;
  password: string;
}

export const registrationByEmail = createAsyncThunk<
  User,
  RegistrationByEmailProps,
  { rejectValue: string }
>('Registration', async ({ email, password }, thunkAPI) => {
  try {
    const response = await axios.post(
      'http://localhost:5000/online-store/auth/registration',
      { email, password },
    );
    if (!response.data) {
      throw new Error();
    }
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});
