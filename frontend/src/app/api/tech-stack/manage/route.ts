import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request, res: Response) {
  const { type, label } = await req.json();

  try {
    // Value is calculated by replacing spaces with underscore and it's then transformed to lower case
    const value = label.replace(/ /g, "_").toLowerCase();

    // Check if TechStack item already exists
    const doesItemExists = await prisma.techStackItem.findUnique({
      where: {
        value,
      },
    });
    if (doesItemExists) {
      return NextResponse.json(
        {
          message: "TechStack item already exists",
        },
        { status: 501 }
      );
    }

    // Insert Data into table
    const response = await prisma.techStackItem.create({
      data: {
        type,
        label,
        value,
      },
    });
    // Return OK response
    return NextResponse.json(
      { message: "TechStack added successfully" },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      {
        message: "Failed to create tech stack item",
        error: err,
      },
      { status: 500 }
    );
  }
}

export async function GET(req: Request, res: Response) {
  try {
    const items = await prisma.techStackItem.findMany();
    return NextResponse.json({ data: items }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      {
        message: "Failed to fetch TeckStack items",
      },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request, res: Response) {
  // Extract id from params
  const { searchParams } = new URL(req.url);
  const id = Number(searchParams.get("id"));

  try {
    // Check if TechStack exists
    const doesItemExist = await prisma.techStackItem.findUnique({
      where: { id },
    });
    if (!doesItemExist) {
      return NextResponse.json(
        {
          message: "TechStack Item does not exist",
        },
        { status: 404 }
      );
    }

    // Proceed if item exists
    const response = await prisma.techStackItem.delete({
      where: { id },
    });
    return NextResponse.json(
      {
        message: "TechStack item deleted successfully",
      },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { message: "Failed to delete TechStack item" },
      { status: 500 }
    );
  }
}

export async function PUT(req: Request, res: Response) {
  const { id, label, type } = await req.json();

  try {
    // Check if TechStack item exists
    const doesItemExists = await prisma.techStackItem.findUnique({
      where: { id: Number(id) },
    });
    if (!doesItemExists) {
      return NextResponse.json({
        message: "TechStack item does not exists",
      });
    }

    // Proceed if item exists
    const response = await prisma.techStackItem.update({
      where: {
        id: Number(id),
      },
      data: {
        label,
        type,
      },
    });
    return NextResponse.json(
      {
        message: "TechStack item edited succesfully",
      },
      { status: 200 }
    );
  } catch(err) {
    return NextResponse.json(
      { message: "Failed to edit TechStack item", error:err },
      { status: 500 }
    );
  }
}
