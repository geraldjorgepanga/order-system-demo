import { Order } from "@app/models/order.model";
import { User, UserCreds } from "@app/models/user.model";
import { Action } from "@ngrx/store";

export enum Types { 

    INIT_ORDER = '[Order] Init order',
    ADD_ORDER = '[Order] Add order: Start',
    ADD_ORDER_SUCCESS = '[Order] Add order: Success',
    ADD_ORDER_ERROR = '[Order] Add order: Error',

    UPDATE_ORDER = '[Order] Update order: Start',
    UPDATE_ORDER_SUCCESS = '[Order] Update order: Success',
    UPDATE_ORDER_ERROR = '[Order] Update order: Error',

    DELETE_ORDER = '[Order] Delete order: Start',
    DELETE_ORDER_SUCCESS = '[Order] Delete order: Success',
    DELETE_ORDER_ERROR = '[Order] Delete order: Error',
}
export class InitOrder implements Action {
    readonly type = Types.INIT_ORDER;
    constructor(){}
}
export class AddOrder implements Action {
    readonly type = Types.ADD_ORDER;
    constructor(public order: Order){}
}
export class AddOrderSuccess implements Action {
    readonly type = Types.ADD_ORDER_SUCCESS;
    constructor(public order: Order[]){}
}
export class AddOrderError implements Action {
    readonly type = Types.ADD_ORDER_ERROR;
    constructor(public error: string){}
}
export class UpdateOrder implements Action {
    readonly type = Types.UPDATE_ORDER;
    constructor(public order: Order){}
}
export class UpdateOrderSuccess implements Action {
    readonly type = Types.UPDATE_ORDER_SUCCESS;
    constructor(public order: Order[]){}
}
export class UpdateOrderError implements Action {
    readonly type = Types.UPDATE_ORDER_ERROR;
    constructor(public error: string){}
}
export class DeleteOrder implements Action {
    readonly type = Types.DELETE_ORDER;
    constructor(public order: Order){}
}
export class DeleteOrderSuccess implements Action {
    readonly type = Types.DELETE_ORDER_SUCCESS;
    constructor(public orders: Order[]){}
}
export class DeleteOrderError implements Action {
    readonly type = Types.DELETE_ORDER_ERROR;
    constructor(public error: string){}
}
export type All
    = AddOrder
    | InitOrder
    | AddOrderSuccess
    | AddOrderError
    | UpdateOrder
    | UpdateOrderSuccess
    | UpdateOrderError
    | DeleteOrder
    | DeleteOrderSuccess
    | DeleteOrderError