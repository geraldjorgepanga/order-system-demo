import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserState } from "./user.reducers";

export const getUserState = createFeatureSelector<UserState>('user');
export const getUser = createSelector(
    getUserState,
    (state) => state.user
);
export const getLoading = createSelector(
    getUserState,
    (state) => state.loading
);
