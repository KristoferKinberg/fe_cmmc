import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import '../../../node_modules/bootstrap/scss/bootstrap.scss';

// import { linkTo } from '@storybook/addon-links';
import CardBase from './';

storiesOf('CardBase', module).add('Simple CardBase', () => (
  <div style={{height: "100vh", position: 'relative'}} className="d-flex align-items-center justify-content-center">
    <div className="container">
      <div className="row">
        <div className="col-3">
          <h5 style={{textAlign: "center"}}>Non elevated</h5>
          <CardBase content={'Placeholder data'} elevated={false}/>
        </div>
        <div className="col-4">
          <h5 style={{textAlign: "center"}}>Elevated</h5>
          <CardBase content={'Placeholder data'}/>
        </div>
        <div className="col-3">
          <h5 style={{textAlign: "center"}}>Clickable</h5>
          <CardBase content={'Placeholder data'} callBack={action('callBack')} clickable={true}/>
        </div>
      </div>
    </div>
  </div>
));
