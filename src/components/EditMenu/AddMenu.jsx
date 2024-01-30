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

const AddMenu = () => {
  const [postEdit, setPostEdit] = useState(false);
  const navigate = useNavigate();

  const initialValues = {
    name: "",
    description: "",
    idName: "",
    parentId: "",
    level: "",
  };

  const onSubmit = async (values, { resetForm }) => {
    if (!!values.name && !!values.idName) {
      console.log(values);
      let postResp;

      try {
        postResp = await request({
          url: "categories",
          method: "POST",
          body: values,
        });
        const { status } = postResp;
      } catch (err) {
        console.error("Error fetching product:", err.data.errors[0].message);
      }

      console.log(postResp.err?.data);

      if (!postResp.err) {
        resetForm();
        setPostEdit(true);
        setTimeout(() => {
          navigate("/cabinet/menu");
          window.location.reload(true);
        }, 500);
      }
    }
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
                  Add menu
                </Button>
              </Box>
            </PostForm>
          )}
        </Formik>
      ) : (
        "Menu added"
      )}
    </>
  );
};

export default AddMenu;
