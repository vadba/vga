import { Box, styled } from "@mui/system";
import { Form } from "formik";
import { TextField, useMediaQuery } from "@mui/material";

export const PostForm = styled(Form)(({ theme }) => ({
  width: "100%",
  margin: "1%",
  // background: `${theme.palette.background.default}`,
}));

export const FormField = styled(Box)(({ theme }) => ({
  minHeight: "81px",
}));

export const CategoryFieldErr = styled(Box)(({ theme }) => ({
  minHeight: "15px",
}));

export const FormFieldShort = {
  minHeight: "129px",
};

export const FormChecked = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "left",
}));

export const FormTextField = styled(TextField)(({ theme }) => ({
  marginBottom: "5px",
  letterSpacing: useMediaQuery(theme.breakpoints.up("cm")) ? "3px" : "0",
  "& .MuiFormLabel-root": {
    fontFamily: "Commuters Sans Extra",
    fontWeight: "200",
    fontStyle: "italic",
  },
}));

export const FormTextArea = styled(TextField)(({ theme }) => ({
  marginBottom: "5px",
  letterSpacing: useMediaQuery(theme.breakpoints.up("cm")) ? "3px" : "0",
  "& .MuiFormLabel-root": {
    fontFamily: "Commuters Sans Extra",
    fontWeight: "200",
    fontStyle: "italic",
  },
}));

export const textArea = {
  height: "510px",
};

export const checkbox = {
  width: "min-content",
};
