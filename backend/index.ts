import { forceAuth } from "./src/middlewares/forceAuth";
import express, { Application, Request, Response, NextFunction } from "express";
import UserRoute from "./src/routes/user";
import PostsRoute from "./src/routes/posts";
import AuthRoute from "./src/routes/auth";
import cors from "cors";
import bodyParser from "body-parser";
const jwt = require("jsonwebtoken");
const path = require("path");
require("dotenv").config();

require("./services/database.ts");

const app: Application = express();

app.use(express.static("../frontend/src/assets/"));
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "25mb", extended: true }));
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.use((req: Request, res: Response, next: NextFunction) => {
  // res.header("Access-Control-Allow-Origin", "*");
  // res.header(
  //   "Access-Control-Allow-Headers",
  //   "x-www-form-urlencoded, Origin, X-Requested-With, Accept, Authorization, *"
  // );

  //   const { token } = req.cookies;

  //login cookies OM INLOGGAD. Denna kod körs varje gång en req skickas. Om användare är logged in sätts variabeln loggedIn till true. Om ej inloggad sätts den till false.
  //   if (token && jwt.verify(token, process.env.JWTSECRET)) {
  //   const tokenData = jwt.decode(token, process.env.JWTSECRET);
  // res.locals.loggedIn = true;
  //res.locals.email = tokenData.email;
  //res.locals.id = tokenData.id;
  // else
  //} else {
  // res.locals.loggedIn = false;
  //}
  next();
});

app.get("/", (req: Request, res: Response) => {});

app.use("/user", UserRoute);
app.use("/posts", PostsRoute);
app.use("/auth", AuthRoute);

app.listen(8000, () => {
  console.log("server is running on 8000");
});
