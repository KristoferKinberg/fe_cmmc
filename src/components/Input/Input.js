import React from 'react';
import {
  StyledError,
  StyledErrorWrapper,
  StyledInput,
  StyledInputWrapper,
  StyledLabel,
  StyledLabelWrapper
} from "./StyledInput";

export default ({ label, callback, value, type = 'text', valid = true, errors = [], disabled, onEnter }) => {
  const [ isActive, setIsActive ] = React.useState(false);
  const inputRef = React.useRef(null);

  /**
   * Callback
   * @param val
   * @returns {*}
   * @private
   */
  const _callback = ({ target: { value: val }}) => callback(val);

  /**
   * Checks if label is Active
   * @returns {boolean}
   */
  const labelIsActive = () => value.length !== 0 || isActive;

  React.useEffect(() => {
    const { current } = inputRef;

    /**
     * Handle focus
     */
    const handleFocus = () => setIsActive(true);

    /**
     * Handle blue
     */
    const handleBlur = () => setIsActive(false);

    current.addEventListener('focus', handleFocus);
    current.addEventListener('blur', handleBlur);

    return () => {
      current.removeEventListener('focus', handleFocus);
      current.removeEventListener('blur', handleBlur);
    }
  }, []);

  /**
   * Handle enter key press
   */
  const handleEnter = keyPressed => {
    console.log(keyPressed);
  };

  /**
   * Render errors
   * @returns {*}
   */
  const renderErrors = () => errors.map(error => <StyledError key={error}>
    { error }
  </StyledError>);

  return <div>
    <StyledInputWrapper isActive={labelIsActive()} isValid={valid} disabled={disabled}>
      <StyledLabelWrapper>
        <StyledLabel isActive={labelIsActive()} isValid={valid}>
          { label }
        </StyledLabel>
      </StyledLabelWrapper>

      <StyledInput
        ref={inputRef}
        onChange={_callback}
        value={value}
        type={type}
        disabled={disabled}
        onKeyPress={handleEnter}
      />
    </StyledInputWrapper>

    <StyledErrorWrapper>
      { renderErrors() }
    </StyledErrorWrapper>
  </div>
};
