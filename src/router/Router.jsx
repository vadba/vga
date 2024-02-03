import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home.jsx";
import Layout from "../pages/Layout/Layout.jsx";
import Category from "../pages/Category/Category.jsx";
import Article from "../pages/Article/Article.jsx";
import SingUp from "../pages/SingUp/SingUp.jsx";
import Cabinet from "../pages/Cabinet/index.js";
import SingIn from "../pages/SingIn/index.js";
import { useSelector } from "react-redux";
import CreateNewPost from "../components/CreateNewPost/index.js";
import EditPosts from "../components/EditPosts/index.js";
import EditMenu from "../components/EditMenu/index.js";
import EditPost from "../components/EditPosts/EditPost.jsx";
import EditMenuItem from "../components/EditMenu/EditMenuItem.jsx";
import AddMenu from "../components/EditMenu/AddMenu.jsx";
import Contacts from "../pages/Contacts/index.js";

const Router = () => {
  const { users, singIn } = useSelector((state) => state.singInSlice);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/:category" element={<Category />} />
        <Route path="/:category/:slug" element={<Article />} />
        <Route path="/contacts" element={<Contacts />} />
        {!users && <Route path="/sing-up" element={<SingUp />} />}{" "}
        {!users && <Route path="/sing-in" element={"No access"} />}
        {!!users && !singIn && <Route path="/sing-up" element={"No access"} />}
        {!!users && !singIn && (
          <>
            <Route path="/sing-in" element={<SingIn />} />
            <Route path="/cabinet" element={"No access"} />
          </>
        )}
        {singIn && (
          <>
            <Route path="/sing-up" element={<SingUp />} />
            <Route path="/cabinet" element={<Cabinet />}>
              <Route index element={"Cabinet"} />
              <Route path="/cabinet/new-post" element={<CreateNewPost />} />
              <Route path="/cabinet/posts" element={<EditPosts />} />
              <Route path="/cabinet/posts/:id" element={<EditPost />} />
              <Route path="/cabinet/menu" element={<EditMenu />} />
              <Route path="/cabinet/menu/:id" element={<EditMenuItem />} />

              <Route path="/cabinet/menu/add" element={<AddMenu />} />
            </Route>
            <Route path="/sing-in" element={"You are signed in"} />
          </>
        )}
      </Route>
    </Routes>
  );
};

export default Router;
