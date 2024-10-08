import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const InputContainer = styled.div(() => ({
  flex: 1,
  display: "flex",
  flexDirection: "row"
}));

const Error = styled.div(({ theme }) => ({
  fontSize: 12,
  color: theme.color.error,
  marginTop: "0.5em"
}));

const StyledDiv = styled.div(({ theme, height, disabled }) => ({
  backgroundColor: disabled ? theme.color.gray : theme.color.white,
  height: height ? height : "3em",
  width: "100%",
  margin: "0 15px",
  borderRadius: 6,
  fontSize: 16,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  paddingInlineEnd: "12px",
  paddingInlineStart: "10px",
  lineHeight: 1,
  border: "1px solid #5382F6"
}));

const StyleEndImg = styled.img(({ ...props }) => ({
  marginInlineStart: "auto",
  width: 20,
  height: 20,
  alignSelf: "center",
  filter: props.disabled ? "grayscale(1)" : "unset",
  pointerEvents: props.disabled ? "none" : "unset",
  cursor: "pointer"
}));

const StyleStartImg = styled.img(({ ...props }) => ({
  width: 22,
  height: 22,
  marginInlineEnd: "1em",
  alignSelf: "center",
  filter: props.disabled ? "grayscale(1)" : "unset",
  pointerEvents: props.disabled ? "none" : "unset"
}));

const StyledInput = styled.input(({ theme, disabled }) => ({
  fontFamily: "Assistant",
  fontSize: 18,
  fontWeight: "400",
  width: "100%",
  pointerEvents: disabled ? "none" : "unset",
  backgroundColor: "transparent",
  border: "none",
  outline: "none",
  "::placeholder": {
    color: theme.color.text
  },
  lineHeight: 1,
  "&:focus": {
    outline: "none"
  },
  textAlign: "start"
}));

const Label = styled.div(({ theme, isRtl }) => ({
  fontSize: 16,
  color: theme.color.text,
  textAlign: isRtl ? "right" : "left",
  fontWeight: 400,
  width: 440,
  alignContent:  "center"
}));

const Input = ({
  label,
  placeholder,
  endImg,
  startImg,
  helperText,
  onEndImgClick,
  isActive,
  transparentBorder,
  color,
  disabled = false,
  innerRef,
  error,
  direction,
  maxLength,
  ...props
}) => {
  const { i18n } = useTranslation();
  const isRtl = i18n.dir() === "rtl";
  return (
    <InputContainer style={{ ...props.style }}>
      {!!label && <Label isRtl={isRtl}>{label}</Label>}
      <StyledDiv
        transparentBorder={transparentBorder}
        error={!!helperText || error}
        height={props.style?.height}
        isActive={isActive}
        disabled={disabled}>
        {!!startImg && (
          <StyleStartImg
            disabled={disabled}
            src={startImg}
            alt="input-start-img"
          />
        )}
        {!!color && (
          <div
            style={{
              borderRadius: 50,
              backgroundColor: color,
              width: 45,
              height: 20,
              lineHeight: "28px",
              marginInlineEnd: 10,
              border: color === "white" ? "1px solid #dcdcdc" : ""
            }}></div>
        )}
        <StyledInput
          ref={innerRef}
          dir={direction}
          placeholder={placeholder}
          disabled={disabled}
          maxLength={maxLength}
          {...props}
          style={{ ...props.style, marginBottom: 0 }}
        />
        {!!endImg && (
          <StyleEndImg
            src={endImg}
            disabled={disabled}
            onClick={onEndImgClick}
            alt="input-end-img"
          />
        )}
      </StyledDiv>
      {!!helperText && <Error>{helperText}</Error>}
    </InputContainer>
  );
};

export default Input;
