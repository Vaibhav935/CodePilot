import jwt from "jsonwebtoken";
import { customError } from "../utils/response.utils.js";
import UserModel from "../models/user.model.js";

export const authMiddleware = async (req, res, next) => {
  try {
    const { refreshToken, accessToken } = req.cookies;

    if (!refreshToken || !accessToken) {
      return customError(res, 400, {}, "Unauthorized user");
    }

    const decode = jwt.verify(accessToken, process.env.JWT_SECRET);

    const user = await UserModel.findById(decode.id).select("-password");

    if (!user) throw new Error("Something went wronnt");

    req.user = user;

    next();
  } catch (error) {
    console.log(error);
    return customError(res, 500, {}, "Error in auth middleware", error);
  }
};
