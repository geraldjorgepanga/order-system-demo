import { ActionReducerMap } from '@ngrx/store';

import * as fromUser from './user';
import * as fromAlert from './alert';
import * as fromOrder from './order';
export interface State {
    user: fromUser.UserState;
    alert: fromAlert.AlertState;
    order: fromOrder.OrderState;

}
export const reducers: ActionReducerMap<State, any> = {
    user: fromUser.reducer,
    alert: fromAlert.reducer,
    order: fromOrder.reducer,
}
export const effects = [
    fromUser.UserEffects,
    fromOrder.OrderEffects,
]