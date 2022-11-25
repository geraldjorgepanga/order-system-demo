import { AppStorage } from '@app/DB/dbpath';
import { Order } from '@app/models/order.model';
import { User } from '@app/models/user.model';
import * as fromActions from './order.action';

export interface OrderState {
    orders: Order[];
    loading: boolean;
    error: string;
}
const initialState: OrderState = {
    orders: [],
    loading: false,
    error: null,
};
export function reducer(state = initialState, action: fromActions.All): OrderState {
    switch(action.type){
        case fromActions.Types.ADD_ORDER: {
            return { ...state, loading: true, error: null };
        }
        case fromActions.Types.ADD_ORDER_SUCCESS: {
            return { ...state, loading: false, error: null, orders: action.order }; 
        }
        case fromActions.Types.ADD_ORDER_ERROR: {
            return { ...state, loading: false, error: action.error };
        }
        case fromActions.Types.UPDATE_ORDER: {
            return { ...state, loading: true, error: null };
        }
        case fromActions.Types.UPDATE_ORDER_SUCCESS: {
            return { ...state, loading: false, error: null, orders: action.order }; 
        }
        case fromActions.Types.UPDATE_ORDER_ERROR: {
            return { ...state, loading: false, error: action.error };
        }
        case fromActions.Types.DELETE_ORDER: {
            return { ...state, loading: true, error: null };
        }
        case fromActions.Types.DELETE_ORDER_SUCCESS: {
            return { ...state, loading: false, error: null, orders: action.orders }; 
        }
        case fromActions.Types.DELETE_ORDER_ERROR: {
            return { ...state, loading: false, error: action.error };
        }
        case fromActions.Types.INIT_ORDER: {
            let orders = (localStorage.getItem(AppStorage.Orders)) ? JSON.parse(localStorage.getItem(AppStorage.Orders)) : [];
            return { ...state,  orders: orders };
        }
        default: {
            return state;
        }
    }
}