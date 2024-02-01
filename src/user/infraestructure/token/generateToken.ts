import jwt from 'jsonwebtoken';
import { config } from '../../domain/config';
import { User } from '../../domain/types';



export function generateToken(user: User) {
    const payload = {
        ...user
    }

    if(!config.jwt_secret) {
        throw new Error('variable no iniciada')
    }

    const token = jwt.sign(payload, config.jwt_secret, {expiresIn: '1d'});
    const refreshToken = jwt.sign(payload, config.jwt_secret, {expiresIn: '7d'})

    return {
        token,
        refreshToken
    }
}