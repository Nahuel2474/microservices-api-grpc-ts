// Original file: proto/user.proto

import type { Address as _user_package_Address, Address__Output as _user_package_Address__Output } from '../user_package/Address';
import type { Role as _user_package_Role, Role__Output as _user_package_Role__Output } from '../user_package/Role';
import type { Session as _user_package_Session, Session__Output as _user_package_Session__Output } from '../user_package/Session';

export interface User {
  'id'?: (string);
  'name'?: (string);
  'avatar'?: (string);
  'email'?: (string);
  'password'?: (string);
  'address'?: (_user_package_Address | null);
  'phone'?: (string);
  'role'?: (_user_package_Role);
  'session'?: (_user_package_Session | null);
  'createdAt'?: (Date);
  'updatedAt'?: (Date);
  'birthday'?: (Date);
}

export interface User__Output {
  'id': (string);
  'name': (string);
  'avatar': (string);
  'email': (string);
  'password': (string);
  'address': (_user_package_Address__Output | null);
  'phone': (string);
  'role': (_user_package_Role__Output);
  'session': (_user_package_Session__Output | null);
  'createdAt': (Date);
  'updatedAt': (Date);
  'birthday': (Date);
}
