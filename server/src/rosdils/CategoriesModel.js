import mongoose from "mongoose";

const Rosdil = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String },
    idName: { type: String, required: true, unique: true },
    parentId: { type: String },
    level: { type: String },
  },
  {
    timestamps: false,
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

export default mongoose.model("RosdilsDB", Rosdil, "rosdils");
