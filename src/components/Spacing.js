import styled, { useTheme } from "styled-components";
import React from "react";

const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
};

const positionVariant = {
  top: "marginTop",
  left: "marginLeft",
  right: "marginRight",
  bottom: "marginBottom",
};

const getVariant = (position, size, theme) => {
  const sizeIndex = sizeVariant[size];
  const property = positionVariant[position];
  const value = theme.space[sizeIndex];

  return `${property}:${value}`;
};

const SpacingView = styled.View`
  ${({ variant }) => variant}
`;

const Spacing = ({ position, size, children }) => {
  const theme = useTheme();
  const variant = getVariant(position, size, theme);
  return <SpacingView variant={variant}>{children}</SpacingView>;
};

// const Spacing = styled.View`
//   ${({ position, size, theme }) => getVariant(position, size, theme)}
// `;

Spacing.defaultProps = {
  position: "top",
  size: "small",
};

export default Spacing;
