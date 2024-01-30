import {
  Button,
  HeaderCont,
  HeaderWrap,
  logoStyle,
  MenuIconMui,
  MenuLink,
  menuStyle,
} from "./style/Header.styled.js";
import { NavLink } from "react-router-dom";
import { Box, Container, useTheme } from "@mui/system";
import logo from "../../assets/logo_newto.png";
import { useMediaQuery } from "@mui/material";
import "./style/Header.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoriesData } from "../../redux/slice/categorySlice.js";

export const Header = () => {
  const dispatch = useDispatch();
  const theme = useTheme();

  useEffect(() => {
    dispatch(fetchCategoriesData());
  }, []);
  const { dataCategories } = useSelector((state) => state.categorySlice);

  const matches = useMediaQuery(theme.breakpoints.up("cm"));

  const refresh = () => window.location.reload(true);

  const [openOverlay, setOverlay] = useState("overlay");
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleHambur = () => {
    if (openOverlay === "overlay on") {
      setOverlay("overlay");
      setTimeout(() => {
        setMobileMenu(false);
      }, 800);
    } else {
      setOverlay("overlay on");
      setMobileMenu(true);
    }
  };
  return (
    <HeaderWrap>
      {!matches && (
        <>
          {mobileMenu && (
            <div className="mobileMenuOff" onClick={toggleHambur}></div>
          )}
          <div className={openOverlay}>
            <div className="mobileHeader">
              <NavLink
                key="home"
                to="/"
                onClick={toggleHambur}
                className="linkLogoImgModile"
              >
                <img alt="logo" src={logo} className="logoImgModile" />
              </NavLink>
              <Button onClick={toggleHambur}>&times;</Button>
            </div>
            <div className="mobileMenu">
              {!!dataCategories.length &&
                dataCategories.map((page) => (
                  <MenuLink
                    key={page.idName}
                    to={page.idName}
                    onClick={toggleHambur}
                  >
                    {page.name}
                  </MenuLink>
                ))}
            </div>
          </div>
        </>
      )}
      <Container sx={HeaderCont}>
        <Box sx={logoStyle}>
          <NavLink key="home" to="/">
            <img alt="logo" src={logo} className="logoImg" />
          </NavLink>
        </Box>
        <Box sx={menuStyle}>
          {matches ? (
            <>
              <MenuLink key="home" to="/">
                Home
              </MenuLink>
              {!!dataCategories.length &&
                dataCategories.map((page) => (
                  <MenuLink key={page.idName} to={page.idName}>
                    {page.name}
                  </MenuLink>
                ))}
            </>
          ) : (
            <>
              <MenuIconMui onClick={toggleHambur} />
            </>
          )}
        </Box>
      </Container>
    </HeaderWrap>
  );
};
