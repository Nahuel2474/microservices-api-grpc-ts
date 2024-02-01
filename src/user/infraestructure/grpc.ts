import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { UserService } from '../app/user.service';
import { config } from '../domain/config';
import { ProtoGrpcType } from '../domain/grpc/user';

export class GrpcServer {
    private server: grpc.Server;

    constructor() { 
        this.getServer().bindAsync(
            config.grpc_host ?? '',
            grpc.ServerCredentials.createInsecure(),
            (err: Error | null, port: number) => {
                if(err) return console.log('error in init server');
                console.log(`Server bound on port: ${port}`);
                this.server.start()
            }
        )
    }

    getServer() {
        const packageDefinition = protoLoader.loadSync('./proto/user.proto');
        const proto = (grpc.loadPackageDefinition(packageDefinition) as unknown as ProtoGrpcType)
    
        this.server = new grpc.Server();
        this.server.addService(proto.user_package.UserService.service, new UserService)
        return this.server
    }

}