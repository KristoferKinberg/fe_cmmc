import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import AddButton from './';

storiesOf('General.AddButton', module).add('Simple AddButton', () => (
  <AddButton/>
));
