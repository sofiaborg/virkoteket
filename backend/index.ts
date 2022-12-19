import { forceAuth } from "./src/middlewares/forceAuth";
import express, { Application, Request, Response, NextFunction } from "express";
import UserRoute from "./src/routes/user";
import PostsRoute from "./src/routes/posts";
import AuthRoute from "./src/routes/auth";
import cors from "cors";
import bodyParser from "body-parser";
const jwt = require("jsonwebtoken");
require("dotenv").config();

require("./services/database.ts");

const app: Application = express();

app.use(express.urlencoded({ extended: true }));
app.use((req: Request, res: Response, next: Function) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "*");
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

// app.use((req: Request, res: Response, next: NextFunction) => {
//   const { token } = req.cookies;

//   //login cookies OM INLOGGAD. Denna kod körs varje gång en req skickas. Om användare är logged in sätts variabeln loggedIn till true. Om ej inloggad sätts den till false.
//   if (token && jwt.verify(token, process.env.JWTSECRET)) {
//     const tokenData = jwt.decode(token, process.env.JWTSECRET);
//     res.locals.loggedIn = true;
//     res.locals.email = tokenData.email;
//     res.locals.userId = tokenData.userId;
//     // else
//   } else {
//     res.locals.loggedIn = false;
//   }
//   next();
// });

app.get("/", (req: Request, res: Response) => {});

app.use("/user", forceAuth, UserRoute);
app.use("/posts", forceAuth, PostsRoute);
app.use("/auth", AuthRoute);

app.listen(8000, () => {
  console.log("server is running on 8000");
});
