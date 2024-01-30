import { useSelector } from "react-redux";
import { Formik } from "formik";
import { EditForm, Preload } from "../EditPosts/style/EditPosts.styled.js";
import { ItemWrap, Link, boxButton } from "./style/EditMenu.styled.js";
import { Button, Checkbox, FormControlLabel } from "@mui/material";
import { checkbox } from "../CreateNewPost/style/CreateNewPost.styled.js";
import { Box } from "@mui/system";
import { button } from "../../pages/SingUp/style/SingUp.styled.js";
import Skeleton from "@mui/material/Skeleton";
import { useState } from "react";
import { request } from "../../tools/request.js";
import { useNavigate } from "react-router-dom";

const EditMenu = () => {
  const navigate = useNavigate();
  const [postEdit, setPostEdit] = useState(false);
  const { dataCategories } = useSelector((state) => state.categorySlice);

  const toAddMemu = () => {
    navigate("/cabinet/menu/add");
  };
  const onSubmit = async (values, { resetForm }) => {
    if (!!values?.categories[0]) {
      try {
        const { result } = await request({
          url: "post",
          params: { category: values.categories },
        }).then((result) => result);

        let newPosts = result;

        for (let categoriesKey in values.categories) {
          for (let postKey in newPosts) {
            newPosts[postKey].categories = newPosts[postKey].categories.filter(
              (item) => item !== values.categories[categoriesKey]
            );
          }
        }

        if (!!newPosts.length) {
          await newPosts.map((postValues) => {
            request({
              url: "post",
              method: "PUT",
              body: postValues,
            });
            // const { status } = postResp;
          });
        }

        await values.categories.map((id) => {
          console.log(id);
          request({
            url: `categories/${id}`,
            method: "DELETE",
          });
        });
      } catch (e) {
        console.error("Error deleting product:", e);
      }

      resetForm();
      setPostEdit(true);
      setTimeout(() => {
        navigate("/cabinet/menu");
        window.location.reload(true);
      }, 500);
    }
  };

  return (
    <>
      {!postEdit ? (
        !!dataCategories.length ? (
          <Formik initialValues={{ categories: [] }} onSubmit={onSubmit}>
            {({ values, handleChange, handleBlur }) => (
              <EditForm>
                {dataCategories.map((item) => (
                  <ItemWrap key={item.id + "a"}>
                    <Link
                      key={item.id + "c"}
                      to={`${item.id}`}
                      className="cabLinkItem"
                    >
                      {item.name}
                    </Link>
                    <FormControlLabel
                      key={item.id}
                      control={<Checkbox color="success" />}
                      name="categories"
                      value={item.id}
                      label=""
                      onChange={handleChange}
                      sx={checkbox}
                    />
                  </ItemWrap>
                ))}
                <Box sx={boxButton}>
                  <Button
                    variant="contained"
                    color="login"
                    sx={button}
                    onClick={toAddMemu}
                    disabled={!(dataCategories.length < 4)}
                  >
                    add
                  </Button>
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
        "Menu deleted"
      )}
    </>
  );
};

export default EditMenu;
