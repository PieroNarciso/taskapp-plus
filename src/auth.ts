import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

import config from './config';
import { IUserJWT } from './interfaces/user.interface';


export const authenticateJWT = async (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, config.SECRET_KEY, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }
            req.user = user as IUserJWT;
            next()
        })
    } else {
        res.sendStatus(401);
    }
}
