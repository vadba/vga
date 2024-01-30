import nodemailer from "nodemailer";
import HTML_TEMPLATE from "./mailTemplate.js";

// const transporter = nodemailer.createTransport({
//   host: 'smtp.ukr.net',
//   port: 465,
//   secure: true,
//   auth: {
//     user: 'pharmacy_shop@ukr.net',
//     pass: '73tOm3Qhbe71AhIn',
//   },
//   tls: { rejectUnauthorized: false },
// });

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "vgeblog@gmail.com",
    pass: "ewef jpgx bgpz cdbo",
  },
  tls: { rejectUnauthorized: false },
});

export const sendMailOrder = async ({ products, email, totalPrice }) => {
  const productsList = products.map(
    ({ name, price, quantity }) =>
      `<li>${name} ціна: ${price} грн    кількість: ${quantity} шт  разом: ${
        price * quantity
      } грн </li>`
  );
  const productsWithoutCommas = productsList.join(", ").replace(/,/g, "");
  const message = `<p>Привіт, шановний клієнт. Це ваше замовлення </p>
        <ul>${productsWithoutCommas}</ul>
        <hr>
        <div style="text-align: right">РАЗОМ:  ${totalPrice} грн</div>
        `;
  await transporter.sendMail({
    from: "vgeblog@gmail.com",
    to: email,
    subject: "Ваше замовлення від сайту Pharmacy ",
    text: "message",
    html: HTML_TEMPLATE(message),
  });
};

export const sendMailRegistration = async ({
  email,
  firstName,
  secondName,
  password,
}) => {
  const message =
    "Привіт, шановний(на) " +
    firstName +
    " " +
    secondName +
    ".Ваша реєстрація успішна. Ваша пошта: " +
    email +
    ", Ваш пароль: " +
    password;
  await transporter.sendMail({
    // from: 'pharmacy_shop@ukr.net',
    from: "vgeblog@gmail.com",
    to: email,
    subject: "Ваші реєстраційні дані на Blog",
    text: message,
    html: HTML_TEMPLATE(message),
  });
};

export const sendMailTools = async ({ name, email, website, subject }) => {
  const message =
    "Вам написав повідомлення з блогу " +
    name +
    ", пошта: " +
    email +
    ", сайт: " +
    website +
    ", на тему: " +
    subject;

  await transporter.sendMail({
    // from: 'pharmacy_shop@ukr.net',
    from: "vgeblog@gmail.com",
    to: "vgeblog@gmail.com",
    subject: `Message from Blog author ${name}`,
    text: message,
    html: HTML_TEMPLATE(message),
  });
};
