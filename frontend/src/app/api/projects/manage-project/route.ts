import { IOption } from "@/app/libs/types";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const {
    title,
    description,
    githubURL,
    demoURL,
    testimonial,
    purposeAndGoal,
    techStackItems,
    tools,
  } = await request.json();

  const stackItems = techStackItems

  try {
    const newProject = await prisma.project.create({
      data: {
        title,
        description,
        githubURL,
        demoURL,
        testimonial,
        purposeAndGoal,
      },
    });
    const newProjectID = Number(newProject.id)

    const formattedData = stackItems.map((item:IOption)=> {
      return {
        projectId: newProjectID,
        techStackItemId: item.id
      }
    })

    // const stackItemsOnProjectes = await prisma.projectsOnTechStackItem.createMany({
    //   data: formattedData
    // })

    return NextResponse.json(
      {
        message: "Project added successfully",
        data: newProject,
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
      message: "Error getting projects",
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
        success: true,
      },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      {
        message: "Err",
        success: false,
      },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request, response: NextResponse) {
  const { id, title, description } = await request.json();
  console.log("my title", title);
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
