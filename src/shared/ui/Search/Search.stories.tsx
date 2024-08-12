import type { Meta, StoryObj } from '@storybook/react';
import { Search } from './Search';
import { action } from '@storybook/addon-actions';
// eslint-disable-next-line feature-slised-design-bak-plugin/path-checker
import { InputTheme } from '@/shared/ui/Input/Input';

const meta: Meta<typeof Search> = {
  title: 'shared/Search',
  component: Search,
  args: {
    onSearch: action('onSearch'),
    placeholder: 'Найти',
  },
};

export default meta;
type Story = StoryObj<typeof Search>;

export const WithoutOutline: Story = {
  args: { theme: InputTheme.WITHOUT_OUTLINE },
  parameters: {
    backgrounds: {
      default: 'monochrome-violet',
      values: [{ name: 'monochrome-violet', value: '#481173' }],
    },
  },
  render: (args) => <Search {...args} />,
};

export const Outline: Story = {
  args: { theme: InputTheme.OUTLINE },
  render: (args) => <Search {...args} />,
};

export const Filled: Story = {
  args: { theme: InputTheme.FILLED },
  render: (args) => <Search {...args} />,
};
