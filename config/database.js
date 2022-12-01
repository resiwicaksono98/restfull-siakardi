import { Sequelize } from "sequelize";
import { dbName, dbHost, dbUser, dbPass, dbPort } from "./config.js";

const db = new Sequelize(dbName, dbUser, dbPass, {
  host: "127.0.0.1",
  dialect: "mysql",
});

export default db;
