import React from 'react';

import { storiesOf } from '@storybook/react';

import allLiterals from '../../../public/storybook_fake_data/literals.json';
import data from '../../../public/storybook_fake_data/rooms.json';

import ItemDetailDescriptionSection from '../itemDetailDescriptionSection';

const literals = {
  description: allLiterals.description,
};

storiesOf('3. Organisms|ItemDetail.DescriptionSection', module).add('default', () => (
  <ItemDetailDescriptionSection literals={literals} description={data[0].details} />
));
