import { Box, styled } from "@mui/system";
import { NavLink } from "react-router-dom";

export const RecentNewsItemWrap = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  width: "250px",
  marginBottom: "5%",
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
}));

export const ImgWrap = styled(Box)(({ theme }) => ({
  height: "270px",
  backgroundSize: "cover",
  backgroundPosition: "center",
  cursor: "pointer",
}));

export const Content = styled(Box)(({ theme }) => ({
  height: "95px",
  padding: "20px 30px",
  backgroundColor: `${theme.palette.categoryHeadBg}`,
}));

export const Categoty = styled(NavLink)(({ theme }) => ({
  display: "block",
  marginBottom: "15px",
  fontSize: "12px",
  textAlign: "left",
  textTransform: "uppercase",
  textDecoration: "none",
  color: `${theme.palette.primary.main}`,
  cursor: "pointer",
  "&:hover": {
    color: `${theme.palette.info.main}`,
  },
}));

export const Title = styled(NavLink)(({ theme }) => ({
  display: "block",
  textAlign: "left",
  textDecoration: "none",
  cursor: "pointer",
  color: `${theme.palette.secondary.main}`,
}));
