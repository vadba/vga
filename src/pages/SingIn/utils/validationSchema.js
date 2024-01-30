import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Невірний формат email")
    .required("Обов'язкове поле"),
  password: Yup.string()
    .required("Обов'язкове поле")
    .min(6, "Мінімальна довжина пароля - 6 символів"),
});
