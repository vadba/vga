import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .matches(/^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ']+$/, "Введіть тільки букви")
    .required("Обов'язкове поле")
    .min(2, "Не менше 2 символів!"),
  secondName: Yup.string()
    .matches(/^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ']+$/, "Введіть тільки букви")
    .required("Обов'язкове поле")
    .min(2, "Більше двох символів!"),
  email: Yup.string()
    .email("Невірний формат email")
    .required("Обов'язкове поле"),
  password: Yup.string()
    .required("Обов'язкове поле")
    .min(6, "Мінімальна довжина пароля - 6 символів"),
  confirmPassword: Yup.string()
    .required("Обов'язкове поле")
    .oneOf([Yup.ref("password"), null], "Паролі повинні співпадати"),
});
