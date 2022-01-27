const jwt = require("jsonwebtoken");
const token = process.env.JWT_SECRET;

const generateToken = (id) => {
  return jwt.sign({
    exp: Math.floor(Date.now() / 1000) + (60 * 60),
    data: id
  }, token);
};

module.exports = generateToken;
