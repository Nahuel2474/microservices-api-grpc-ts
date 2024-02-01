import mongoose, { Connection } from 'mongoose';
import { config } from '../domain/config';

export class MongoDbConnectionAdapter {
    private connection: Connection;

    constructor() {
        this.connection = mongoose.connection;
        if (config.mongo_uri) {
            this.connect(config.mongo_uri)
        } else {
            console.log('variable de entorno no inicializada.')
        }
    }

    async connect(uri: string): Promise<void> {
        try {
            await mongoose.connect(uri);
            console.log('Conectado a la base de datos de mongodb');
        } catch (error) {
            console.error('Error al conectar a la base de datos:', error);
            throw error;
        }
    }

    async disconnect(): Promise<void> {
        await mongoose.disconnect();
        console.log('Desconectado de la base de datos');
    }

    getConnection(): Connection {
        return this.connection;
    }
}