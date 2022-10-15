require('dotenv').config();

module.exports = {
  dialect: `${process.env.DB_DIALECT}`,
  database: `${process.env.DB_NAME}`,
  username: `${process.env.DB_USERNAME}`,
  password: `${process.env.DB_PASSWORD}`,
  host: `${process.env.DB_HOST}`,
  port: `${process.env.DB_PORT}`,
  define: {
    timestamps: true,
    underscored: true,
  },
};
