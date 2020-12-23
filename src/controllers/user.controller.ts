import { Response, Request } from 'express';

import UserModel from '../models/user.model';


export const getList = async (req: Request, res: Response) => {
    try {
        const users = await UserModel.find(req.body);
        res.status(200).send(users);
    } catch(err) {
        res.status(400).send(err);
    }
}

export const createUser = async(req: Request, res: Response) => {
    try {
        const user = await UserModel.create(req.body);
        res.status(201).send(user);
    } catch(err) {
        res.status(400).send(err);
    }
}

export const getById = async (req: Request, res: Response) => {
    try {
        const user = await UserModel.findById(req.params._id);
        res.status(200).send(user);
    } catch(err) {
        res.status(404).send(err);
    }
}

export const deleteById = async(req: Request, res: Response) => {
    try {
        const user = await UserModel.findByIdAndDelete(
            req.params._id
        );
        res.status(200).send(user);
    } catch(err) {
        res.status(404).send(err);
    }
}
