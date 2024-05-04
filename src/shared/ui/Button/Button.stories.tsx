import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonSize, ButtonTheme } from './Button';

const meta: Meta<typeof Button> = {
  title: 'entities/Button',
  tags: ['autodocs'],
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Outline: Story = {
  args: {},
  render: () => (
    <Button theme={ButtonTheme.OUTLINE} size={ButtonSize.M}>
      Кнопка
    </Button>
  ),
};

export const OutlineDisabled: Story = {
  args: {},
  render: () => (
    <Button theme={ButtonTheme.OUTLINE} size={ButtonSize.M} disabled={true}>
      Кнопка
    </Button>
  ),
};

export const OutlineFullWidth: Story = {
  args: {},
  render: () => (
    <Button theme={ButtonTheme.OUTLINE} size={ButtonSize.M} fullWidth={true}>
      Кнопка
    </Button>
  ),
};

export const OutlineS: Story = {
  args: {},
  render: () => (
    <Button theme={ButtonTheme.OUTLINE} size={ButtonSize.S}>
      Кнопка
    </Button>
  ),
};

export const OutlineM: Story = {
  args: {},
  render: () => (
    <Button theme={ButtonTheme.OUTLINE} size={ButtonSize.M}>
      Кнопка
    </Button>
  ),
};

export const OutlineL: Story = {
  args: {},
  render: () => (
    <Button theme={ButtonTheme.OUTLINE} size={ButtonSize.L}>
      Кнопка
    </Button>
  ),
};

export const OutlineXL: Story = {
  args: {},
  render: () => (
    <Button theme={ButtonTheme.OUTLINE} size={ButtonSize.XL}>
      Кнопка
    </Button>
  ),
};

export const Filled: Story = {
  args: {},
  render: () => (
    <Button theme={ButtonTheme.FILLED} size={ButtonSize.M}>
      Кнопка
    </Button>
  ),
};

export const FilledDisabled: Story = {
  args: {},
  render: () => (
    <Button theme={ButtonTheme.FILLED} disabled={true} size={ButtonSize.M}>
      Кнопка
    </Button>
  ),
};

export const FilledFullWidth: Story = {
  args: {},
  render: () => (
    <Button theme={ButtonTheme.FILLED} fullWidth={true} size={ButtonSize.M}>
      Кнопка
    </Button>
  ),
};

export const FilledS: Story = {
  args: {},
  render: () => (
    <Button theme={ButtonTheme.FILLED} size={ButtonSize.S}>
      Кнопка
    </Button>
  ),
};

export const FilledM: Story = {
  args: {},
  render: () => (
    <Button theme={ButtonTheme.FILLED} size={ButtonSize.M}>
      Кнопка
    </Button>
  ),
};
export const FilledL: Story = {
  args: {},
  render: () => (
    <Button theme={ButtonTheme.FILLED} size={ButtonSize.L}>
      Кнопка
    </Button>
  ),
};

export const FilledXL: Story = {
  args: {},
  render: () => (
    <Button theme={ButtonTheme.FILLED} size={ButtonSize.XL}>
      Кнопка
    </Button>
  ),
};

export const Round: Story = {
  args: {},
  render: () => (
    <Button theme={ButtonTheme.ROUND} size={ButtonSize.M}>
      1
    </Button>
  ),
};

export const RoundDisabled: Story = {
  args: {},
  render: () => (
    <Button theme={ButtonTheme.ROUND} size={ButtonSize.M} disabled={true}>
      1
    </Button>
  ),
};

export const RoundS: Story = {
  args: {},
  render: () => (
    <Button theme={ButtonTheme.ROUND} size={ButtonSize.S}>
      1
    </Button>
  ),
};

export const RoundM: Story = {
  args: {},
  render: () => (
    <Button theme={ButtonTheme.ROUND} size={ButtonSize.M}>
      1
    </Button>
  ),
};

export const RoundL: Story = {
  args: {},
  render: () => (
    <Button theme={ButtonTheme.ROUND} size={ButtonSize.L}>
      1
    </Button>
  ),
};

export const RoundXL: Story = {
  args: {},
  render: () => (
    <Button theme={ButtonTheme.ROUND} size={ButtonSize.XL}>
      1
    </Button>
  ),
};

export const RoundArrow: Story = {
  args: {},
  render: () => (
    <Button theme={ButtonTheme.ROUND_ARROW} size={ButtonSize.M}>
      &gt;
    </Button>
  ),
};

export const RoundArrowDisablrd: Story = {
  args: {},
  render: () => (
    <Button theme={ButtonTheme.ROUND_ARROW} disabled={true} size={ButtonSize.M}>
      &gt;
    </Button>
  ),
};

export const RoundArrowS: Story = {
  args: {},
  render: () => (
    <Button theme={ButtonTheme.ROUND_ARROW} size={ButtonSize.S}>
      &gt;
    </Button>
  ),
};

export const RoundArrowM: Story = {
  args: {},
  render: () => (
    <Button theme={ButtonTheme.ROUND_ARROW} size={ButtonSize.M}>
      &gt;
    </Button>
  ),
};

export const RoundArrowL: Story = {
  args: {},
  render: () => (
    <Button theme={ButtonTheme.ROUND_ARROW} size={ButtonSize.L}>
      &gt;
    </Button>
  ),
};

export const RoundArrowXL: Story = {
  args: {},
  render: () => (
    <Button theme={ButtonTheme.ROUND_ARROW} size={ButtonSize.XL}>
      &gt;
    </Button>
  ),
};
