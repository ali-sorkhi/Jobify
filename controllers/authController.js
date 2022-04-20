import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, UnauthenticatedError } from "../errors/index.js";

const register = async (req, res, next) => {
  /* try {
    const user = await User.create(req.body);
    res.status(201).json({ user });
  } catch (error) {
    next(error);
  } */
  // *** if we use express-async-errors package we can remove try{}catch{}
  // this means error will automatically be sent to error handler

  //getting data from front-end
  const { name, email, password } = req.body;

  //check if all fields are filled
  if (!name || !email || !password)
    throw new BadRequestError("لطفاً همه فیلدها را پر نمایید");

  //find if email already exist
  const userAlreadyExists = await User.findOne({ email });
  if (userAlreadyExists) {
    throw new BadRequestError("ایمیل تکراری می باشد");
  }

  //creating user in DB:
  const user = await User.create({ name, email, password });

  //creating JWT:
  const token = user.createJWT();

  //sending response to font-end
  res.status(StatusCodes.CREATED).json({
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
  //get email and password from front-end
  const { email, password } = req.body;

  //check if all fields are filled
  if (!email || !password)
    throw new BadRequestError("لطفاً همه فیلدها را پر نمایید");

  //find the user and add password
  const user = await User.findOne({ email }).select("+password");

  //throw error if user not found
  if (!user) {
    throw new UnauthenticatedError("نام کاربری یا کلمه عبور اشتباه می باشد.");
  }

  //compare user password
  const isPasswordCorrect = await user.comparePassword(password);

  //throw error if password is incorrect
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError("نام کاربری یا کلمه عبور اشتباه می باشد.");
  }

  //creating JWT:
  const token = user.createJWT();

  //remove the password from response
  user.password = undefined;

  //sending response to font-end
  res.status(StatusCodes.OK).json({
    user,
    token,
    location: user.location,
  });
};

const updateUser = async (req, res) => {
  res.send("update user");
};

export { register, login, updateUser };
