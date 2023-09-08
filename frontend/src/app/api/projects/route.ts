import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'
 
export async function GET(request: Request) {

    const prisma = new PrismaClient()


      const result = await prisma.project.findMany()


  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')
//   const res = await fetch(`https://data.mongodb-api.com/product/${id}`, {
//     headers: {
//       'Content-Type': 'application/json',
//       'API-Key': process.env.DATA_API_KEY,
//     },
//   })

 
  return NextResponse.json(result)
}