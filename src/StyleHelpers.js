import {devicesMax, devicesMin} from "./CSS-settings";

export const applyTransition = (duration, firstProp, ...args) => {
  const properties = args.reduce((acc, curr) => (`${acc}, ${curr} ${duration}ms`), `${firstProp} ${duration}ms`);

  return `
    transition: ${properties};
    -o-transition: ${properties};
    -moz-transition: ${properties};
    -webkit-transition: ${properties};
  `;
};

export const apply200Transition = (...args) => applyTransition(200, args);

export const useMediaMax = device => styles => `
  @media ${devicesMax[device]} {
    ${styles}
  }
`;

export const useMediaMin = device => styles => `
  @media ${devicesMin[device]} {
    ${styles}
  }
`;
