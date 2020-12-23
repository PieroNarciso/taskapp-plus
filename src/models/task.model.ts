import mongoose from 'mongoose';

import { TaskDocument } from '../interfaces/task.interface';


const TaskSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    body: {
        type: String,
        min: 1,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})


export default mongoose.model<TaskDocument>('Task', TaskSchema);
