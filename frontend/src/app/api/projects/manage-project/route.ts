import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const { title, description } = await request.json();

  try {
    const result = await prisma.project.create({
      data: {
        title,
        description,
      },
    });
    return NextResponse.json(
      {
        message: "Project added successfully",
      },
      { status: 200 }
    );
  } catch (err) {
    console.log(err);
  }
}

export async function GET(request: Request, response: Response) {
  try {
    const result = await prisma.project.findMany();
    return NextResponse.json({ data: result }, { status: 200 });
  } catch (err) {
    NextResponse.json({
      message: "Error",
      err,
    });
  }
}
