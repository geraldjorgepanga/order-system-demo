import { Action } from "@ngrx/store";
import { Alert } from "./alert.model";

export enum Types { 
    SET_HEADER_ALERT = '[Alert] Set Alert',
}
export class SetAlert implements Action {
    readonly type = Types.SET_HEADER_ALERT;
    constructor(public alert: Alert){}
}

export type All
    = SetAlert