import { Formik } from "formik";
import {
  boxButton,
  EditForm,
  ItemWrap,
  Link,
  Preload,
} from "./style/EditPosts.styled.js";
import { Button, Checkbox, FormControlLabel } from "@mui/material";
import { checkbox } from "../CreateNewPost/style/CreateNewPost.styled.js";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostsData } from "../../redux/slice/postsSlice.js";
import Skeleton from "@mui/material/Skeleton";
import { Box } from "@mui/system";
import { button } from "../../pages/SingUp/style/SingUp.styled.js";
import { request } from "../../tools/request.js";

const EditPosts = () => {
  const dispatch = useDispatch();
  const [postEdit, setPostEdit] = useState(false);

  useEffect(() => {
    dispatch(fetchPostsData());
  }, []);

  const { editPosts, status } = useSelector((state) => state.postsSlice);

  const onSubmit = async (values, { resetForm }) => {
    if (!!values.posts[0]) {
      try {
        values.posts.map((id) => {
          request({
            url: `post/${id}`,
            method: "DELETE",
          });
        });
      } catch (e) {
        console.error("Error deleting product:", e);
      }
      resetForm();
      setPostEdit(true);
    }
  };
  return (
    <>
      {!postEdit ? (
        !!editPosts.length ? (
          <Formik initialValues={{ posts: [] }} onSubmit={onSubmit}>
            {({ values, handleChange, handleBlur }) => (
              <EditForm>
                {editPosts.map((news) => (
                  <ItemWrap key={news.id + "a"}>
                    <Link
                      key={news.id + "c"}
                      to={`${news.id}`}
                      className="cabLinkItem"
                    >
                      {news.title}
                    </Link>
                    <FormControlLabel
                      key={news.id}
                      control={<Checkbox color="success" />}
                      name="posts"
                      value={news.id}
                      label=""
                      onChange={handleChange}
                      sx={checkbox}
                    />
                  </ItemWrap>
                ))}
                <Box sx={boxButton}>
                  <Button
                    variant="contained"
                    type="submit"
                    color="login"
                    sx={button}
                  >
                    Delelte
                  </Button>
                </Box>
              </EditForm>
            )}
          </Formik>
        ) : (
          <Preload>
            <Skeleton />
            <Skeleton animation="wave" />
          </Preload>
        )
      ) : (
        "Posts deleted"
      )}
    </>
  );
};

export default EditPosts;
