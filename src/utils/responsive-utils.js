import { css } from "styled-components";

export const sizes = {
  giant: 1170,
  desktop: 992,
  tablet: 768,
  phablet: 572,
  phoneM: 440,
  phone: 376,
  phoneS: 320
};

export const media = Object.keys(sizes).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});

export const mobileHome = (...args) => css`
  ${media.tablet`
    ${props =>
      props.isHome &&
      css`
        ${css(...args)};
      `}
  `};
`;
