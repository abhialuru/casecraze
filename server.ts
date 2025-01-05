import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();

// Enable CORS for all origins (for development purposes)
app.use(cors()); 

// Or, you can specify a specific origin like this:
// app.use(cors({ origin: 'https://your-frontend-app.vercel.app' }));

// Handle preflight requests
app.options('*', cors());  // Allow all preflight requests

// Define a route (e.g., logout endpoint)
app.post('/api/auth/logout', (req: Request, res: Response) => {
  res.status(200).json({ message: 'Logged out successfully' });
});

 app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
