import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const InputContainer = styled.div(({ theme }) => ({
  // flex: 1,
  // marginLeft: "0.5em",
  // marginRight: "0.5em",
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
  lineHeight: 1
}));

const StyleEndImg = styled.img(({ ...props }) => ({
  marginInlineStart: "auto",
  width: 20,
  height: 20,
  alignSelf: "self-start"
}));

const StyleStartImg = styled.img(({ ...props }) => ({
  width: 22,
  height: 22,
  marginInlineEnd: "1em"
}));

const StyledInput = styled.textarea(({ theme, disabled, ...props }) => ({
  fontFamily: "Assistant",
  fontSize: 18,
  fontWeight: "400",
  width: "100%",
  pointerEvents: disabled ? "none" : "unset",
  backgroundColor: "transparent",
  border: "none",
  padding: "13px 0",
  outline: "none",
  resize: "none",
  "::placeholder": {
    color: theme.color.text
  },
  lineHeight: "20px",
  "&:focus": {
    outline: "none"
  },
  textAlign: "start"
}));

const Label = styled.div(({ theme }) => ({
  fontSize: 16,
  color: theme.color.text,
  textAlign: "right",
  fontWeight: 400,
  width: 440,
  marginBottom: 10
}));

const TextArea = ({
  label,
  placeholder,
  endImg,
  startImg,
  helperText,
  onEndImgClick,
  isActive,
  transparentBorder,
  disabled = false,
  direction,
  ...props
}) => {
  const { i18n } = useTranslation();
  const isRtl = i18n.dir() === "rtl";
  return (
    <InputContainer style={{ ...props.style }}>
      {!!label && <Label isRtl={isRtl}>{label}</Label>}
      <StyledDiv
        error={!!helperText}
        height={props.style?.height}
        transparentBorder={transparentBorder}
        isActive={isActive}
        disabled={disabled}>
        {!!startImg && <StyleStartImg src={startImg} alt="input-start-img" />}
        <StyledInput
          dir={direction}
          placeholder={placeholder}
          {...props}
          style={{ ...props.style, marginBottom: 0 }}
        />
        {!!endImg && <StyleEndImg src={endImg} alt="input-end-img" />}
      </StyledDiv>

      {!!helperText && <Error>{helperText}</Error>}
    </InputContainer>
  );
};

export default TextArea;
