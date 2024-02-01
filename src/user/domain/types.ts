export type User = {
  id: string;
  name: string;
  avatar: string;
  email: string;
  birthday: Date;
  password: string;
  address: Address;
  phone: string;
  role: Role;
  session: Session;
  createdAt: Date;
  updatedAt: Date;
};

export type credentials = Omit<User, 'session' | 'role' | 'createdAt' | 'updatedAt' | 'id'>

export type authUser = Omit<User, 'role' | 'createdAt' | 'updatedAt' | 'id' | 'birthday'>

export type Address = {
  street: string;
  number: string;
  city: string;
  state: string;
  zipCode: string;
};

export type Role = "ADMIN" | "CUSTOMER";

export type Session = {
  isLogged: boolean;
  id: string;
  token: string | null;
  refreshToken: string | null;
};