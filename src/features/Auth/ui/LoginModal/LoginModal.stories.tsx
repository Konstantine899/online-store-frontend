import type { Meta, StoryObj } from '@storybook/react';
import { LoginModal } from './LoginModal';
import { Modal } from '@/shared/ui/Modal/Modal';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './LoginModal.module.scss';
import { LoginFormAsync as LoginForm } from '../LoginForm/LoginForm.async';
import { fn } from '@storybook/test';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof LoginModal> = {
  title: 'features/LoginModal',
  component: LoginModal,
  decorators: [StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof LoginModal>;

export const Primary: Story = {
  args: {},
  render: (args) => (
    <Modal
      isOpen={true}
      onClose={fn()}
      lazy
      className={classNames(cls.LoginModal, {}, [])}
    >
      <LoginForm {...args} />
    </Modal>
  ),
};
