import express, { Request, Response } from 'express';
import cors from 'cors';

import config from './config';


const app = express()

// DB connection
import db from './db';
db()

// Middlewares
app.use(express.json()) // Handle body requests (json)
app.use(cors())


// Routers
import userRoute from './routes/user.routes';
import taskRoute from './routes/task.routes';
app.use('/api/users', userRoute);
app.use('/api/tasks', taskRoute);
app.get('/', (_req: Request, res: Response) => {
    res.send("Express Typescripts"); 
})

app.listen(config.PORT, () => {
    console.log(`Server started in port: ${config.PORT}`);
});

