"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRoute_1 = __importDefault(require("./routes/userRoute"));
const cors_1 = __importDefault(require("cors"));
const database_1 = __importDefault(require("./services/database"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
(0, database_1.default)();
app.get("/", (req, res) => {
    res.send("you got /");
});
app.use("/user", userRoute_1.default);
app.listen(8080, () => {
    console.log("server is running on 8080");
});
