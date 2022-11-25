export class User {
    id: string;
    name: string;
    username: string;
    password: string;
    role: UserRole;
}

export enum UserRole {
    Admin = 'admin',
    Default = 'default',
}

export class UserCreds {
    username: string;
    password: string;
}