import { User, UserCreds } from "@app/models/user.model";
import { Action } from "@ngrx/store";

export enum Types { 
    LOGIN_USER = '[User] Email sign-up: Start',
    LOGIN_USER_SUCCESS = '[User] Email sign-up: Success',
    LOGIN_USER_ERROR = '[User] Email sign-up: Error',

    LOGOUT_USER = '[User] Logout user',

}
export class Login implements Action {
    readonly type = Types.LOGIN_USER;
    constructor(public credential: UserCreds){}
}
export class LoginSuccess implements Action {
    readonly type = Types.LOGIN_USER_SUCCESS;
    constructor(public user: User){}
}
export class LoginError implements Action {
    readonly type = Types.LOGIN_USER_ERROR;
    constructor(public error: string){}
}
export class LogoutUser implements Action {
    readonly type = Types.LOGOUT_USER;
    constructor(){}
}
export type All
    = Login
    | LoginSuccess
    | LoginError
    | LogoutUser