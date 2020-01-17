import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import '../../../node_modules/bootstrap/scss/bootstrap.scss';

// import { linkTo } from '@storybook/addon-links';
import EditBar from './EditBarStateless';



storiesOf('EditBar', module).add('Simple edit bar', () => (
    <div>
        <h4>Simple edit bar</h4>
        <EditBar editEvent={action('editEvent')} removeEvent={action('removeEvent')}  addEvent={action('addEvent')} />
    </div>
));
