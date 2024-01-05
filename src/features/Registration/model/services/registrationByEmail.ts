import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, UserActions } from '@/entities/User';
import axios from 'axios';
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
  TOKEN_TYPE_KEY,
} from '@/shared/consts/localstorage';

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
    localStorage.setItem(TOKEN_TYPE_KEY, JSON.stringify(response.data['type']));
    localStorage.setItem(
      ACCESS_TOKEN_KEY,
      JSON.stringify(response.data['accessToken']),
    );
    localStorage.setItem(
      REFRESH_TOKEN_KEY,
      JSON.stringify(response.data['refreshToken']),
    );
    // Полученные данные о пользователе сохраняю в state
    thunkAPI.dispatch(UserActions.setAuthData(response.data));
    return response.data;
  } catch (error) {
    const messages: MessagesError[] = error.response.data;
    return thunkAPI.rejectWithValue(error.response.data.message || messages);
  }
});
