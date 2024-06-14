import { PartialStoryFn } from '@storybook/csf';
import { StoreProvider } from '@/app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { ReducersList } from '@/shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { ReactRenderer } from '@storybook/react';

const defaultAsyncReducers: ReducersList = {};

export const StoreDecorator =
  (state: DeepPartial<StateSchema>, asyncReducers?: ReducersList) =>
  (
    story: PartialStoryFn<
      ReactRenderer,
      {
        className?: string;
      }
    >,
  ) => {
    return (
      <StoreProvider
        initialState={state}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
      >
        {story()}
      </StoreProvider>
    );
  };
