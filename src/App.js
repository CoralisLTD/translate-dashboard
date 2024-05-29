import React from "react";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import he from "./locale/he.json";
import en from "./locale/en.json";
import GlobalStyles from "./UI/src/GlobalStyles";
import Layout from "./Layout";
import "./App.css";
import { Provider as MobxProvider } from "mobx-react";
import stores from "./stores";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routes";
import { ThemeProvider } from "styled-components";
import theme from "./assets/theme";
import { StyleSheetManager } from "styled-components";
import isPropValid from '@emotion/is-prop-valid';


i18next.use(initReactI18next).init({
  resources: {
    he: he,
    en: en
  },
  fallbackLng: "en",
  lng: "he",
  languages: ["he", "en"],
  interpolation: {
    escapeValue: false
  }
});

function shouldForwardProp(propName, target) {
  if (typeof target === "string") {
      // For HTML elements, forward the prop if it is a valid HTML attribute
      return isPropValid(propName);
  }
  // For other elements, forward all props
  return true;
}

const App = () => {
  return (
    <StyleSheetManager shouldForwardProp={shouldForwardProp}>
      <MobxProvider {...stores}>
        <GlobalStyles />
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <Layout>
              <AppRoutes />
            </Layout>
          </ThemeProvider>
        </BrowserRouter>
      </MobxProvider>
    </StyleSheetManager>
  );
};

export default App;
