import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
import jwt from "jsonwebtoken"
import * as jose from 'jose'

const SECRET = process.env.JWT_SECRET 
export async function middleware(request: NextRequest) {
    // If its a GET request prceed without Authorization
    // console.log(request.method,"xxxx")
    // if(request.method === "GET"){
    //     return NextResponse.next()
    // }

    // Extract Token from header
    const bearerToken = request.headers.get('authorization')

    // Check if bearer token exists
    if(!bearerToken) return NextResponse.json({message:"Invalid Token"}, {status: 401})

    // Remove 'bearer' word from token
    const token = bearerToken.split(" ")[1]

    // Check if token exists
    if(!token) return NextResponse.json({message:"Invalid Token"}, {status: 401})

    // Very if token is a valid token
    
    // const isTokenValid = jwt.verify(token, SECRET!)
    const encodedSecret = new TextEncoder().encode(SECRET)
    try{
        await jose.jwtVerify(token,encodedSecret)
    }catch{
        return NextResponse.json({errorMessage:"Unauthorized"},{status:401})
    }
    
    NextResponse.next()
}
 
export const config = {
  matcher: [
    '/api/tech-stack/manage',
    '/api/projects/manage-project/'
],
}