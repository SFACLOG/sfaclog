// tailwind config is required for editor support

import type { Config } from 'tailwindcss';
import sharedConfig from '@repo/tailwind-config';

const config: Pick<Config, 'content' | 'presets' | 'theme'> = {
  content: ['./src/**/*.tsx'],
  presets: [sharedConfig],
  theme: {
    extend: {
      container: {
        screens: {
          web: '1440px',
        },
        padding: {
          web: '130px',
        },
      },
    },
  },
};

export default config;
