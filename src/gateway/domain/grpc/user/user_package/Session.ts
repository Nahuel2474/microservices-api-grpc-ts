// Original file: proto/user.proto


export interface Session {
  'isLogged'?: (boolean);
  'id'?: (string);
  'token'?: (string);
  'refreshToken'?: (string);
  '_token'?: "token";
  '_refreshToken'?: "refreshToken";
}

export interface Session__Output {
  'isLogged': (boolean);
  'id': (string);
  'token'?: (string);
  'refreshToken'?: (string);
  '_token': "token";
  '_refreshToken': "refreshToken";
}
