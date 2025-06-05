const { Pool } = require("pg");

module.exports = new Pool({
  host: "localhost",
  user: process.env.DATABASE_USER,
  database: process.env.DATABASE_NAME,
  password: process.env.DATABASE_PASSWORD,
  port: process.env.DATABASE_PORT 
});
