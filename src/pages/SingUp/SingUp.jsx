import { useDispatch } from "react-redux";
import { useEffect } from "react";
import "./style/fonts/stylesheet.css";
import "./style/SingUp.scss";
import { clearPosts } from "../../redux/slice/postsCategorySlice.js";
import { stateSingIn, stateUsers } from "../../redux/slice/singInSlice.js";
import { request } from "../../tools/request.js";
import { validationSchema } from "./utils/validationSchema.js";
import { initialValues } from "./utils/initialValues.js";
import {
  boxButton,
  button,
  ChangedTextField,
  ContanerFlex,
  FormContainer,
  formField,
} from "./style/SingUp.styled.js";
import { ErrorMessage, Form, Formik } from "formik";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

// delete cookie
// document.cookie = "post" + "=; Max-Age=0";

const SingUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearPosts());
  }, []);

  const onSubmit = async (values, { resetForm }) => {
    let authorResp;
    try {
      authorResp = await request({
        url: "users",
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
    console.log(values);

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
                  label="Ваше ім'я"
                  fullWidth
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  variant="standard"
                />
                <ErrorMessage
                  name="firstName"
                  component="div"
                  className="error-message"
                />
              </Box>
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
                  label="Ваше прізвище"
                  fullWidth
                  name="secondName"
                  value={values.secondName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  variant="standard"
                />
                <ErrorMessage
                  name="secondName"
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
              <Box sx={formField}>
                <ChangedTextField
                  fullWidth
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  label="Підтвердіть пароль"
                  variant="standard"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage
                  name="confirmPassword"
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
                  Sign up
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </FormContainer>
    </ContanerFlex>
  );
};

export default SingUp;
