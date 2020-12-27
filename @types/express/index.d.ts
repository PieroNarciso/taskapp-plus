import * as express from 'express';

import { IUserJWT } from '../../src/interfaces/user.interface';


declare global {
    namespace Express {
        interface Request {
            user: IUserJWT
        }
    }
}
