import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { clearPosts } from "../../redux/slice/postsCategorySlice.js";
import { Container } from "@mui/system";
import {
  CabLink,
  ContentBox,
  Dashboard,
  DashWrap,
  LinkText,
  LogOutBox,
  TitleBox,
} from "./style/Cabinet.styled.js";
import { stateSingOut } from "../../redux/slice/singInSlice.js";
import { Outlet, useNavigate } from "react-router-dom";

const Cabinet = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearPosts());
  }, []);

  const logOut = () => {
    document.cookie =
      "post" + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    dispatch(stateSingOut());
    navigate("/");
  };
  return (
    <>
      <Container>
        <ContentBox>
          <LogOutBox onClick={logOut}>Log out</LogOutBox>
        </ContentBox>
        <DashWrap>
          <Dashboard>
            <CabLink to="/cabinet/new-post">
              <LinkText>New post</LinkText>
            </CabLink>
            <CabLink to="/cabinet/posts">
              <LinkText>Edit posts</LinkText>
            </CabLink>
            <CabLink to="/cabinet/menu">
              <LinkText>Edit menu</LinkText>
            </CabLink>
          </Dashboard>
          <TitleBox>
            <Outlet />
          </TitleBox>
        </DashWrap>
      </Container>
    </>
  );
};

export default Cabinet;
