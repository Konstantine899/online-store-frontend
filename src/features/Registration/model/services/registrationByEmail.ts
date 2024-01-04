import { createAsyncThunk } from '@reduxjs/toolkit';
import { User } from '@/entities/User';
import axios from 'axios';

interface RegistrationByEmailProps {
  email: string;
  password: string;
}

export interface MessagesError {
  status: number;
  property: string;
  messages: string[];
  value: string;
}

export const registrationByEmail = createAsyncThunk<
  User,
  RegistrationByEmailProps,
  { rejectValue: string | MessagesError[] }
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
    const messages: MessagesError[] = error.response.data;
    return thunkAPI.rejectWithValue(error.response.data.message || messages);
  }
});
