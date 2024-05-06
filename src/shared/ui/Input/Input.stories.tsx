import type { Meta, StoryObj } from '@storybook/react';
import { Input, InputTheme } from './Input';

const meta: Meta<typeof Input> = {
  title: 'entities/Input',
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const WithoutOutline: Story = {
  args: { theme: InputTheme.WITHOUT_OUTLINE, placeholder: 'Найти' },
  render: (args) => <Input {...args} />,
};

export const OutlineBottomEmail: Story = {
  args: {
    theme: InputTheme.OUTLINE_BOTTOM,
    type: 'text',
    label: 'Email',
    htmlFor: 'Email',
    required: true,
  },
  render: (args) => (
    <div style={{ position: 'relative', marginTop: '30px', width: '400px' }}>
      <Input {...args} />
    </div>
  ),
};

export const OutlineBottomPassword: Story = {
  args: {
    theme: InputTheme.OUTLINE_BOTTOM,
    type: 'password',
    label: 'Password',
    htmlFor: 'Password',
    required: true,
  },
  render: (args) => (
    <div style={{ position: 'relative', marginTop: '30px', width: '400px' }}>
      <Input {...args} />
    </div>
  ),
};
