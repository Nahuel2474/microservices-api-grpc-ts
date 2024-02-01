import jwt from 'jsonwebtoken';
import { config } from "../../domain/config";
import { User } from "../../domain/grpc/user/user_package/User";



export function generateToken(user: User) {
    const payload = {
        userId: user.id,
        email: user.email,
    }

    if(!config.jwt_secret) {
        throw new Error('variable no iniciada')
    }

    const token = jwt.sign(payload, config.jwt_secret, {expiresIn: '10m'});
    const refreshToken = jwt.sign(payload, config.jwt_secret, {expiresIn: '1h'})

    return {
        token,
        refreshToken
    }
}