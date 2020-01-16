import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import '../../../node_modules/bootstrap/scss/bootstrap.scss';


// import { linkTo } from '@storybook/addon-links';
import CloseButton from './';

storiesOf('CloseButton', module).add('Simple CloseButton', () => (
  <div style={{height: "100vh", position: 'relative'}} className="d-flex align-items-center justify-content-center">
      <CloseButton callBack={action('callBack')}/>
  </div>
));
