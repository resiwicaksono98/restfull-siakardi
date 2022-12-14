import { Sequelize } from "sequelize";
import { dbName, dbHost, dbUser, dbPass, dbPort } from "./config.js";

const db = new Sequelize(dbName, dbUser, dbPass, {
  host: dbHost,
  dialect: "mysql",
});

export default db;
