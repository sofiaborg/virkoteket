"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PostModel_1 = require("../models/PostModel");
const UserModel_1 = require("../models/UserModel");
const ReviewModel_1 = require("../models/ReviewModel");
const router = express_1.default.Router();
router.post("/createuser", [], (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = new UserModel_1.UserModel({
        mail: req.body.title,
    });
    yield newUser.save();
    res.send("skapat ny user");
}));
router.post("/createpost", [], (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newPost = new PostModel_1.PostModel({
        title: req.body.title,
        image: req.body.title,
        description: req.body.title,
        type: req.body.title,
        category: req.body.title,
        difficulty: req.body.title,
        yarn: req.body.title,
        hook: req.body.title,
        space: req.body.title,
    });
    yield newPost.save();
    res.send("skapad");
}));
router.post("/createreview", [], (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newReview = new ReviewModel_1.ReviewModel({
        grade: req.body.title,
        comment: req.body.title,
        image: req.body.title,
    });
    yield newReview.save();
    res.send("skapat ny review");
}));
exports.default = router;
