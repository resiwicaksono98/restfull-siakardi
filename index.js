import express from "express";
import cors from "cors";
import morgan from "morgan";
import session from "express-session";
import sequelizeStore from "connect-session-sequelize";
import { dbPort } from "./config/config.js";

const app = express();

app.listen(dbPort, () => console.log("Server is running in port 5000"));
