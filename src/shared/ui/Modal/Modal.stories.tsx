import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'shared/Modal',
  tags: ['autodocs'],
  component: Modal,
  args: { isOpen: true, children: <p>Контент модального окна</p> },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
  args: {},
  render: (args) => <Modal {...args} />,
};
