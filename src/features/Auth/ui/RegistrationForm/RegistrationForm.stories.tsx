import type { Meta, StoryObj } from '@storybook/react';
import RegistrationForm from './RegistrationForm';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './RegistrationForm.module.scss';
import { InputEmail } from '../InputEmail/InputEmail';
import { PasswordInput } from '../PasswordInput/PasswordInput';
import { SendButton } from '../SendButton/SendButton';
import { fn } from '@storybook/test';
import { IAuthValidate } from '../../model/types/IAuthSchema';
import { RegistrationError } from '../RegistrationError/RegistrationError';
import { ValidationEmail } from '../ValidationEmail/ValidationEmail';
import { ValidationPassword } from '../ValidationPassword/ValidationPassword';

const meta: Meta<typeof RegistrationForm> = {
  title: 'features/RegistrationForm',
  component: RegistrationForm,
};

export default meta;
type Story = StoryObj<typeof RegistrationForm>;

export const Primary: Story = {
  args: {},
  render: () => (
    <div className={classNames(cls.RegistrationForm, {}, [])}>
      <InputEmail />
      <PasswordInput />
      <SendButton isLoading={false} fetch={fn()} />
    </div>
  ),
  decorators: [StoreDecorator({})],
};

export const ValidationErrors: Story = {
  args: {},
  render: () => (
    <div className={classNames(cls.RegistrationForm, {}, [])}>
      <ValidationEmail />
      <InputEmail />
      <ValidationPassword />
      <PasswordInput />
      <SendButton isLoading={false} fetch={fn()} />
    </div>
  ),
  decorators: [
    StoreDecorator({
      auth: {
        email: '',
        password: '',
        error: {
          status: 400,
          data: [
            {
              status: 400,
              property: 'email',
              messages: ['Не верный формат email', 'Укажите email'],
              value: '',
            },
            {
              status: 400,
              property: 'password',
              messages: [
                'Пароль пользователя должен быть не менее 6 символов',
                'Укажите пароль',
              ],
              value: '',
            },
          ] as IAuthValidate[],
        },
      },
    }),
  ],
};

export const Error: Story = {
  args: {},
  render: () => (
    <div className={classNames(cls.RegistrationForm, {}, [])}>
      <RegistrationError />
      <ValidationEmail />
      <InputEmail />
      <ValidationPassword />
      <PasswordInput />
      <SendButton isLoading={false} fetch={fn()} />
    </div>
  ),
  decorators: [
    StoreDecorator({
      auth: {
        email: 'test@mail.com',
        password: '123456',
        error: {
          status: 400,
          data: {
            status: 400,
            message: 'Пользователь с таким email: test@mail.com уже существует',
          } as {
            status: number;
            message: string;
          },
        },
      },
    }),
  ],
};
