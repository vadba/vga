import mongoose from "mongoose";
import { Post } from "./PostSchema.js";

export default mongoose.model("PostDB", Post, "posts");
