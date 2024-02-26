import cors from 'cors';
import express, { Application, Request, Response } from 'express';

const app: Application = express();

// default middlewares
app.use(cors());
app.use(express.json());

// server health checking
app.get('/api/v1/health', (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    status: 'Your server is very very health.',
  });
});

export default app;
