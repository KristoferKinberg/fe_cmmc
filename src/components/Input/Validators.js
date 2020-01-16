const generateValidatorObject = (value, result, errorMsg) => ({
  value,
  result,
  errorMsg,
});

export const minLength = (minLen, value) => () => generateValidatorObject(
  value,
  value.length >= minLen,
  `Must be at least ${minLen} characters.`
);

export const match = (pass, repeatPass) => () => generateValidatorObject(
  pass,
  pass === repeatPass,
  `Passwords doesn't match`,
);

export const notEmpty = value => () => generateValidatorObject(
  value,
  value.length > 0,
  'Input must not be empty'
);
