import { Router } from "express";
import { MailController } from "./mailController.js";

export const mailRouter = new Router();
export const mailDefaultPath = "/server/send-mail";

mailRouter.post("/", MailController.sendMail);
