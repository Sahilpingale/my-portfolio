import { IOption } from "@/app/libs/types";
import prisma from "@/app/libs/db";
import { NextRequest, NextResponse } from "next/server";



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

  const stackItems = techStackItems.concat(tools);

  try {
    // --- Method 2:
    const newProject = await prisma.project.create({
      data: {
        title,
        description,
        githubURL,
        demoURL,
        testimonial,
        purposeAndGoal,
        projects:{
          createMany:{
            data: stackItems.map((item:IOption) => ({
              techStackItemId : item.id,
            }))
          }
        }
      },
      include: {
        projects: true
      }
    });

// --- Method 1:
        // const newProjectID = Number(newProject.id);
    // const formattedData = stackItems.map((item: IOption) => {
    //   return {
    //     projectId: newProjectID,
    //     techStackItemId: item.id,
    //   };
    // });

    // const stackItemsOnProjectes =
    //   await prisma.projectsOnTechStackItem.createMany({
    //     data: formattedData,
    //   });

    

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
        id: String(id) ,
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
    const deleteRelation = await prisma.projectsOnTechStackItem.deleteMany({
      where:{
        projectId: String(id)
      }
    })
    const result = await prisma.project.delete({
      where: {
        id : String(id),
      },
      // delete relation with 'ProjectsOnTechStackItem'
      include:{
        projects: true
      }
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
        err
      },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request, response: NextResponse) {
  const {
    title,
    description,
    githubURL,
    demoURL,
    testimonial,
    purposeAndGoal,
    techStackItems,
    tools,
    id,
  } = await request.json();
  const stackItems = techStackItems.concat(tools);
  console.log(title,
    description,
    githubURL,
    demoURL,
    testimonial,
    purposeAndGoal,
    techStackItems,
    tools,
    id,"inside router")
  try {
    // Chech if project exists, if it doesnt respond with a 404 status
    const projectExists = prisma.project.findUnique({
      where: {
        id: String(id),
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
        id: String(id),
      },
      data: {
        title,
        description,
        githubURL,
        demoURL,
        testimonial,
        purposeAndGoal,
        projects:{
          // Remove all the previous connections
          deleteMany:{},
          // Create new connections
          createMany:{
            data: stackItems.map((item:IOption)=>({
              techStackItemId: item.id
            }))
          }
        }
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
