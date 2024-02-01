import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { CartService } from '../app/cart.service';
import { config } from '../domain/config';
import { ProtoGrpcType } from '../domain/grpc/cart';

export class GrpcServer {
    private server: grpc.Server;

    constructor() { 
        this.getServer().bindAsync(
            config.grpc_uri ?? '',
            grpc.ServerCredentials.createInsecure(),
            (error: Error | null, port: number) => {
                if(error) return console.error(`Server error: ${error.message}`);
                console.log(`Server bound on port: ${port}`);
                this.server.start()
            }
        )
    } 

    getServer() {
        const packageDefinition = protoLoader.loadSync('./proto/cart.proto');
        const proto = (grpc.loadPackageDefinition(packageDefinition) as unknown as ProtoGrpcType)
    
        this.server = new grpc.Server();
        this.server.addService(proto.cart_package.CartService.service, new CartService)
        return this.server
    }

}