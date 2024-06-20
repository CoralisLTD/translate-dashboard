import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { styled } from "styled-components";

const LayoutContainer = styled("div")(({ theme }) => ({
  height: "100%",
  width: "100%",
  minHeight: "100vh",
  padding: 0,
  margin: 0,
  background: "#E7ECF8",
  alignItems: "center",
  textAlign: "center",
  justifyContent: "center",
  color: theme.color.primary,
  fontFamily: "Assistant"
}));

const Layout = ({ children }) => {
  const { i18n } = useTranslation();

  // useEffect(() => {
  //   i18n.changeLanguage(userStore.language);
  // }, [i18n, userStore.language]);

  const rtlOrLtr = i18n.dir();

  useEffect(() => {
    const body = document.body;
    body.dir = rtlOrLtr;
  }, [rtlOrLtr]);

  return (
    <LayoutContainer>
      {/* <Header /> */}
      {children}
    </LayoutContainer>
  );
};

export default Layout;
