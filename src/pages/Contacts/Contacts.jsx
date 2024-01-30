import "./style/fonts/impressionist/stylesheet.css";
import "./style/style.scss";
import {
  FormWrap,
  PictureDesc,
  PictureWrap,
  SignatureWrap,
  Single,
  SocialIcon,
  SocialLink,
  Wrap,
} from "./style/Contacts.styled.js";
import { validationSchema } from "./utils/validationSchema.js";
import { initialValues } from "./utils/initialValues";
import { PostForm } from "../../components/CreateNewPost/style/CreateNewPost.styled.js";
import {
  FormField,
  FormTextField,
  FormTextArea,
} from "./style/Contacts.styled";
import { ErrorMessage, Formik } from "formik";
import { textArea } from "./style/Contacts.styled";
import { Box } from "@mui/system";
import { boxButton, button } from "../SingUp/style/SingUp.styled.js";
import { Button } from "@mui/material";
import logo from "../../assets/golian2800.jpg";
import Facebook from "../../assets/facebook.svg?react";
import Instagram from "../../assets/instagram.svg?react";
import Twitter from "../../assets/twitter.svg?react";
import { request } from "../../tools/request.js";

const Contacts = () => {
  const onSubmit = async (values, { resetForm }) => {
    let postResp;
    try {
      postResp = await request({
        url: "send-mail",
        method: "POST",
        body: values,
      });
      const { status } = postResp;
    } catch (e) {
      console.error("Error fetching product:", e);
    }
    console.log(postResp);
    resetForm();
  };
  return (
    <Wrap>
      <PictureWrap>
        <img alt="Contact" src={logo} className="imgContact" />
        <PictureDesc>
          <br />
          We'd love to hear from you! We aim to answer all emails within our
          normal business hours of M-F, 9-4pm.
          <br />
          <br />
          Use the form below or email us at email@email.com
        </PictureDesc>
        <SocialIcon>
          <SocialLink to="https://www.facebook.com/" target="_blank">
            <Facebook />
          </SocialLink>
          <SocialLink to="https://www.instagram.com/" target="_blank">
            <Instagram />
          </SocialLink>
          <SocialLink to="https://www.twitter.com/" target="_blank">
            <Twitter />
          </SocialLink>
        </SocialIcon>
        <Single>Golian</Single>
      </PictureWrap>
      <FormWrap>
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
            <PostForm className="contact-form">
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
              <FormField>
                <FormTextField
                  label="email"
                  fullWidth
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  variant="standard"
                  color="success"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="error-message"
                />
              </FormField>
              <FormField>
                <FormTextField
                  label="Website"
                  fullWidth
                  name="website"
                  value={values.website}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  variant="standard"
                  color="success"
                />
                <ErrorMessage
                  name="website"
                  component="div"
                  className="error-message"
                />
              </FormField>
              <FormField sx={textArea}>
                <FormTextArea
                  label="SUBJECT OF INQUIRY"
                  fullWidth
                  multiline
                  rows={3}
                  name="subject"
                  value={values.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  variant="standard"
                  color="success"
                />
                <ErrorMessage
                  name="subject"
                  component="div"
                  className="error-message"
                />
              </FormField>
              <Box sx={boxButton} className="button-submit">
                <Button
                  variant="contained"
                  type="submit"
                  color="login"
                  sx={button}
                >
                  Send me
                </Button>
              </Box>
            </PostForm>
          )}
        </Formik>
        <SignatureWrap>get in touch</SignatureWrap>
      </FormWrap>
    </Wrap>
  );
};

export default Contacts;
