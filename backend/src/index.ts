import express, { Request, Response } from "express";
import { json } from "body-parser";
import userRouter from "./routes/userRoute";
import cors from "cors";
import connectDB from "./services/database";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

connectDB();

app.get("/", (req: Request, res: Response) => {
  res.send("you got /");
});

app.use("/user", userRouter);

app.listen(8080, () => {
  console.log("server is running on 8080");
});
