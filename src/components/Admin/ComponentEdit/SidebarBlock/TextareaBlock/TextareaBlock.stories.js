import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

// import { linkTo } from '@storybook/addon-links';
import TextareaBlock from "./TextareaBlock";
import PropTypes from "prop-types";

const blockStyle = {
  width: '300px',
  borderLeft: '1px solid #cecece',
  borderRight: '1px solid #cecece',
  height: '750px'
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

  callback3 = (presetText) => {
    this.setState({ presetText });
  };

  render() {
    const {  } = this.props;

    return (
      <div style={blockStyle}>
        <TextareaBlock
          title={'No Preset'}
          inputValue={this.state.text}
          callBack={this.callback}
        />
        <TextareaBlock
          title={'Preset'}
          inputValue={this.state.presetText}
          callBack={this.callback2}
        />
        <TextareaBlock
          title={'Disabled'}
          inputValue={this.state.disabled}
          callBack={this.callback3}
          disabled={true}
        />
      </div>
    )
  }
}




storiesOf('Admin.TextareaBlock', module).add('Simple TextareaBlock', () => (
  <div style={{width: "100%", height: "100vh"}}>
    <Temp />
  </div>
));
