import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });
  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000, //milliseconds format
    httpOnly: true, //prevent XSS attacks
    sameSite: "strict", //CSRF attacks cross-site req forgery attacks
    secure: process.env.NODE_ENV !== "development", //only send cookie over HTTPS
  });
};

export default generateTokenAndSetCookie;
 