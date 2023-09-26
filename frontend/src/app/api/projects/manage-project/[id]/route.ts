import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req: NextRequest, res: NextResponse) {
  const id = req.url.split("/manage-project/")[1];
  try {
    const project = await prisma.project.findUnique({
      where: {
        id: Number(id),
      },
    });
    if (!project) {
      return NextResponse.json(
        {
          message: "Project does not exist",
        },
        { status: 404 }
      );
    }
    return NextResponse.json({
        data: project
    })
  } catch (err) {
    return NextResponse.json(
      {
        message: "Internal Server Error",
        success: false
      },
      { status: 500 }
    );
  }
}
