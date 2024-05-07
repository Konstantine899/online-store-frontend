import { PartialStoryFn } from '@storybook/csf';
import { ReactRenderer } from '@storybook/react';
// eslint-disable-next-line feature-slised-design-bak-plugin/layer-imports
import '@/app/styles/index.scss';

export const StyleDecorator = (
  story: PartialStoryFn<
    ReactRenderer,
    {
      className?: string;
    }
  >,
) => story();
