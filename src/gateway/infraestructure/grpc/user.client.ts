import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { ProtoGrpcType } from '../../domain/grpc/user/user';

export class UserGrpcClient {
    private static instance: UserGrpcClient;
    public client;

    constructor() {
        const packageDefinition = protoLoader.loadSync('./proto/user.proto');
        const proto = grpc.loadPackageDefinition(packageDefinition) as unknown as ProtoGrpcType
        const client = new proto.user_package.UserService('localhost:50054', grpc.credentials.createInsecure())
        this.client = client
    }

    static getInstance(): UserGrpcClient {
        if (!UserGrpcClient.instance) {
            UserGrpcClient.instance = new UserGrpcClient()
        }

        return UserGrpcClient.instance;
    }

    getUser(userId: string) {
        return new Promise((resolve, reject) => {
            const request = {
                userId: userId
            }
    
            this.client.GetUser(request, (err, user) => {
                if (err) {
                    // Verifica si el error es de argumento inválido
                    if (err.code === grpc.status.INVALID_ARGUMENT) {
                        return reject({ error: 'Invalid argument in body.' });
                    }
                    // Verifica si el error es de usuario no encontrado
                    if (err.code === grpc.status.NOT_FOUND) {
                        return reject({ error: 'User not found' });
                    }
                    // Otros errores no manejados específicamente
                    console.error(err);
                    return reject({ error: 'Internal server error' });
                }
                // Si no hay error, resuelve con el usuario
                resolve(user);
            });
        });
    }

    getAllUser() {
        return new Promise((resolve, reject) => {
            try {
                this.client.GetAllUsers('', (err, users) => {
                    if (err) reject(err)
                    resolve(users)
                })
            } catch (error) {
                console.error(error);
                reject({ error: 'Internal server error' });
            }
        })
    }
}