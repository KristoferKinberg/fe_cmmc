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

export const boxShadow = () => `
  box-shadow: 5px 5px 10px 0 rgba(0,0,0,.25);
  -moz-box-shadow: 5px 5px 10px 0 rgba(0,0,0,.25);
  -webkit-box-shadow: 5px 5px 10px 0 rgba(0,0,0,.25);
`;

export const antiShadow = () => `
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.25);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.25);
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.25);
`;
