// Original file: proto/user.proto

export const Role = {
  ADMIN: 'ADMIN',
  CUSTOMER: 'CUSTOMER',
} as const;

export type Role =
  | 'ADMIN'
  | 0
  | 'CUSTOMER'
  | 1

export type Role__Output = typeof Role[keyof typeof Role]
