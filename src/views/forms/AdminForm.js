import React from 'react';
import {
  StyledFormInnerWrapper,
  StyledFormWrapper,
  StyledImage,
  StyledImageIcon,
  StyledImageWrapper,
  StyledRegister,
  StyledRegisterButton,
  StyledRegisterWrapper,
  StyledWelcome,
  StyledWelcomeMessage,
  StyledWelcomeMessageWrapper,
  StyledErrorWrapper,
  StyledOverLay
} from "./subViews/registerUser/StyledRegister";
import {StyledError} from "../../components/Input/StyledInput";
import Input from "../../components/Input";

export default ({ title, text, form, onSubmit, validators, onChange, showForm, children, errors: extErrors = [], Component = null }) => {
  const [errors, setErrors] = React.useState([]);

  /**
   * On submit
   */
  const _onSubmit = () => {
    const res = runValidations();

    if (validate(res)) {
      setErrors([]);

      onSubmit();
    } else {
      setErrors(getErrors(res));
    }
  };

  /**
   * Updates form
   * @param key
   * @returns {function(*): {password: {callback: password.callback, label: string, type: string, value: string}, repeatPassword: {callback: repeatPassword.callback, label: string, type: string, value: string}, email: {callback: *, disabled: boolean, label: string, type: string, value: *}}}
   */
  const updateForm = key => value => onChange({
    ...form,
    [key]: {
      ...form[key],
      value
    }
  });

  /**
   * Get errors
   * @param res
   * @returns {{}}
   */
  const getErrors = (res) => Object
    .keys(res)
    .filter(field => !res[field].isValid)
    .reduce((acc, curr) => ({ ...acc, [curr]: [ ...res[curr].validators
        .filter(val => !val.result)
        .map(res => res.errorMsg) ]
    }), {});

  /**
   * Run submit
   */
  const runValidations = () => Object.keys(validators).reduce((acc, curr) => {
    const validationResult = validators[curr].map(valFunc => valFunc());

    return {
      ...acc,
      [curr]: {
        isValid: validationResult.reduce((acc, curr) => acc + curr.result, 0) === validationResult.length,
        validators: validationResult
      }
    }
  }, {});

  /**
   * Run validations
   * @returns {boolean}
   */
  const validate = (validationResult) => Object
    .values(validationResult)
    .reduce((acc, curr) => acc + curr.isValid, 0) === Object.values(validationResult).length;

  /**
   * Render right column
   * @returns {*}
   */
  const renderRightColumn = () => <StyledImageWrapper>
    <StyledOverLay />
    <StyledImage src="https://i.ytimg.com/vi/X485bjnoOXI/maxresdefault.jpg" />

    <StyledImageIcon src="/img/logo.png" />

    <StyledWelcome>
      Welcome to CMMC
    </StyledWelcome>
  </StyledImageWrapper>;

  /**
   * Render input
   * @param key
   * @param label
   * @param value
   * @param disabled
   * @returns {*}
   */
  const renderInput = (key, { label, value, disabled, type }) =>  <Input
    key={key}
    label={label}
    callback={updateForm(key)}
    type={type}
    value={value}
    disabled={disabled}
    valid={!errors.hasOwnProperty(key)}
    errors={errors[key]}
  />;

  /**
   * Render errors
   * @returns {*}
   */
  const renderExternalErrors = () => extErrors.map(error => <StyledError key={error}>
    { error }
  </StyledError>);

  /**
   * Render form
   * @returns {*}
   */
  const renderForm = () => !Component
    ? <StyledFormWrapper>
      <StyledFormInnerWrapper>
        <div>
          <StyledRegister>
            { title }
          </StyledRegister>

          <StyledWelcomeMessageWrapper>
            <StyledWelcomeMessage>
              { text }
            </StyledWelcomeMessage>
          </StyledWelcomeMessageWrapper>

          { renderInputs() }

          <StyledErrorWrapper>
            { renderExternalErrors() }
          </StyledErrorWrapper>

          { children }
        </div>

        <StyledRegisterButton onClick={_onSubmit}>
          Submit
        </StyledRegisterButton>
      </StyledFormInnerWrapper>
    </StyledFormWrapper>
    : null;

  /**
   * Render inputs
   * @returns {*[]}
   */
  const renderInputs = () => Object.keys(form).map(key => renderInput(key, form[key]));

  return <StyledRegisterWrapper>
    { renderRightColumn() }
    { renderForm() }
    { Component }
  </StyledRegisterWrapper>
};
