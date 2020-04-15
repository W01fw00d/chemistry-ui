import React from 'react';

import { storiesOf } from '@storybook/react';

import data from '../../../../.storybook/fake_data/rooms.json';

import Image from '../image';

storiesOf('1. Atoms|Image', module).add('default', () => <Image src={data[0].image} />);
