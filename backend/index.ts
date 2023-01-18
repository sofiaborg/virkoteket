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
  next();
});

app.get("/", (req: Request, res: Response) => {});

app.use("/user", UserRoute);
app.use("/posts", PostsRoute);
app.use("/auth", AuthRoute);

app.listen(8000, () => {
  console.log("server is running on 8000");
});
