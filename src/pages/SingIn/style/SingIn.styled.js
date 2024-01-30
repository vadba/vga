import { Box, Container, styled } from "@mui/system";
import { TextField, useMediaQuery } from "@mui/material";

export const ContanerFlex = styled(Container)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  background: `${theme.palette.background.default}`,
}));

export const FormContainer = styled(Box)(({ theme }) => ({
  marginTop: "45px",
  width: !useMediaQuery(theme.breakpoints.up("cm")) ? "400px" : "580px",
  background: "white",
}));

export const formField = {
  height: "81px",
};

export const button = {
  fontSize: "17px",
  padding: "5px 55px",
  letterSpacing: "2px",
  "@media (max-width: 590px)": {
    fontSize: "14px",
  },
};

export const boxButton = {
  alignSelf: "end",
};
export const ChangedTextField = styled(TextField)(({ theme }) => ({
  marginBottom: "5px",
  letterSpacing: useMediaQuery(theme.breakpoints.up("cm")) ? "3px" : "0",
  "& .MuiFormLabel-root": {
    fontFamily: "Commuters Sans Extra",
    fontWeight: "200",
    fontStyle: "italic",
  },
}));
