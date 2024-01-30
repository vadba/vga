import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  title: Yup.string()
    .matches(/^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ –&-?']+$/, "Введіть тільки букви")
    .required("Обов'язкове поле")
    .min(3, "Не менше 2 символів!"),
  content: Yup.string()
    // .matches(/^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ -=,<>"/:.\n']+$/, "Введіть тільки букви")
    .required("Обов'язкове поле")
    .min(10, "Більше двох символів!"),
  short: Yup.string()
    // .matches(/^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ -=,<>"/:.\n']+$/, "Введіть тільки букви")
    .required("Обов'язкове поле")
    .min(2, "Більше двох символів!"),
  categories: Yup.array()
    .required("Виберіть категорію")
    .min(1, "Виберіть категорію"),
});
