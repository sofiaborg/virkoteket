import express, { Application, Request, Response } from "express";
import { json } from "body-parser";
import userRouter from "./routes/userRoute";
import cors from "cors";
require("./services/database.ts");

const app: Application = express();
app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("you got /");
});

app.use("/user", userRouter);

app.listen(8080, () => {
  console.log("server is running on 8080");
});
