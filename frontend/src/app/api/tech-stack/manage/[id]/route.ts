import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: Request, res: Response) {
  const id = req.url.split("/manage/")[1];
  try {
    // Check if stack item exists
    const stackItem = await prisma.techStackItem.findUnique({
      where: {
        id: String(id),
      },
    });
    console.log(stackItem);
    if (!stackItem) {
      return NextResponse.json(
        {
          message: "Stack item does not exists",
        },
        { status: 404 }
      );
    }
    return NextResponse.json(
      {
        data: stackItem,
      },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      {
        message: "Failed to fetch stack item",
        err,
      },
      { status: 500 }
    );
  }
}
