import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

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
export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  try {
    // Check if project exists, if it doesnt throw error
    const projectExists = await prisma.project.findUnique({
      where: {
        id: Number(id),
      },
    });
    if (!projectExists) {
      return NextResponse.json(
        {
          message: "Project not found",
        },
        {
          status: 404,
        }
      );
    }
    const result = await prisma.project.delete({
      where: {
        id: Number(id),
      },
    });
    return NextResponse.json(
      {
        message: "Project deleted successfully",
      },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      {
        message: "Err",
      },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  response: NextResponse
) {
  const { id, title, description } = await request.json();
  console.log("my title", title)
  try {
    // Chech if project exists, if it doesnt respond with a 404 status
    const projectExists = prisma.project.findUnique({
      where: {
        id: Number(id),
      },
    });
    if (!projectExists) {
      return NextResponse.json(
        {
          message: "Project not found",
        },
        { status: 404 }
      );
    }
    // If Project exists
    const editedProject = await prisma.project.update({
      where: {
        id: Number(id),
      },
      data: {
        title,
        description,
      },
    });
    return NextResponse.json(
      {
        message: "Project edited successfully",
      },
      {
        status: 200,
      }
    );
  } catch (err) {
    return NextResponse.json(
      {
        message: "Internal server error",
      },
      {
        status: 500,
      }
    );
  }
}
