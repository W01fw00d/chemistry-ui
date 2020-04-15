import React from 'react';

import { storiesOf } from '@storybook/react';

import allLiterals from '../../../../.storybook/fake_data/literals.json';
import data from '../../../../.storybook/fake_data/items.json';

import ItemDetailDescriptionSection from '../itemDetailDescriptionSection';

const literals = {
  description: allLiterals.description,
};

storiesOf('3. Organisms|ItemDetail.DescriptionSection', module).add('default', () => (
  <ItemDetailDescriptionSection literals={literals} description={data[0].details} />
));
