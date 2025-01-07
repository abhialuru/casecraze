import { type NextRequest, NextResponse } from "next/server";


export function middleware(req:NextRequest) {
    const res = NextResponse.next();
    res.headers.append('Access-Control-ALlow-Credentials', "true")
    res.headers.append('Access-Control-ALlow-Origin', "*")
    res.headers.append('Access-Control-ALlow-Methods', "GET,DELETE,PATCH,POST,PUT")
    res.headers.append(
        'Access-Control-ALlow-Headers', 
        "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
    )

    return res;
}

export const config = {
    matcher: ['/api/:path*']
}