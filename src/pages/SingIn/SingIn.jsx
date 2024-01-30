import { useDispatch } from "react-redux";
import { useEffect } from "react";
import "./style/fonts/stylesheet.css";
import "./style/SingIn.scss";
import { clearPosts } from "../../redux/slice/postsCategorySlice.js";
import { request } from "../../tools/request.js";
import { validationSchema } from "./utils/validationSchema.js";
import {
  boxButton,
  button,
  ChangedTextField,
  ContanerFlex,
  FormContainer,
  formField,
} from "./style/SingIn.styled.js";
import { ErrorMessage, Form, Formik } from "formik";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { stateSingIn, stateUsers } from "../../redux/slice/singInSlice.js";

const SingIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearPosts());
  }, []);

  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = async (values, { resetForm }) => {
    let authorResp;
    try {
      authorResp = await request({
        url: "users/login",
        method: "POST",
        body: values,
      });
      const { status } = authorResp;

      const { token } = authorResp.result;
      document.cookie = `post=${token}`;
      dispatch(stateSingIn());
      dispatch(stateUsers());

      navigate("/cabinet");
    } catch (e) {
      console.error("Error fetching product:", e);
    }

    resetForm();
  };

  return (
    <ContanerFlex>
      <FormContainer>
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
            <Form className="form">
              <Box sx={formField}>
                <ChangedTextField
                  label="Ваш e-mail"
                  fullWidth
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  variant="standard"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="error-message"
                />
              </Box>
              <Box sx={formField}>
                <ChangedTextField
                  fullWidth
                  type="password"
                  id="password"
                  name="password"
                  label="Введіть пароль"
                  variant="standard"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="error-message"
                />
              </Box>
              <Box sx={boxButton}>
                <Button
                  variant="contained"
                  type="submit"
                  color="login"
                  sx={button}
                >
                  Sign in
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </FormContainer>
    </ContanerFlex>
  );
};

export default SingIn;
