import express, { Application, Request, Response } from "express";
import myPagesRoute from "./routes/mypagesRoute";
import startRoute from "./routes/startRoute";
import cors from "cors";
import bodyParser from "body-parser";
require("../services/database.ts");

const app: Application = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("you got /");
});

app.use("/mypages", myPagesRoute);
app.use("/start", startRoute);

app.listen(8080, () => {
  console.log("server is running on 8080");
});
