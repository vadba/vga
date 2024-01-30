import { boxButton, button } from "../../pages/SingUp/style/SingUp.styled.js";
import "./style/style.scss";
import { ErrorMessage, Formik, useField } from "formik";
import { initialValues } from "./utils/initialValues.js";
import { validationSchema } from "./utils/validationSchema.js";
import { Box } from "@mui/system";
import { Button, FormControlLabel, FormGroup, Checkbox } from "@mui/material";
import { Editor } from "@tinymce/tinymce-react";

import {
  CategoryFieldErr,
  checkbox,
  FormChecked,
  FormField,
  FormFieldShort,
  FormTextArea,
  FormTextField,
  PostForm,
  textArea,
} from "./style/CreateNewPost.styled.js";
import { useSelector } from "react-redux";
import { useRef, useState } from "react";
import jwtDecode from "jwt-decode";
import { request } from "../../tools/request.js";

const token = document.cookie ? document.cookie.replace("post=", "") : false;
const { _id } = document.cookie ? jwtDecode(token) : false;

const CreateNewPost = () => {
  const [postCreated, setPostCreated] = useState(false);
  const { dataCategories } = useSelector((state) => state.categorySlice);

  const editorRef = useRef(null);

  const onSubmit = async (values, { resetForm }) => {
    const newValues = {
      title: values.title,
      short: values.short,
      content: values.content,
      inMain: values.inMain,
      img: values.img,
      categories: values.categories,
      author: values.author,
      user: _id,
    };

    let postResp;
    try {
      postResp = await request({
        url: "post",
        method: "POST",
        body: newValues,
      });
    } catch (e) {
      console.error("Error fetching product:", e);
    }

    const { status } = postResp;

    console.log(newValues);

    resetForm();
    setPostCreated(true);
  };

  return (
    <>
      {!postCreated ? (
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
                  label="Title"
                  fullWidth
                  name="title"
                  value={values.title}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  variant="standard"
                  color="success"
                />
                <ErrorMessage
                  name="title"
                  component="div"
                  className="error-message"
                />
              </FormField>
              <FormField sx={FormFieldShort}>
                <FormTextArea
                  label="Short Description"
                  fullWidth
                  multiline
                  rows={3}
                  name="short"
                  value={values.short}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  variant="standard"
                  color="success"
                />
                <ErrorMessage
                  name="short"
                  component="div"
                  className="error-message"
                />
              </FormField>
              <FormField sx={textArea}>
                <Editor
                  apiKey="szcd12gqd73szgnz6pgubw9a8qk4lirpg4eoyttq3puyrw9w"
                  onInit={(evt, editor) => (editorRef.current = editor)}
                  onEditorChange={(newValue, editor) =>
                    (values.content = newValue)
                  }
                  onBlur={(e) => {
                    handleBlur({ target: { name: "content", value: e } });
                  }}
                  initialValue={values.content}
                  init={{
                    placeholder: "Content in this",
                    height: 500,
                    menubar: false,
                    plugins:
                      "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount code",
                    toolbar:
                      "link image media table mergetags | bold italic underline strikethrough | code | align lineheight | undo redo | blocks fontfamily fontsize | tinycomments | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
                    content_style:
                      "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                  }}
                />

                {/*<FormTextArea*/}
                {/*  label="Content"*/}
                {/*  fullWidth*/}
                {/*  multiline*/}
                {/*  rows={15}*/}
                {/*  name="content"*/}
                {/*  value={values.content}*/}
                {/*  onChange={handleChange}*/}
                {/*  onBlur={handleBlur}*/}
                {/*  variant="standard"*/}
                {/*  color="success"*/}
                {/*/>*/}
                <ErrorMessage
                  name="content"
                  component="div"
                  className="error-message"
                />
              </FormField>
              <FormChecked>
                <FormControlLabel
                  control={<Checkbox color="success" />}
                  name="inMain"
                  value={true}
                  label="inMain"
                  onChange={handleChange}
                  sx={checkbox}
                />
              </FormChecked>
              <FormField>
                <FormTextField
                  label="Top image (url cloudinary)"
                  fullWidth
                  name="img"
                  value={values.img}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  variant="standard"
                  color="success"
                />
                <ErrorMessage
                  name="img"
                  component="div"
                  className="error-message"
                />
              </FormField>
              <FormGroup>
                {!!dataCategories &&
                  dataCategories.map((category) => (
                    <FormControlLabel
                      key={category.id}
                      control={<Checkbox color="success" />}
                      name="categories"
                      value={category.id}
                      label={category.name}
                      onChange={handleChange}
                      sx={checkbox}
                    />
                  ))}
              </FormGroup>
              <CategoryFieldErr>
                <ErrorMessage
                  name="categories"
                  component="div"
                  className="error-message"
                />
              </CategoryFieldErr>
              <FormField>
                <FormTextField
                  label="Author"
                  fullWidth
                  name="author"
                  value={values.author}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  variant="standard"
                  color="success"
                />
                <ErrorMessage
                  name="author"
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
                  Create post
                </Button>
              </Box>
            </PostForm>
          )}
        </Formik>
      ) : (
        "Post created"
      )}
    </>
  );
};

export default CreateNewPost;
