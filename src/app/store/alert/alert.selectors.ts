import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AlertState } from "./alert.reducers";

export const getAlertState = createFeatureSelector<AlertState>('alert');
export const getAlert = createSelector(
    getAlertState,
    (state) => state.alert
);
