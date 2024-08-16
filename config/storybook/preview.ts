import type { Preview } from '@storybook/react';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { initialize, mswLoader } from 'msw-storybook-addon';

initialize();

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'centered',
  },

  decorators: [StyleDecorator, RouterDecorator],
  tags: ['autodocs'],
  loaders: [mswLoader],
};

export default preview;
