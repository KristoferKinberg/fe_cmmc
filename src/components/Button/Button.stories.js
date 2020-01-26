import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Play, Database } from 'react-feather';

// import { linkTo } from '@storybook/addon-links';
import Button from './';

storiesOf('Button', module).add('Simple Button', () => (
  <div style={{height: "100vh", position: 'relative'}} className="d-flex align-items-center justify-content-center">
    <div style={{marginRight: "2em"}}>
      <Button label="Knapp" callBack={action('callBack')}/>
    </div>
    <div className="">
      <Button label="Knapp" icon={<Play />} callBack={action('callBack')}/>
    </div>
  </div>
));
