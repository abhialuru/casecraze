import {handleAuth} from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";

export const GET = handleAuth();

export async function POST(req: Request) {
    try {
       const response = await handleAuth(req); // Handle the auth for POST requests if needed
  
       return NextResponse.json({ message: 'Logged out successfully' }, { status: 200 });
    } catch (error) {
      return NextResponse.json({ error: console.error()}, { status: 500 });
    }
  }