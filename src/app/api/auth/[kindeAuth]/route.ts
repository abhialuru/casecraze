import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";

export const GET = async (req:any, res:any) => {
  // Set CORS headers explicitly if needed
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  // Handle the authentication logic
  return handleAuth()(req, res);
};
