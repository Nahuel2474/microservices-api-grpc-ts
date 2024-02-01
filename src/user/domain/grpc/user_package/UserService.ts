// Original file: proto/user.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Empty as _user_package_Empty, Empty__Output as _user_package_Empty__Output } from '../user_package/Empty';
import type { GetUserRequest as _user_package_GetUserRequest, GetUserRequest__Output as _user_package_GetUserRequest__Output } from '../user_package/GetUserRequest';
import type { User as _user_package_User, User__Output as _user_package_User__Output } from '../user_package/User';
import type { UserList as _user_package_UserList, UserList__Output as _user_package_UserList__Output } from '../user_package/UserList';

export interface UserServiceClient extends grpc.Client {
  GetAllUsers(argument: _user_package_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_package_UserList__Output>): grpc.ClientUnaryCall;
  GetAllUsers(argument: _user_package_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_package_UserList__Output>): grpc.ClientUnaryCall;
  GetAllUsers(argument: _user_package_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_user_package_UserList__Output>): grpc.ClientUnaryCall;
  GetAllUsers(argument: _user_package_Empty, callback: grpc.requestCallback<_user_package_UserList__Output>): grpc.ClientUnaryCall;
  getAllUsers(argument: _user_package_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_package_UserList__Output>): grpc.ClientUnaryCall;
  getAllUsers(argument: _user_package_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_package_UserList__Output>): grpc.ClientUnaryCall;
  getAllUsers(argument: _user_package_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_user_package_UserList__Output>): grpc.ClientUnaryCall;
  getAllUsers(argument: _user_package_Empty, callback: grpc.requestCallback<_user_package_UserList__Output>): grpc.ClientUnaryCall;
  
  GetUser(argument: _user_package_GetUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_package_User__Output>): grpc.ClientUnaryCall;
  GetUser(argument: _user_package_GetUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_package_User__Output>): grpc.ClientUnaryCall;
  GetUser(argument: _user_package_GetUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_package_User__Output>): grpc.ClientUnaryCall;
  GetUser(argument: _user_package_GetUserRequest, callback: grpc.requestCallback<_user_package_User__Output>): grpc.ClientUnaryCall;
  getUser(argument: _user_package_GetUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_package_User__Output>): grpc.ClientUnaryCall;
  getUser(argument: _user_package_GetUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_package_User__Output>): grpc.ClientUnaryCall;
  getUser(argument: _user_package_GetUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_package_User__Output>): grpc.ClientUnaryCall;
  getUser(argument: _user_package_GetUserRequest, callback: grpc.requestCallback<_user_package_User__Output>): grpc.ClientUnaryCall;
  
}

export interface UserServiceHandlers extends grpc.UntypedServiceImplementation {
  GetAllUsers: grpc.handleUnaryCall<_user_package_Empty__Output, _user_package_UserList>;
  
  GetUser: grpc.handleUnaryCall<_user_package_GetUserRequest__Output, _user_package_User>;
  
}

export interface UserServiceDefinition extends grpc.ServiceDefinition {
  GetAllUsers: MethodDefinition<_user_package_Empty, _user_package_UserList, _user_package_Empty__Output, _user_package_UserList__Output>
  GetUser: MethodDefinition<_user_package_GetUserRequest, _user_package_User, _user_package_GetUserRequest__Output, _user_package_User__Output>
}
