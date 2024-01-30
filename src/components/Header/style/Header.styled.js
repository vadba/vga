import { Stack, styled } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";

export const HeaderWrap = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  background: `${theme.palette.background.default}`,
}));

export const MenuIconMui = styled(MenuIcon)(({ theme }) => ({
  color: `${theme.palette.primary.main}`,
  fontSize: `${theme.typography.fontSizeIcon}`,
  transition: "all 0.3s ease",
  "&:hover": {
    color: `${theme.palette.secondary.main}`,
    fontSize: `${theme.typography.fontSizeIconHover}`,
    cursor: "pointer",
  },
}));

export const Button = styled("button")(({ theme }) => ({
  color: `${theme.palette.info.main}`,
  margin: "35px 10px 0 0",
  border: "none",
  background: "none",
  fontSize: `${theme.typography.fontSizeIcon}`,
  cursor: "pointer",
  transition: "all .5s",
  "&:hover": {
    color: `${theme.palette.secondary.main}`,
    textDecoration: "underline",
    textUnderlineOffset: "-2px",
  },
}));

export const HeaderCont = {
  display: "flex",
  justifyContent: "space-between",
};

export const logoStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const menuStyle = {
  display: "flex",
  alignItems: "center",
  gap: "50px",
  height: "107px",
  "@media (max-width: 800px)": {
    gap: "25px",
  },
};

export const MenuLink = styled(NavLink)(({ theme }) => ({
  textDecoration: "none",
  color: `${theme.palette.primary.main}`,
  fontWeight: "500",
  textTransform: "uppercase",
  fontSize: "12px",
  transition: "all .5s",
  "&.active": {
    color: `${theme.palette.activeLink}`,
  },
  "&:hover": {
    color: `${theme.palette.activeLink}`,
    textDecoration: "underline",
    textUnderlineOffset: "5px",
  },
}));
