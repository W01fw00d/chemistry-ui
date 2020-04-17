import { addParameters } from '@storybook/react';
import { create } from '@storybook/theming/create';

addParameters({
  options: {
    theme: create({
      base: 'light',

      brandTitle: 'PREVIEW',
      brandUrl: 'https://example.com',
      brandImage: 'https://placehold.it/350x150',
    }),
  },
});
