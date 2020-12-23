import express, { Request, Response } from 'express';
import mongoose from 'mongoose';


const app = express()

// Constant variables
const PORT = process.env['PORT'] || 8080;
const DB_URI = process.env['DB_URI'] as string;

const OPTIONS: mongoose.ConnectionOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};
mongoose.connect(DB_URI, OPTIONS, () => {
    console.log("DB Connected");
});

// Middlewares
app.use(express.json()) // Handle body requests (json)


// Routers
import userRoute from './routes/user.routes';
import taskRoute from './routes/task.routes';
app.use('/api/users', userRoute);
app.use('/api/tasks', taskRoute);
app.get('/', (_req: Request, res: Response) => {
    res.send("Express Typescripts"); 
})

app.listen(PORT, () => {
    console.log(`Server started in port: ${PORT}`);
});

