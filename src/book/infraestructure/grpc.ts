import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { BookServices } from '../App/book.service';
import { config } from '../domain/config';
import { ProtoGrpcType } from '../domain/grpc/book';

export class GrpcServer {
    private server: grpc.Server;

    constructor() {
        this.getServer().bindAsync(
            config.grpc_uri ?? '',
            grpc.ServerCredentials.createInsecure(),
            (err: Error | null, port: number) => {
                if (err) return console.error(`Server error: ${err.message}`);
                console.log(`Server bound on port: ${port}`);
                this.server.start();
            }
        )
    }

    getServer(): grpc.Server {
        const packageDefinition = protoLoader.loadSync('./proto/book.proto');
        const proto = (grpc.loadPackageDefinition(packageDefinition) as unknown as ProtoGrpcType)

        this.server = new grpc.Server();
        this.server.addService(proto.book_package.BookService.service, new BookServices)
        return this.server
    }

}

