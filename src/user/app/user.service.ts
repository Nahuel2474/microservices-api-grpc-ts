import * as grpc from '@grpc/grpc-js';
import { Empty__Output } from "../domain/grpc/user_package/Empty";
import { GetUserRequest } from "../domain/grpc/user_package/GetUserRequest";
import { User } from '../domain/grpc/user_package/User';
import { UserList } from "../domain/grpc/user_package/UserList";
import { UserServiceHandlers } from "../domain/grpc/user_package/UserService";
import { PostgreDBRepository } from '../infraestructure/postgre/user.repository';


export class UserService implements UserServiceHandlers {
    [name: string]: grpc.UntypedHandleCall;

    async GetAllUsers( call: grpc.ServerUnaryCall<Empty__Output, UserList> , callback: grpc.sendUnaryData<UserList>) {
        try {
            const users = await PostgreDBRepository.getInstance().getAllUser();

            const userList: UserList = {
                users: users,
            };

            return callback(null, userList);
        } catch (error) {
            return callback({ code: grpc.status.INTERNAL })
        }
    }

    async GetUser(call: grpc.ServerUnaryCall<GetUserRequest, User> , callback: grpc.sendUnaryData<User>) {
        const { userId } = call.request;
        if (!userId) return callback({ code: grpc.status.INVALID_ARGUMENT })

        const user = await PostgreDBRepository.getInstance().getUser(userId)

        if (!user) return callback({ code: grpc.status.NOT_FOUND })

        try {
            return callback(null, user)
        } catch (error) {
            return callback({ code: grpc.status.INTERNAL })
        }

    }
    
}
