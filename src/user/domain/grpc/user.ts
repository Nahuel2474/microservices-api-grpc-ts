import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { UserServiceClient as _user_package_UserServiceClient, UserServiceDefinition as _user_package_UserServiceDefinition } from './user_package/UserService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  user_package: {
    Address: MessageTypeDefinition
    Empty: MessageTypeDefinition
    GetUserRequest: MessageTypeDefinition
    Role: EnumTypeDefinition
    Session: MessageTypeDefinition
    User: MessageTypeDefinition
    UserList: MessageTypeDefinition
    UserService: SubtypeConstructor<typeof grpc.Client, _user_package_UserServiceClient> & { service: _user_package_UserServiceDefinition }
  }
}

