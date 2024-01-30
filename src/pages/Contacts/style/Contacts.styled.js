import { Box, styled } from "@mui/system";
import { TextField, useMediaQuery } from "@mui/material";
import { NavLink } from "react-router-dom";

export const Wrap = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  maxWidth: "970px",
  margin: "0 auto",
  padding: "38px 0",
}));
export const PictureWrap = styled(Box)(({ theme }) => ({
  alignItems: "center",
  position: "relative",
  // top: "50%",
  // left: "0",
  // transform: "translateY(-50%)",
  zIndex: "2",
  //width: 61%;
  maxWidth: "300px",
  height: "auto",
}));
export const PictureDesc = styled(Box)(({ theme }) => ({
  paddingLeft: "35px",
  paddingRight: "2px",
  textAlign: "left",
  fontSize: "14px",
}));

export const SocialIcon = styled(Box)(({ theme }) => ({
  position: "absolute",
  display: "flex",
  gap: "1em",
  bottom: "-40px",
  left: "35px",
}));

export const SocialLink = styled(NavLink)(({ theme }) => ({
  color: `${theme.palette.socialLinkHover}`,
  transition: "color .3s linear",
  ": hover": {
    cursor: "pointer",
    color: `${theme.palette.secondary.main}`,
  },
}));

export const Single = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: "-55px",
  right: "55px",
  fontFamily: "Impressionist",
  fontSize: "20px",
}));

export const FormWrap = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "34%",
  maxWidth: "400px",
  padding: "70px 67px",
  // backgroundColor: "white",
  backgroundColor: `${theme.palette.background.default}`,
}));
export const SignatureWrap = styled(Box)(({ theme }) => ({
  top: "0",
  right: "0",
  position: "absolute",
  transform: "translate(30px, -20px) rotate(-5deg) scale(1.3)",
  fontFamily: "Impressionist",
  // fontFamily: "Great Vibes",
  fontSize: "40px",
  letterSpacing: "3px",
}));

export const FormField = styled(Box)(({ theme }) => ({
  minHeight: "75px",
}));

export const FormTextField = styled(TextField)(({ theme }) => ({
  marginBottom: "5px",
  letterSpacing: useMediaQuery(theme.breakpoints.up("cm")) ? "3px" : "0",
  "& .MuiFormLabel-root": {
    fontFamily: "Commuters Sans Extra",
    fontSize: "12px",
    fontWeight: "200",
    fontStyle: "italic",
    textTransform: "UpperCase",
  },
  "& .MuiInputBase-root:hover:not(.Mui-disabled, .Mui-error):before": {
    borderBottom: `1px solid ${theme.palette.secondary.main}`,
  },
}));

export const FormTextArea = styled(TextField)(({ theme }) => ({
  marginBottom: "5px",
  letterSpacing: useMediaQuery(theme.breakpoints.up("cm")) ? "3px" : "0",
  "& .MuiFormLabel-root": {
    fontFamily: "Commuters Sans Extra",
    fontWeight: "200",
    fontStyle: "italic",
    fontSize: "12px",
  },
  "& .MuiInputBase-root:hover:not(.Mui-disabled, .Mui-error):before": {
    borderBottom: `1px solid ${theme.palette.secondary.main}`,
  },
}));

export const textArea = {
  minHeight: "70px",
  height: "170px",
};
