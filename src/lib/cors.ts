// lib/cors.ts
import Cors from 'cors';
import { NextApiRequest, NextApiResponse } from 'next';

// Initialize the CORS middleware
const cors = Cors({
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allow specific HTTP methods
  origin: 'https://casecraze-9yzl.vercel.app', // Set to '*' for all domains or specify your domain e.g. 'https://casecraze-9yzl.vercel.app'
});

// Helper function to run the middleware
export const runCorsMiddleware = (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  return new Promise<void>((resolve, reject) => {
    cors(req, res, (result) => {
      if (result instanceof Error) {
        reject(result);
      }
      resolve();
    });
  });
};
