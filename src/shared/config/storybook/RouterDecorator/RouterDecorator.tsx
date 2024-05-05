import { BrowserRouter } from 'react-router-dom';
import { PartialStoryFn } from '@storybook/csf';
import { ReactRenderer } from '@storybook/react';

export const RouterDecorator = (
  story: PartialStoryFn<
    ReactRenderer,
    {
      className?: string;
    }
  >,
) => <BrowserRouter>{story()}</BrowserRouter>;
