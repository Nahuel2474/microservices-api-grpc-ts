import { MongoDbConnectionAdapter } from "./infraestructure/database.adapter";
import { GrpcServer } from "./infraestructure/grpc";


function main() {
    new MongoDbConnectionAdapter();
    new GrpcServer()
}

main()
