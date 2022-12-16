import express, { Application, Request, Response } from "express";
import UserRoute from "./src/routes/user";
import PostsRoute from "./src/routes/posts";
import AuthRoute from "./src/routes/auth";
import cors from "cors";
import bodyParser from "body-parser";

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

app.get("/", (req: Request, res: Response) => {
  res.send("you got /");
});

app.use("/user", UserRoute);
app.use("/posts", PostsRoute);
app.use("/auth", AuthRoute);

app.listen(8080, () => {
  console.log("server is running on 8080");
});
