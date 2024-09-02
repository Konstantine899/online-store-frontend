import type { Meta, StoryObj } from '@storybook/react';
import { Text, TextAlign, TextSize, TextTheme } from './Text';

const meta: Meta<typeof Text> = {
  title: 'shared/Text',
  component: Text,
  args: {
    title: 'Описание',
    text: 'Рандомный текст',
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {
  args: {
    theme: TextTheme.PRIMARY,
  },
  parameters: {
    backgrounds: {
      default: 'monochrome-violet',
      values: [{ name: 'monochrome-violet', value: '#481173' }],
    },
  },
  render: (args) => <Text {...args} />,
};

export const PrimaryDisabled: Story = {
  args: {
    theme: TextTheme.PRIMARY_DISABLED,
  },
  parameters: {
    backgrounds: {
      default: 'monochrome-violet',
      values: [{ name: 'monochrome-violet', value: '#481173' }],
    },
  },
  render: (args) => <Text {...args} />,
};

export const Inverted: Story = {
  args: {
    theme: TextTheme.INVERTED,
  },
  render: (args) => <Text {...args} />,
};

export const InOneLine: Story = {
  args: {
    theme: TextTheme.INVERTED,
    text: 'Смартфон Huawei nova Y61 EVE-LX9N 4GB/128GB с NFC (полночный черный)',
    ellipsis: true,
  },
  render: (args) => <Text {...args} />,
};

export const InvertedDisabled: Story = {
  args: {
    theme: TextTheme.INVERTED_DISABLED,
  },
  render: (args) => <Text {...args} />,
};

export const Error: Story = {
  args: {
    theme: TextTheme.ERROR,
  },
  render: (args) => <Text {...args} />,
};

export const TextAlignLeft: Story = {
  args: {
    theme: TextTheme.PRIMARY,
    align: TextAlign.LEFT,
  },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'monochrome-violet',
      values: [{ name: 'monochrome-violet', value: '#481173' }],
    },
  },
  render: (args) => <Text {...args} />,
};

export const TextAlignCenter: Story = {
  args: {
    theme: TextTheme.PRIMARY,
    align: TextAlign.CENTER,
  },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'monochrome-violet',
      values: [{ name: 'monochrome-violet', value: '#481173' }],
    },
  },
  render: (args) => <Text {...args} />,
};

export const TextAlignRight: Story = {
  args: {
    theme: TextTheme.PRIMARY,
    align: TextAlign.RIGHT,
  },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'monochrome-violet',
      values: [{ name: 'monochrome-violet', value: '#481173' }],
    },
  },
  render: (args) => <Text {...args} />,
};

export const TextSizeS: Story = {
  args: {
    theme: TextTheme.PRIMARY,
    size: TextSize.S,
  },
  parameters: {
    backgrounds: {
      default: 'monochrome-violet',
      values: [{ name: 'monochrome-violet', value: '#481173' }],
    },
  },
  render: (args) => <Text {...args} />,
};

export const TextSizeM: Story = {
  args: {
    theme: TextTheme.PRIMARY,
    size: TextSize.M,
  },
  parameters: {
    backgrounds: {
      default: 'monochrome-violet',
      values: [{ name: 'monochrome-violet', value: '#481173' }],
    },
  },
  render: (args) => <Text {...args} />,
};

export const TextSizeL: Story = {
  args: {
    theme: TextTheme.PRIMARY,
    size: TextSize.L,
  },
  parameters: {
    backgrounds: {
      default: 'monochrome-violet',
      values: [{ name: 'monochrome-violet', value: '#481173' }],
    },
  },
  render: (args) => <Text {...args} />,
};

export const TextSizeXL: Story = {
  args: {
    theme: TextTheme.PRIMARY,
    size: TextSize.XL,
  },
  parameters: {
    backgrounds: {
      default: 'monochrome-violet',
      values: [{ name: 'monochrome-violet', value: '#481173' }],
    },
  },
  render: (args) => <Text {...args} />,
};
