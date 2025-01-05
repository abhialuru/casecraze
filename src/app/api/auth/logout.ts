// src/pages/api/auth/logout.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { runCorsMiddleware } from '@/lib/cors'; 

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Run the CORS middleware first
  await runCorsMiddleware(req, res);

  // Handle preflight (OPTIONS) requests
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    return res.status(200).end();
  }

  // Your main API logic (for example, handling POST for logout)
  if (req.method === 'POST') {
    // Example logic for logout
    res.status(200).json({ message: 'Logged out successfully' });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
