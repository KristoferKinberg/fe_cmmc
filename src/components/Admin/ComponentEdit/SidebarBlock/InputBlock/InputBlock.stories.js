import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import '../../../../../../node_modules/bootstrap/scss/bootstrap.scss';

// import { linkTo } from '@storybook/addon-links';
import InputBlock from "./InputBlock";
import PropTypes from "prop-types";

const blockStyle = {
  width: '300px',
  borderLeft: '1px solid #cecece',
  borderRight: '1px solid #cecece',
  height: '450px'
};

class Temp extends React.PureComponent {
  static propTypes = {
  };

  static defaultProps = {
  };

  constructor(props) {
    super(props);

    this.state = {
      text: '',
      presetText: 'Some preset text',
      disabled: 'disabled'
    }

  };

  callback = (text) => {
    this.setState({ text });
  };

  callback2 = (presetText) => {
    this.setState({ presetText });
  };

  callback3 = (disabled) => {
    this.setState({ disabled });
  };

  render() {
    const {  } = this.props;

    return (
      <div style={blockStyle}>
        <InputBlock
          title={'No Preset'}
          InputValue={this.state.text}
          callBack={this.callback}
        />
        <InputBlock
          title={'Preset'}
          InputValue={this.state.presetText}
          callBack={this.callback2}
        />
        <InputBlock
          title={'Disabled'}
          InputValue={this.state.disabled}
          callBack={this.callback3}
          disabled={true}
        />
      </div>
    )
  }
}




storiesOf('Admin.InputBlock', module).add('Simple InputBlock', () => (
  <div style={{width: "100%", height: "100vh"}}>
    <Temp />
  </div>
));
