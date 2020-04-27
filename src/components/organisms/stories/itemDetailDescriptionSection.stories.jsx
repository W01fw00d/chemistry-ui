import React from 'react';

import { storiesOf } from '@storybook/react';

import theme from '../../../styles/global-styles';
import themeDecorator from '../../../../.storybook/decorators/themeDecorator';
import allLiterals from '../../../../.storybook/fake_data/literals.json';
import data from '../../../../.storybook/fake_data/items.json';

import ItemDetailDescriptionSection from '../itemDetailDescriptionSection';

const literals = {
  description: allLiterals.description,
};

storiesOf('Organisms/Item/Detail/DescriptionSection', module)
  .addDecorator(themeDecorator(theme))
  .add('default', () => (
    <ItemDetailDescriptionSection literals={literals} description={data[0].details} />
  ));
