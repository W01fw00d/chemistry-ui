import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';
import brandImage from '../public/escaping_boredom.png';

addons.setConfig({
  theme: create({
    base: 'dark',

    brandTitle: 'Chemistry-UI',
    brandUrl: 'https://github.com/W01fw00d/chemistry-ui/blob/master/README.md',
    brandImage,
  }),
});
