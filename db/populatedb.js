#! /usr/bin/env node

const { Client } = require("pg");
require("dotenv").config();

const SQL = `
CREATE TABLE IF NOT EXISTS rarities (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  rarity_name VARCHAR (225) UNIQUE NOT NULL
);
CREATE TABLE IF NOT EXISTS cards (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR ( 255 ),
  health INTEGER,
  damage INTEGER,
  rarity VARCHAR (225) REFERENCES rarities(rarity_name) ON DELETE CASCADE 
);
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: `postgresql://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@localhost:${process.env.DATABASE_PORT}/${process.env.DATABASE_NAME}`,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
