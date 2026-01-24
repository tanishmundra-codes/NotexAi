import express, { Request, Response } from 'express';
import dotenv from 'dotenv';

const app = express();
const PORT  = process.env.PORT || 3000;

app.listen(PORT , () => {
    console.log(`Server is started at PORT : ${PORT}`);
})