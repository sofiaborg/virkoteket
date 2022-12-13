"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = exports.UserSchema = void 0;
const mongoose_1 = require("mongoose");
exports.UserSchema = new mongoose_1.Schema({
    mail: {
        type: String,
        required: true,
    },
    // password: {
    //   type: String,
    //   required: true,
    // },
    // image: {
    //   type: String,
    //   required: true,
    // },
    // description: {
    //   type: String,
    //   required: true,
    // },
    // posts: [{ type: Schema.Types.ObjectId, ref: "Posts" }],
});
exports.UserModel = (0, mongoose_1.model)("Users", exports.UserSchema);
