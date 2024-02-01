import DatabaseAdapter from "./infraestructure/database.adapter";
import { GrpcServer } from "./infraestructure/grpc";



function main () {
    DatabaseAdapter.getInstance().connect()
    new GrpcServer()
}



