import express from "express";
import cors from "cors";
import { resolve } from "path";

import { userDefaultPath, userRouter } from "./src/users/usersRouter.js";
import {
  categoriesDefaultPath,
  categoryRouter,
} from "./src/rosdils/CategoriesRouter.js";
import { postDefaultPath, postRouter } from "./src/posts/PostsRouter.js";
import { mailDefaultPath, mailRouter } from "./src/mail/mailRouter.js";

export const app = express();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.static(resolve(process.cwd(), "static")));

app.use(userDefaultPath, userRouter);
app.use(mailDefaultPath, mailRouter);
app.use(categoriesDefaultPath, categoryRouter);
app.use(postDefaultPath, postRouter);

app.get("*", (req, res) => {
  res.sendFile(resolve(process.cwd(), "static", "index.html"));
  // завдяки цьому при перезавантажені сторінки ми повертаємось на ту самі сторінку
});
