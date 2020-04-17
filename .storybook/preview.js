import { addParameters } from '@storybook/react';
import { themes } from '@storybook/theming';

addParameters({
  options: {
    theme: themes.dark,

    brandTitle: 'Chemistry-UI',
    brandUrl: 'https://github.com/W01fw00d/chemistry-ui',
    brandImage: 'escaping_boredom.png',
  },
});
