import express from "express";
import cors from "cors";
import morgan from "morgan";
import session from "express-session";
import sequelizeStore from "connect-session-sequelize";
import { dbPort, secretKey } from "./config/config.js";
import db from "./config/database.js";
import authRouter from "./app/auth/router.js";
import deseaseRouter from "./app/desease/router.js";
import symptomRouter from "./app/symptom/router.js";
import resultRouter from "./app/result/router.js";

const app = express();

(async () => {
  await db.sync();
})();

const sessionStore = sequelizeStore(session.Store);
const store = new sessionStore({
  db: db,
});

app.use(
  session({
    secret: secretKey,
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
      secure: "auto",
      maxAge: 1000 * 60 * 60 * 24 * 1, // 1 Day
    },
  })
);

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000"],
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(express.static("public"));

// App
app.use("/api", authRouter);
app.use("/api", deseaseRouter);
app.use("/api", symptomRouter);
app.use("/api", resultRouter);

app.listen(dbPort, () => console.log("Server is running in port 5000"));
