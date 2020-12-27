import { Response, Request } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import config from '../config';
import UserModel from '../models/user.model';
import { IUserJWT } from '../interfaces/user.interface';


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
        if (req.body.password) {
            req.body.password = await bcrypt.hash(
                req.body.password,
                config.SALT_ROUNDS
            );
        }
        const user = await UserModel.create(req.body);
        // Not to send password
        const userData = await UserModel.findById(user._id)
                                        .select('password');
        res.status(201).send(userData);
    } catch(err) {
        res.status(400).send(err);
    }
}

export const loginUser = async(req: Request, res: Response) => {
    const username = req.body.username;
    const password = req.body.password;
    if (!username || !password) {
        return res.status(400).send({ msg: 'Email & password are required' })
    }
    try {
        const user = await UserModel.findOne({
            username: req.body.username,
        });
        if (user?.password) {
            const valid = await bcrypt.compare(req.body.password, user.password)
            if (valid) {
                const accessToken = jwt.sign(
                    { username: user.username, _id: user._id } as IUserJWT,
                    config.SECRET_KEY
                );
                return res.status(200).send({ token: accessToken });
            }
        } else {
            res.status(400).send({ msg: 'User or Password are invalid' });
        }
    } catch(err) {
        res.status(404).send(err);
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
