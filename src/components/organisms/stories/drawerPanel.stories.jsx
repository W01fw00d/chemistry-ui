import React from 'react';

import { storiesOf } from '@storybook/react';

import theme from '../../../styles/global-styles';
import themeDecorator from '../../../../.storybook/decorators/themeDecorator';

import DrawerPanel from '../drawerPanel.jsx';

storiesOf('Organisms/Panel/Drawer', module)
  .addDecorator(themeDecorator(theme))
  .add('default', () => (
    <DrawerPanel>
      <div>Drawer Panel</div>
    </DrawerPanel>
  ));
