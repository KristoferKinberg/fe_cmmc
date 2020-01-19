import React from 'react';
import PropTypes from 'prop-types';
import SidebarBlock from '../SidebarBlock';
import {StyledTextArea} from "./StyledTextreaBlock";

class TextareaBlock extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    responsibility: PropTypes.string,
    inputValue: PropTypes.string,
    callBack: PropTypes.func,
    height: PropTypes.string,
    placeholderText: PropTypes.string,
    disabled: PropTypes.bool
  };

  static defaultProps = {
    placeholderText: 'Enter some text',
    disabled: false,
    height: '80'
  };

  valueChange = ({ target: { value }}) => this.props.callBack( value );

  render() {
    const { title, inputValue, placeholderText, disabled, height } = this.props;
    const textAreaStyle = { height: height + 'px' };

    return (
      <SidebarBlock title={title}>
        <StyledTextArea
          onChange={this.valueChange}
          value={inputValue}
          disabled={disabled}
          placeholder={placeholderText}
          style={ textAreaStyle }
        />
      </SidebarBlock>
    )
  }
}

export default TextareaBlock;
