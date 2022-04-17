import mongoose from "mongoose";
import validator from "validator";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "لطفاً نام خود را وارد کنید"],
    minlength: 3,
    maxlength: 25,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "لطفاً ایمیل خود را وارد کنید"],
    validate: {
      validator: validator.isEmail,
      message: "لطفاً ایمیل معتبر وارد کنید",
    },
    unique: true,
  },
  password: {
    type: String,
    required: [true, "لطفاً کلمه عبور خود را وارد کنید"],
    minlength: 6,
  },
  lastName: {
    type: String,
    maxlength: 25,
    trim: true,
    default: "last name",
  },
  location: {
    type: String,
    maxlength: 25,
    trim: true,
    default: "my city",
  },
});

export default mongoose.model("User", UserSchema);
