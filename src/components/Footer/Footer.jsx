import {
  FooterContainer,
  FooterCopyRigth,
  FooterImg,
  FooterLogo,
  FooterMenu,
  FooterRigth,
  FooterWrap,
  LoginButton,
  LoginLink,
} from "./style/Footer.styled.js";
import { MenuLink } from "../Header/style/Header.styled.js";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo_new.png";
import { useSelector } from "react-redux";
import { ImagesList } from "./components/ImageList/ImageList.jsx";

export const Footer = () => {
  const currentTime = new Date();
  const year = currentTime.getFullYear();

  const { users, singIn } = useSelector((state) => state.singInSlice);
  const { dataCategories } = useSelector((state) => state.categorySlice);

  return (
    <FooterWrap>
      <FooterContainer>
        <FooterMenu>
          <NavLink key="home" to="/">
            <FooterLogo alt="logo" src={logo} />
          </NavLink>
          <MenuLink to="/">Home</MenuLink>
          {!!dataCategories.length &&
            dataCategories.map((page) => (
              <MenuLink key={page.idName} to={page.idName}>
                {page.name}
              </MenuLink>
            ))}
          <MenuLink to="/contacts">Contacts</MenuLink>
          {!!users && (
            <>
              <LoginLink to={singIn ? "/cabinet" : "/sing-in"}>
                <LoginButton variant="contained" color="login">
                  {singIn ? "CABINET" : "SING IN"}
                </LoginButton>
              </LoginLink>
            </>
          )}
          {!users && !singIn && (
            <>
              <LoginLink to="/sing-up">
                <LoginButton variant="contained" color="login">
                  SING UP
                </LoginButton>
              </LoginLink>
            </>
          )}
        </FooterMenu>
        <FooterRigth>
          <FooterImg>
            <ImagesList />
          </FooterImg>
          <FooterCopyRigth>
            © Paper Plane {year}. All rights reserved. | Legal | Made by IDEA.
          </FooterCopyRigth>
        </FooterRigth>
      </FooterContainer>
    </FooterWrap>
  );
};
