import { Document, Types } from 'mongoose';

import { UserDocument } from './user.interface';


export interface ITask {
    user: Types.ObjectId | UserDocument,
    body: string,
    completed: boolean
}

export interface TaskDocument extends ITask, Document {}
