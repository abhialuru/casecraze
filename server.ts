import { NextRequest, NextResponse } from "next/server";

const allowedOrigins = ["https://casecraze.vercel.app", "https://casecraze07.kinde.com"];

const corsOptions = {
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Access-Control-Allow-Credentials": "true"
};

export function middleware(request: NextRequest) {
  const origin = request.headers.get("origin");
  
  if (origin && allowedOrigins.includes(origin)) {
    if (request.method === "OPTIONS") {
      const preflightHeaders = {
        "Access-Control-Allow-Origin": origin,
        ...corsOptions
      };
      return NextResponse.json({}, { headers: preflightHeaders });
    }
    
    const response = NextResponse.next();
    response.headers.set("Access-Control-Allow-Origin", origin);
    Object.entries(corsOptions).forEach(([key, value]) => {
      response.headers.set(key, value);
    });
    return response;
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: "/:path*"
};