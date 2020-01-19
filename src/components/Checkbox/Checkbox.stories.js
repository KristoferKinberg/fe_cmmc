import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import '../../../node_modules/bootstrap/scss/bootstrap.scss';
import { withInfo } from '@storybook/addon-info';

// import { linkTo } from '@storybook/addon-links';
import PropTypes from "prop-types";
import Checkbox from "./Checkbox";

const blockStyle = {
  width: '400px',
  borderLeft: '1px solid #cecece',
  borderRight: '1px solid #cecece',
  height: '450px',
  padding: '0 20px'
};

class Temp extends React.PureComponent {
  static propTypes = {
  };

  static defaultProps = {
  };

  constructor(props) {
    super(props);

    this.state = {
      isActive: false
    }
  };

  callBack = (id, state) => {
    this.setState({
      isActive: !state
    })
  };

  render() {
    const {  } = this.props;

    return (
       <Checkbox isActive={ this.state.isActive } callBack={this.callBack} size={30}/>
    )
  }
}
storiesOf('Checkbox', module)
  .add('Simple Checkbox',
    withInfo(`
      description or documentation about my component, supports markdown
    
      ~~~js
      <Button>Click Here</Button>
      ~~~
    
    `)(() =>
      <Checkbox isActive={ 'boolean' } callBack={this.callBack} size={30} id={ 2 }/>
    )
  );
