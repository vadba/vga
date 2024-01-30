import mongoose from "mongoose";

export const Post = new mongoose.Schema(
  {
    title: { type: String, required: true },
    short: { type: String, required: true },
    content: { type: String, required: true },
    inMain: { type: Boolean },
    categories: [
      { type: mongoose.Types.ObjectId, ref: "RosdilsDB", required: true },
    ],
    img: { type: String },
    author: { type: String },
    user: { type: mongoose.Types.ObjectId, ref: "UserDB" },
  },
  {
    timestamps: true,
    versionKey: false,
    id: true,
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
        delete ret.password;
      },
    },
  }
);
