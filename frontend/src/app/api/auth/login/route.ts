import * as Yup from "yup";
import { NextResponse } from "next/server";
import prisma from "@/app/libs/db";
import bcrypt from "bcrypt";
import { IAccessToken } from "@/app/libs/types";
import moment from "moment";
import jwt from "jsonwebtoken"
import { signAccessToken } from "../signup/route";

const validationSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
});

export async function POST(req: Request, res: Response){
  const input = await req.json();
    //   Validate the input
    try {
      await validationSchema.validate(input, { abortEarly: false });
    } catch (error: any) {
      if (error) {
        let validationErrors: any = {};
        error.inner.forEach((err: any) => {
          validationErrors[err.path] = err.message;
        });
        return NextResponse.json(
          { success: false, errors: validationErrors },
          { status: 400 }
        );
      }
    }
  // Check if user exists
  const user = await prisma.user.findUnique({
    where: {
      username: input.username,
    },
  });
  if (!user) {
    return NextResponse.json(
      { success: false, errors: { user_exists: "User or password is invalid" } },
      { status: 400 }
    );
  }

// Check if passwords match
const doesPasswordMatch = await bcrypt.compare(input.password,user.password)
if (!doesPasswordMatch) {
  return NextResponse.json(
    { success: false, errors: { user_exists: "User or password is invalid" } },
    { status: 400 }
  );
}

//   Create a JWT 
const token = await signAccessToken({
  id: user?.id!,
  username: user?.username!
})

// Response with Token
return NextResponse.json({
  success: true,
  message: "User logged in",
  token: "Bearer " + token
});
}
