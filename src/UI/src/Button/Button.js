import React from "react";
import styled from "styled-components";

const StyledButton = styled.button(
  ({ theme, width, disabled, active, height, isDirty }) => ({
    color: theme.color.white,
    height: height || 48,
    lineHeight: "8px",
    fontSize: 21.73,
    fontWeight: 400,
    letterSpacing: 0.1,
    padding: 15,
    background: active
      ? "green"
      : disabled
      ? theme.color.scrollbar
      : theme.color.primary,
    cursor: disabled ? "default" : "pointer",
    border: 0,
    width: width ? width : "100%",
    borderRadius: 5.1,
    textTransform: "capitalize"
  })
);

const Button = ({ buttonStyle, ...props }) => {
  return <StyledButton buttonStyle={buttonStyle} {...props} />;
};

export default Button;
