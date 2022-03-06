import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    name: { type: String },
    password: { type: String, required: true },
    phones: [{ type: String }],
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "comment" }],
    role: { type: String, enum: ["Administrator", "User"], default: "User" },
  },
  { timestamps: true }
);

const userModel = mongoose.model("user", userSchema);

export default userModel;
