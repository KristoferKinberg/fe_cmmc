import React from 'react';
import PropTypes from 'prop-types';
import classNames from "classnames";
import {StyledButton} from "./StyledButton";

export default class Button extends React.PureComponent {
  static propTypes = {
    label: PropTypes.string.isRequired,
    icon: PropTypes.node,
    callBack: PropTypes.func,
    customStyles: PropTypes.object,
    type: PropTypes.string,
    fullWidth: PropTypes.bool,
    disabled: PropTypes.bool,
    transparent: PropTypes.bool,
  };
  static defaultProps = {
    callBack: () => {},
    type: 'neutral',
    fullWidth: false,
    customStyles: {},
  };

  iconRenderer = () => (
    <div className="Button__icon d-flex flex-row align-items-center justify-content-center">
      { this.props.icon }
    </div>
  );

  setClasses = () => {
    const { type, disabled } = this.props;
    const predefinedTypes = {
      SUCCESS:  'success',
      WARNING:  'warning',
      DANGER:   'danger',
      NEUTRAL:  'neutral',
      PRIMARY:  'primary',
      DISABLED: 'disabled'
    };

    return classNames({
      'Button d-flex flex-row align-items-center justify-content-center': true,
      'full-width': this.props.fullWidth,
      'transparent': this.props.transparent,
      [predefinedTypes.SUCCESS]:  type.toLowerCase() === predefinedTypes.SUCCESS && !disabled,
      [predefinedTypes.WARNING]:  type.toLowerCase() === predefinedTypes.WARNING && !disabled,
      [predefinedTypes.DANGER]:   type.toLowerCase() === predefinedTypes.DANGER  && !disabled,
      [predefinedTypes.NEUTRAL]:  type.toLowerCase() === predefinedTypes.NEUTRAL && !disabled,
      [predefinedTypes.PRIMARY]:  type.toLowerCase() === predefinedTypes.PRIMARY && !disabled,
      [predefinedTypes.DISABLED]: disabled
    });
  };

  clickCallback = () => {
    if (!this.props.disabled) {
      this.props.callBack();
    }
  };

  render () {
    const { label, icon, customStyles } = this.props;

    return (
      <StyledButton
        className={ this.setClasses() }
        onClick={ this.clickCallback }
        style={customStyles}
      >
        <div className="Button__label d-flex flex-row align-items-center justify-content-center">
          <span className="Button__label__elem">
            { label }
          </span>
        </div>
        { icon ? this.iconRenderer() : null }
      </StyledButton>
    )
  }
}
