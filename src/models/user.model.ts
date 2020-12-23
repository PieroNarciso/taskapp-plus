import mongoose from 'mongoose';

import { UserDocument } from '../interfaces/user.interface';


const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        min: 1,
        max: 20,
        unique: true,
        required: true
    },
    email: {
        type: String,
        min: 3,
        max: 30,
        unique: true,
        required: true
    },
    password: {
        type: String,
        min: 8,
        max: 256,
        select: false,
        required: true
    }
})


export default mongoose.model<UserDocument>('User', UserSchema);
