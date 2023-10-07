import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req: NextRequest, res: NextResponse) {
  const id = req.url.split("/manage-project/")[1];
  try {
    // Method 2(using include)
    const project = await prisma.project.findUnique({
      where: {
        id: String(id),
      },
      include: {
        projects: {
          select: {
            techStackItem: {
              select: {
                id: true,
                label: true,
                value: true,
                type: true,
              },
            },
          },
        },
      },
    });

    const techStackItems = project?.projects
      .map((project) =>
        project.techStackItem.type === "TECHSTACK"
          ? project.techStackItem
          : undefined
      )
      .filter(Boolean);

    const tools = project?.projects
      .map((project) =>
        project.techStackItem.type === "TOOL"
          ? project.techStackItem
          : undefined
      )
      .filter(Boolean);

    // Find techstack items which exist for a particular project id
    // Method 1:
    // const allItems = await prisma.projectsOnTechStackItem.findMany({where:{projectId:String(id)}})
    // const allItemDetails = await prisma.techStackItem.findMany({where:{
    //   id: {in: allItems.map((item)=> item.techStackItemId)}
    // }})
    // const techStackItems = allItemDetails.filter((item)=> item.type === "TECHSTACK")
    // const tools = allItemDetails.filter((item)=> item.type === "TOOL")

    if (!project) {
      return NextResponse.json(
        {
          message: "Project does not exist",
        },
        { status: 404 }
      );
    }
    return NextResponse.json({
      data: {
        id: project.id,
        title: project.title,
        description: project.description,
        purposeAndGoal: project.purposeAndGoal,
        githubURL: project.githubURL,
        demoURL: project.githubURL,
        testimonial: project.testimonial,
        techStackItems,
        tools,
      },
    });
  } catch (err) {
    return NextResponse.json(
      {
        message: "Internal Server Error",
        success: false,
      },
      { status: 500 }
    );
  }
}
