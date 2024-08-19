import type { Meta, StoryObj } from '@storybook/react';
import { Select, SelectWidth, WrapperWidth } from './Select';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof Select> = {
  title: 'shared/Select',
  component: Select,
  args: { onChange: action('onChange') },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Primary: Story = {
  args: {
    options: [
      { value: `5`, content: '5' },
      { value: `10`, content: '10' },
      { value: `20`, content: '20' },
    ],
    active: `5`,
    WrapperWidth: WrapperWidth.XL,
    SelectWidth: SelectWidth.M,
    label: `Показывать по`,
  },
  render: (args) => <Select {...args} />,
};
