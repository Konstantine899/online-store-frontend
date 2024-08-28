import type { Meta, StoryObj } from '@storybook/react';
import LoginForm from './LoginForm';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import { InputEmail } from '../InputEmail/InputEmail';
import { PasswordInput } from '../PasswordInput/PasswordInput';
import { SendButton } from '../SendButton/SendButton';
import { fn } from '@storybook/test';
import { ValidationEmail } from '../ValidationEmail/ValidationEmail';
import { ValidationPassword } from '../ValidationPassword/ValidationPassword';
import { IAuthValidate } from '../../model/types/IAuthSchema';

const meta: Meta<typeof LoginForm> = {
  title: 'features/LoginForm',
  component: LoginForm,
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Primary: Story = {
  args: {},
  render: () => (
    <div className={classNames(cls.LoginForm, {}, [])}>
      <InputEmail />
      <PasswordInput />
      <SendButton isLoading={false} fetch={fn()} />
    </div>
  ),
  decorators: [StoreDecorator({})],
};

export const Secondary: Story = {
  args: {},
  render: () => (
    <div className={classNames(cls.LoginForm, {}, [])}>
      <InputEmail />
      <PasswordInput />
      <SendButton isLoading={false} fetch={fn()} />
    </div>
  ),
  decorators: [
    StoreDecorator({ auth: { email: 'test@mail.com', password: '123456' } }),
  ],
};

export const Error: Story = {
  args: {},
  render: () => (
    <div className={classNames(cls.LoginForm, {}, [])}>
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
