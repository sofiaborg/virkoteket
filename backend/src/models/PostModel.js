"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostModel = exports.PostSchema = void 0;
const mongoose_1 = require("mongoose");
exports.PostSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    type: {
        type: Number,
        required: true,
    },
    category: {
        type: Number,
        required: true,
    },
    difficulty: {
        type: Number,
        required: true,
    },
    yarn: {
        type: Number,
        required: true,
    },
    hook: {
        type: Number,
        required: true,
    },
    space: {
        type: Number,
        required: true,
    },
    reviews: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "Reviews" }],
});
exports.PostModel = (0, mongoose_1.model)("Posts", exports.PostSchema);
//krk
