import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError } from "../errors/index.js";

const register = async (req, res, next) => {
  /* try {
    const user = await User.create(req.body);
    res.status(201).json({ user });
  } catch (error) {
    next(error);
  } */
  // *** if we use express-async-errors package we can remove try{}catch{}
  // this means error will automatically be sent to error handler
  const { name, email, password } = req.body;
  if (!name || !email || !password)
    throw new BadRequestError("لطفاً همه فیلدها را پر نمایید");

  const userAlreadyExists = await User.findOne({ email });
  if (userAlreadyExists) {
    throw new BadRequestError("ایمیل تکراری می باشد");
  }
  //creating user in DB:
  const user = await User.create({ name, email, password });
  //creating JWT:
  const token = user.createJWT();

  res.status(StatusCodes.OK).json({
    user: {
      email: user.email,
      name: user.name,
      lastName: user.lastName,
      location: user.location,
    },
    token,
    location: user.location,
  });
};

const login = async (req, res) => {
  res.send("login user");
};

const updateUser = async (req, res) => {
  res.send("update user");
};

export { register, login, updateUser };
