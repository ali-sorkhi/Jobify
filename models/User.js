import mongoose from "mongoose";
import validator from "validator";
//for hashing password
import bcrypt from "bcryptjs";
//for json web token
import jwt from "jsonwebtoken";

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
    select: false,
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

//this executes every time before save (findOneAndUpdate doesn't trigger this)
//for hashing password
UserSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.createJWT = function () {
  return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });
};

UserSchema.methods.comparePassword = async function (candidatePassword) {
  const isMatch = await bcrypt.compare(candidatePassword, this.password);
  return isMatch;
};

export default mongoose.model("User", UserSchema);
