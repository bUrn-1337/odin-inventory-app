const { Pool } = require("pg");

module.exports = new Pool({
  host: "localhost",
  user: "burn",
  database: "inventory",
  password: process.env.DATABASE_PASSWORD,
  port: process.env.DATABASE_PORT 
});
