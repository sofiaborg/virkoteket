import express, { Application, Request, Response } from "express";
import UserRoute from "./routes/user";
import PostsRoute from "./routes/posts";
import AuthRoute from "./routes/auth";
import cors from "cors";
import bodyParser from "body-parser";

require("../services/database.ts");

const app: Application = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.get("/", cors(), (req: Request, res: Response) => {
  res.send("you got /");
});

app.use("/user", UserRoute);
app.use("/posts", PostsRoute);
app.use("/auth", AuthRoute);

app.listen(8080, () => {
  console.log("server is running on 8080");
});
