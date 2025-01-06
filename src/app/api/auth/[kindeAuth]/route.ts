import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";

// Allow handling of OPTIONS requests (preflight)
export async function OPTIONS(req:any, res:any) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS, POST, PUT, DELETE, PATCH');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Content-Type, Authorization, X-Api-Version');
  res.status(200).end(); // Respond with 200 OK
}

// Your main GET handler for authentication
export const GET = handleAuth();


 