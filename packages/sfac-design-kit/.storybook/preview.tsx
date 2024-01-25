import React from 'react';
import type { Preview } from '@storybook/react';
import { Theme } from '@radix-ui/themes';
import '../src/styles/global.css';
import '@radix-ui/themes/styles.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    Story => (
      <Theme>
        <Story />
      </Theme>
    ),
  ],
};

export default preview;
