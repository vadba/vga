import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { request } from "../../tools/request.js";
import { ErrorMessage, Formik } from "formik";
import { validationSchema } from "./utils/validationSchema.js";
import {
  FormField,
  FormTextArea,
  FormTextField,
  PostForm,
} from "../CreateNewPost/style/CreateNewPost.styled.js";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { boxButton, button } from "../../pages/SingUp/style/SingUp.styled.js";
import { useEffect, useState } from "react";
import { textArea } from "./style/EditMenu.styled.js";

const EditMenuItem = () => {
  const [postEdit, setPostEdit] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const { dataCategories } = useSelector((state) => state.categorySlice);

  const item = dataCategories.find((c) => c.id === id);

  if (!!item) {
    const initialValues = {
      id: item.id,
      name: item.name,
      description: item.description,
      idName: item.idName,
      parentId: item.parentId,
    };

    const onSubmit = async (values, { resetForm }) => {
      let postResp;

      try {
        postResp = await request({
          url: "categories",
          method: "PUT",
          body: values,
        });
        const { status } = postResp;
      } catch (e) {
        console.error("Error fetching product:", e);
      }

      resetForm();
      setPostEdit(true);
      setTimeout(() => {
        navigate("/cabinet/menu");
        window.location.reload(true);
      }, 500);
    };

    return (
      <>
        {!postEdit ? (
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            validate={(values) => {
              const errors = {};
              return errors;
            }}
          >
            {({ values, handleChange, handleBlur }) => (
              <PostForm>
                <FormField>
                  <FormTextField
                    label="Name"
                    fullWidth
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    variant="standard"
                    color="success"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="error-message"
                  />
                </FormField>
                <FormField sx={textArea}>
                  <FormTextArea
                    label="Description"
                    fullWidth
                    multiline
                    rows={5}
                    name="description"
                    value={values.description}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    variant="standard"
                    color="success"
                  />
                  <ErrorMessage
                    name="description"
                    component="div"
                    className="error-message"
                  />
                </FormField>
                <FormField>
                  <FormTextField
                    label="url"
                    fullWidth
                    name="idName"
                    value={values.idName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    variant="standard"
                    color="success"
                  />
                  <ErrorMessage
                    name="idName"
                    component="div"
                    className="error-message"
                  />
                </FormField>
                <Box sx={boxButton}>
                  <Button
                    variant="contained"
                    type="submit"
                    color="login"
                    sx={button}
                  >
                    Edit menu
                  </Button>
                </Box>
              </PostForm>
            )}
          </Formik>
        ) : (
          "Menu edited"
        )}
      </>
    );
  }
};

export default EditMenuItem;
