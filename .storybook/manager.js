import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';

addons.setConfig({
  theme: create({
    base: 'light',

    brandTitle: 'MANAGER',
    brandUrl: 'https://example.com',
    brandImage: 'https://placehold.it/350x150',
  }),
});
