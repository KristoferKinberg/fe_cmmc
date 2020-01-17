import React from 'react';
import PropTypes from 'prop-types';
import { Plus } from 'react-feather';
import { StyledAddButton } from "./StyledAddButton";

class AddButton extends React.PureComponent {
  static propTypes = {
    size: PropTypes.number,
    callBack: PropTypes.func
  };

  static defaultProps = {
    size: 40,
    callBack: () => {}
  };

  render() {
    const { size } = this.props;

    return (
      <StyledAddButton
        className="AddButton d-flex align-items-center justify-content-center"
        onClick={this.props.callBack}
        style={{
          width: size+'px',
          height: size+'px',
        }}
      >
        <Plus size={size}/>
      </StyledAddButton>
    )
  }
}

export default AddButton;
