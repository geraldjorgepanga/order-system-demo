import { AppStorage } from '@app/DB/dbpath';
import { User } from '@app/models/user.model';
import * as fromActions from './user.action';

export interface UserState {
    user: User;
    loading: boolean;
    error: string;
}
const initialState: UserState = {
    user: null,
    loading: false,
    error: null,
};
export function reducer(state = initialState, action: fromActions.All): UserState {
    switch(action.type){
        case fromActions.Types.LOGIN_USER: {
            return { ...state, loading: true, error: null, user: null };
        }
        case fromActions.Types.LOGIN_USER_SUCCESS: {
            return { ...state, loading: false, error: null, user: action.user }; 
        }
        case fromActions.Types.LOGIN_USER_ERROR: {
            return { ...state, loading: false, error: action.error };
        }
        case fromActions.Types.LOGOUT_USER: {
            localStorage.removeItem(AppStorage.Username); 
            localStorage.removeItem(AppStorage.Password);
            
            return { ...state, user: null };
        }
        default: {
            return state;
        }
    }
}