import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import '../../../../node_modules/bootstrap/scss/bootstrap.scss';

import CardBase from '../../../components/CardBase';

// import { linkTo } from '@storybook/addon-links';
import ComponentOverview from "./";

class Temp extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      componentArr: [
        {
          id: 0,
          component: (
            <CardBase content={
              <div style={{width: '100%', height: '450px', border: '1px solid #cecece'}}>
                0
              </div>
            }/>
          ),
        },
        {
          id: 1,
          component: (
            <CardBase content={
              <div style={{width: '100%', height: '450px', border: '1px solid #cecece'}}>
                1
              </div>
            }/>
          ),
        },
        {
          id: 2,
          component: (
            <CardBase content={
              <div style={{width: '100%', height: '450px', border: '1px solid #cecece'}}>
                2
              </div>
            }/>
          ),
        },
        {
          id: 3,
          component: (
            <CardBase content={
              <div style={{width: '100%', height: '450px', border: '1px solid #cecece'}}>
                3
              </div>
            }/>
          ),
        },
        {
          id: 4,
          component: (
            <CardBase content={
              <div style={{width: '100%', height: '450px', border: '1px solid #cecece'}}>
                4
              </div>
            }/>
          ),
        },
      ]
    }
  }

  removeComponent = (components) => {
    this.setState({
      componentArr: components
    });
  };

  render () {
    return (
      <div>
        <ComponentOverview
          components={this.state.componentArr}
          title={'Component Name'}
          removeComponent={this.removeComponent}
        />
      </div>
    )
  }
}

storiesOf('Admin.ComponentOverview', module).add('Admin.ComponentOverview', () => (
    <Temp />
));
