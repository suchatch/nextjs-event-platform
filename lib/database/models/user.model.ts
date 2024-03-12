import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  firstName: { type: String, required: false },
  lastName: {type: String, required: false },
  photo: { type: String, required: false },
})

const User = models.User || model('User', UserSchema);

export default User;