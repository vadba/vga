import { sendMailTools } from "../utils/mail.js";

export const sendMail = async (req, res) => {
  try {
    const { name, email, website, subject } = req.body;
    const mail = await sendMailTools({
      name,
      email,
      website,
      subject,
    });

    res.json(mail);
    console.log(mail);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const MailController = {
  sendMail,
};
