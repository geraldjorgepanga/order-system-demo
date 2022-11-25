import { createFeatureSelector, createSelector } from "@ngrx/store";
import { OrderState } from "./order.reducers";

export const getOrderState = createFeatureSelector<OrderState>('order');
export const getOrders = createSelector(
    getOrderState,
    (state) => state.orders
);
export const getLoading = createSelector(
    getOrderState,
    (state) => state.loading
);
