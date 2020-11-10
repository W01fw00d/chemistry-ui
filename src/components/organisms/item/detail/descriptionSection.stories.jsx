import React from 'react';

import { storiesOf } from '@storybook/react';

import theme from '../../../../styles/global-styles';
import themeDecorator from '../../../../../.storybook/decorators/themeDecorator';
import literals from '../../../../../.storybook/fake_data/literals.json';
import data from '../../../../../.storybook/fake_data/items.json';

import Component from './descriptionSection';

const getLiterals = ({ description }) => ({
  description,
});

storiesOf('Organisms/[Item]/Detail/DescriptionSection', module)
  .addDecorator(themeDecorator(theme))
  .add('default', () => (
    <Component
      literals={getLiterals(literals)}
      description={data[0].details}
    />
  ));
