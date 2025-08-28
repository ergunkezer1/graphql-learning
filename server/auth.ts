import { Request, Response } from 'express';
import { expressjwt } from 'express-jwt';
import jwt from 'jsonwebtoken';

const secret = Buffer.from('askjdhkasjhdkjashdja', 'base64');

export const authMiddleware = expressjwt({
    algorithms: ['HS256'],
    credentialsRequired: false,
    secret,
});

export async function handleLogin(req: Request, res: Response) {
    const { email, password } = req.body;
    // const user = await get
}
