import { createGlobalStyle, css } from "styled-components";
import Assistant from "../../../assets/fonts/Assistant-VariableFont_wght.ttf";
import isMobile from "../isMobile";

const globalStyles = css`
  @font-face {
    font-family: "Assistant";
    src: url(Assistant) format("ttf");
    font-weight: 300; /*(regular)*/
    font-style: normal;
  }

  @font-face {
    font-family: "Assistant";
    font-weight: 400; /*(regular)*/
    font-style: normal;
    src: url(${Assistant}) format("ttf");
  }

  @font-face {
    font-family: "Assistant";
    font-weight: 600; /*(regular)*/
    font-style: normal;
    src: url(${Assistant}) format("ttf");
  }

  @font-face {
    font-family: "Assistant";
    font-weight: 700; /*(bold)*/
    font-style: normal;
    src: url(${Assistant}) format("ttf");
  }
  @font-face {
    font-family: "Assistant";
    font-weight: 900; /*(black)*/
    font-style: normal;
    src: url(${Assistant}) format("ttf");
  }
  html {
    box-sizing: border-box;
    font-size: calc(14px + 0.25vw);
    width: 100vw;
    height: 100vh;
    min-height: 100vh;
    overflow: hidden;
    scrollbar-color: ${isMobile ? `transparent` : `transparent`};
    scrollbar-width: thin;
  }

  body {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    font-family: "Assistant";
    min-width: 100vw;
    min-height: 100vh;
    background-color: #f2f3f4;
    scrollbar-color: #ACBADB;

    ::-webkit-scrollbar {
      width: 0;
    }
  }

  input[type="time"]::-webkit-calendar-picker-indicator {
    display: none;
  }

  input[type="time"]::-webkit-inner-spin-button,
  input[type="time"]::-webkit-clear-button {
    display: none;
  }

  /* WebKit and Chromiums */
  ::-webkit-scrollbar {
    background-color: transparent;
    border-radius: 5px;
    scrollbar-width: thin;
  }
  ::-webkit-scrollbar-thumb {
    background: transparent;
    border-radius: 5px;
    scrollbar-width: thin;
    width: 0px;
    height: 8px;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px #ffffff inset !important;
    height: 7px;
    margin-top: 12px;
    font-family: "Assistant";
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }

  /* Mui */
  .MuiOutlinedInput-notchedOutline {
    legend,
    span {
      visibility: hidden;
      display: none;
    }
  }
  .MuiAccordion-root {
    box-shadow: unset !important;
  }

  .MuiInputBase-root {
    font-family: "Assistant";
  }

  .MuiFormHelperText-root {
    text-align: right !important;
    font-family: Assistant;
    font-size: 16px;
    font-weight: 400;
  }

  .MuiOutlinedInput-notchedOutline {
    border-color: transparent !important;
    top: 0 !important;
  }

  .MuiInputAdornment-root {
    align-self: center;
    margin-left: 10px !important;
  }

  .MuiInputLabel-shrink {
    top: 10px !important;
    right: 5px !important;
    line-height: 28px;
  }

  body[dir="rtl"] {
    direction: rtl;
    .MuiSelect-icon {
      right: auto;
    }
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
    outline: none;
  }

  a {
    text-decoration: none;
    color: #2460c3;
  }

  .modal {
    background-color: red;
  }
`;

const GlobalStyles = createGlobalStyle`${globalStyles}`;
GlobalStyles.css = globalStyles;

export default GlobalStyles;
