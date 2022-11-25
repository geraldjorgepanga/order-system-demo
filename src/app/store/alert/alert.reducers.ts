import * as fromActions from './alert.action';
import { Alert } from './alert.model';

export interface AlertState {
    alert: Alert
}
const initialState: AlertState = {
    alert: null
};
export function reducer(state = initialState, action: fromActions.All): AlertState {
    switch(action.type){
        case fromActions.Types.SET_HEADER_ALERT: {
            return { ...state, alert: action.alert };
        }
        default: {
            return state;
        }
    }
}