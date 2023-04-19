import jwt from "jsonwebtoken";
import config from "../config/index.js";

const secretKey = config.JWT_KEY;

const generateToken = async (payload, secret = secretKey) => {
  const token = await jwt.sign(payload, secret, {expiresIn: "1d"});
  return token;
};

export default generateToken;
