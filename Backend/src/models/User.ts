import mongoose, { Schema, Document, mongo } from "mongoose";
export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
}
const UserSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { collection: "Users" }
);
export default mongoose.model<IUser>("User", UserSchema);
