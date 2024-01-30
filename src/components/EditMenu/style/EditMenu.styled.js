import { Box, styled } from "@mui/system";
import { NavLink } from "react-router-dom";

export const textArea = {
  height: "190px",
};

export const ItemWrap = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  marginBottom: "5px",
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

export const boxButton = {
  display: "flex",
  justifyContent: "space-between",
  paddingRight: "15px",
};
