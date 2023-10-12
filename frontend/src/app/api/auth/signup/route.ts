// TDL
// 1. Create a POST endpoint ✓
// 2. Validate Endpoint ✓
// 3. Check if user exits ✓
// 4. If User doesnt exist
//      4.1 Encrypt user's password -> use bcrypt.js library ✓
//      4.2 add user details in db ✓
// 5. Create a JWT
//      5.1 Expires at logic ✓
//      5.2 Create and sign jwt and send it as response ✓

import * as Yup from "yup";
import { NextResponse } from "next/server";
import prisma from "@/app/libs/db";
import bcrypt from "bcrypt";
import { IAccessToken } from "@/app/libs/types";
import moment from "moment";
import jwt from "jsonwebtoken"

const validationSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
  confirm_password: Yup.string()
    .required("Confirm password is required")
    .oneOf([Yup.ref("password")], "Passwords must match"),
});

export async function POST(req: Request, res: Response) {
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
  const userExists = await prisma.user.findUnique({
    where: {
      username: input.username,
    },
  });
  // Check if user exists
  if (userExists) {
    return NextResponse.json(
      { success: false, errors: { user_exists: "User already exists" } },
      { status: 400 }
    );
  }
  //   Store user details in DB
  let user 
  try {
    const hashedPassword = await bcrypt.hash(input.password, 10);
     user = await prisma.user.create({
      data: {
        username: input.username,
        password: hashedPassword,
      },
    });
  } catch (err) {
    NextResponse.json({
      message: "An error occured during sign up",
      err,
    });
  }
//   Create a JWT 
const signAccessToken = async (data: IAccessToken)=>{
    const exp_duration = process.env.ACCESS_TOKEN_EXPIRY_TIME
    data.expires_at = moment().add(exp_duration,"minutes").toDate().getTime()
    return jwt.sign(data,process.env.JWT_SECRET!)
}
const token = await signAccessToken({
    id: user?.id!,
    username: user?.username!
})

// Response with Token
  return NextResponse.json({
    success: true,
    message: "User Created successfully",
    token
  });
}
