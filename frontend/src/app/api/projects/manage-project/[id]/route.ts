import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function PUT(request: Request) {}

// export async function DELETE(request: Request) {
//   const { searchParams } = new URL(request.url);
//   const id = searchParams.get("id");

//   try {
//     const result = await prisma.project.delete({
//       where: {
//         id: Number(id),
//       },
//     });
//     return NextResponse.json(
//       {
//         message: "Project deleted successfully",
//       },
//       { status: 204 }
//     );
//   } catch (err) {
//     console.log(err);
//   }
// }

export async function PATCH(request: Request) {}

// If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and  set the appropriate Response `Allow` header depending on the other methods defined in the route handler.
export async function OPTIONS(request: Request) {}
