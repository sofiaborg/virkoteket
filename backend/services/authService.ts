import { DocumentDefinition } from "mongoose";
import { Users, I_UserDocument } from "../src/models/UserModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../src/middleware/auth";

export async function register(
  user: DocumentDefinition<I_UserDocument>
): Promise<void> {
  try {
    await Users.create(user);
  } catch (error) {
    throw error;
  }
}

export async function login(user: DocumentDefinition<I_UserDocument>) {
  try {
    const foundUser = await Users.findOne({ email: user.email });

    if (!foundUser) {
      throw new Error("Email does not exist");
    }

    const isMatch = bcrypt.compareSync(user.password, foundUser.password);

    if (isMatch) {
      const token = jwt.sign(
        { _id: foundUser._id?.toString(), email: foundUser.email },
        SECRET_KEY,
        {
          expiresIn: "2 days",
        }
      );

      return { user: { user }, token: token };
    } else {
      throw new Error("Password is not correct");
    }
  } catch (error) {
    throw error;
  }
}
