import { Box, Container, styled } from "@mui/system";
import { Button, useMediaQuery } from "@mui/material";
import { NavLink } from "react-router-dom";

export const FooterWrap = styled(Box)(({ theme }) => ({
  marginTop: "45px",
  padding: "85px 0",
  background: `${theme.palette.background.default}`,
}));

export const FooterContainer = styled(Container)(({ theme }) => ({
  display: useMediaQuery(theme.breakpoints.up("cm")) ? "flex" : "block",
  gap: "50px",
}));

export const FooterMenu = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  gap: "23px",
  marginLeft: "15px",
  marginBottom: useMediaQuery(theme.breakpoints.up("cm")) ? "0" : "40px",
  flexGrow: "1",
}));

export const FooterRigth = styled(Box)(({ theme }) => ({
  flexGrow: "2",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}));

export const FooterImg = styled(Box)(({ theme }) => ({}));

export const FooterCopyRigth = styled(Box)(({ theme }) => ({
  marginTop: useMediaQuery(theme.breakpoints.up("cm")) ? "0" : "20px",
  textAlign: useMediaQuery(theme.breakpoints.up("cm")) ? "right" : "center",
  color: `${theme.palette.copyright}`,
}));

export const FooterLogo = styled("img")(({ theme }) => ({
  height: "34px",
  "@media (max-width: 650px)": {
    height: "25px",
  },
  margin: "0 15px 10px 0",
}));

export const LoginButton = styled(Button)(({ theme }) => ({
  padding: "5px 55px",
  color: `${theme.palette.copyright}`,
  fontSize: "14px",
}));

export const LoginLink = styled(NavLink)(({ theme }) => ({
  textDecoration: "none",
}));
