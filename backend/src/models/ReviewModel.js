"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewModel = exports.ReviewSchema = void 0;
const mongoose_1 = require("mongoose");
exports.ReviewSchema = new mongoose_1.Schema({
    grade: {
        type: Number,
        required: true,
    },
    comment: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: false,
    },
});
exports.ReviewModel = (0, mongoose_1.model)("Reviews", exports.ReviewSchema);
