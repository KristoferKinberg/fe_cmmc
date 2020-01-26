import React from 'react';
import PropTypes from 'prop-types';
import SidebarBlock from '../SidebarBlock';
import {StyledInput} from "./StyledInputBlock";

class InputBlock extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    inputValue: PropTypes.string,
    callBack: PropTypes.func,
    placeholderText: PropTypes.string,
    disabled: PropTypes.bool
  };

  static defaultProps = {
    placeholderText: 'Enter some text'
  };

  valueChange = ({ target: { value }}) => this.props.callBack(value);

  render() {
    const { title, inputValue, placeholderText, disabled } = this.props;

    return (
      <SidebarBlock title={title}>
        <StyledInput
          type="text"
          onChange={this.valueChange}
          value={inputValue}
          disabled={disabled}
          placeholder={placeholderText}
        />
      </SidebarBlock>
    )
  }
}

export default InputBlock;
