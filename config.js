const dotenv = require("dotenv");
require("dotenv").config();

const admin_Secret = process.env.ADMIN_SECRET;
const NODE_ENV = process.env.NODE_ENV;
module.exports = {
  admin_Secret,
  NODE_ENV,
};
