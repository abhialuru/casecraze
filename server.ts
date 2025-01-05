import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();

// Enable CORS for all origins
app.use(cors());

// Handle preflight requests (especially for HTTP methods like POST, PUT, DELETE)
app.options('*', cors());

// Define a route (e.g., logout endpoint)
app.post('/api/auth/logout', (req: Request, res: Response) => {
  res.status(200).json({ message: 'Logged out successfully' });
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
