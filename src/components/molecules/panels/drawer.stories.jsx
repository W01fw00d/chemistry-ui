import React from 'react';

import { storiesOf } from '@storybook/react';

import theme from '../../../styles/global-styles';
import themeDecorator from '../../../../.storybook/decorators/themeDecorator';

import Component from './drawer.jsx';

storiesOf('Molecules/Panels/Drawer', module)
  .addDecorator(themeDecorator(theme))
  .add('default', () => (
    <Component>
      <div>Drawer Panel</div>
    </Component>
  ));
