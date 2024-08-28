import type { Meta, StoryObj } from '@storybook/react';
import { RegistrationModal } from './RegistrationModal';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Modal } from '@/shared/ui/Modal/Modal';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './RegistrationModal.module.scss';
import { RegistrationFormAsync as RegistrationForm } from '../RegistrationForm/RegistrationForm.async';
import { fn } from '@storybook/test';

const meta: Meta<typeof RegistrationModal> = {
  title: 'features/RegistrationModel',
  component: RegistrationModal,
  decorators: [StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof RegistrationModal>;

export const Primary: Story = {
  args: {},
  render: () => (
    <Modal
      isOpen={true}
      onClose={fn()}
      lazy
      className={classNames(cls.RegistrationModal, {}, [])}
    >
      <RegistrationForm />
    </Modal>
  ),
};
