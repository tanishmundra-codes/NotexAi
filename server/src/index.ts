import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.json({ message: "Hello from Backend!" });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});