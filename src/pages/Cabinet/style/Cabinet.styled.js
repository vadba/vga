import { Box, styled } from "@mui/system";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "@mui/material";

export const TitleBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  flex: 2,
}));

export const ContentBox = styled(Box)(({ theme }) => ({
  margin: "10px 0 10px 0",
  display: "flex",
  justifyContent: "right",
}));

export const LogOutBox = styled(Box)(({ theme }) => ({
  cursor: "pointer",
}));

export const DashWrap = styled(Box)(({ theme }) => ({
  display: useMediaQuery(theme.breakpoints.up("md")) ? "flex" : "block",
}));
export const Dashboard = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  alignItems: "start",
  flex: 1,
}));

export const CabLink = styled(NavLink)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginLeft: "10px",
  textDecoration: "none",
  color: `${theme.palette.text.primary}`,
  cursor: "pointer",
  transition: "all 0.8s ease",
  "&:hover": {
    color: `${theme.palette.cabinetTextHoverLink}`,
  },
  "&::before": {
    content: "''",
    width: "0px",
    height: "50px",
    border: "1px solid " + `${theme.palette.cabinetBeforeLink}`,
    backgroundColor: `${theme.palette.cabinetBeforeLink}`,
    borderLeft: "none",
    borderTopRightRadius: "50%",
    borderBottomRightRadius: "50%",
    transition: "all 0.5s ease",
  },
  "&:hover::before": {
    width: "40px",
  },
  "&.active": {
    color: `${theme.palette.cabinetTextHoverLink}`,
  },
  "&.active::before": {
    width: "40px",
  },
}));

export const LinkText = styled(Box)(({ theme }) => ({
  fontSize: `${theme.typography.fontSizeDashboard}`,
}));
