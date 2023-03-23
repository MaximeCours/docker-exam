require('dotenv').config()

module.exports = {
  HOST: 'database',
  USER: process.env.DB_USER,
  PASSWORD: process.env.DB_PASSWORD,
  DATABASE: process.env.DB_NAME,
  PORT: "3306",
};
