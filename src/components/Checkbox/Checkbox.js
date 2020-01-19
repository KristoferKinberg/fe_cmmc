import React from 'react';
import PropTypes from 'prop-types';
import { X } from 'react-feather';

import './Checkbox.css';

class Checkbox extends React.PureComponent {
  static propTypes = {
    isActive: PropTypes.bool.isRequired,
    callBack: PropTypes.func.isRequired,
    size: PropTypes.number,
    id: PropTypes.number
  };

  static defaultProps = {
    isActive: false,
    size: 20
  };

  toggleCheck = () => {
    this.props.callBack(this.props.id, this.props.isActive);
  };

  render() {
    const { isActive, size } = this.props ;

    return (
      <span className="BundlerCheckbox" onClick={this.toggleCheck}>
        <input
          className="BundlerCheckbox__input"
          type="checkbox"
          checked={ isActive }
          readOnly
        />

        <span
          className="BundlerCheckbox__elem d-flex align-items-center justify-content-center"
          style={{ width: size+'px', height: size+'px' }}
        >
          <X className="CheckMark" size={size-5}/>
        </span>
      </span>
    )
  }
}

export default Checkbox;
