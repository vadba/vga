import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ –&-?']+$/, "Введіть тільки букви")
    .required("Обов'язкове поле")
    .min(3, "Не менше 2 символів!"),
  idName: Yup.string()
    .matches(/^[A-Za-z-\n']+$/, "Введіть тільки англ букви")
    .required("Обов'язкове поле")
    .min(3, "Більше двох символів!"),
});
