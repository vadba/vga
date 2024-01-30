import { Box, styled } from "@mui/system";
import { Form } from "formik";
import { NavLink } from "react-router-dom";

export const EditForm = styled(Form)(({ theme }) => ({
  marginTop: "25px",
  width: "100%",
}));

export const ItemWrap = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  marginBottom: "10px",
  borderBottom: "1px dotted #ccc",
  "&:hover": {
    background: "rgba(250,216,219,0.22)",
  },
  "&:hover .cabLinkItem": {
    color: `${theme.palette.cabinetTextHoverLink}`,
  },
}));

export const Link = styled(NavLink)(({ theme }) => ({
  padding: "15px 0 11px 5px",
  width: "80%",
  textAlign: "left",
  color: `${theme.palette.text.primary}`,
  textDecoration: "none",
}));

export const Preload = styled(Box)(({ theme }) => ({
  width: "100%",
}));

export const boxButton = {
  display: "flex",
  justifyContent: "right",
  paddingRight: "15px",
};
