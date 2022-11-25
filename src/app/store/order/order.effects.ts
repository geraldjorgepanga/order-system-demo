import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { from, of } from "rxjs";
import { switchMap, map, tap, catchError } from 'rxjs/operators';
import { UserService } from "@app/main/shared/services/user.service";

import * as fromActions from './order.action';
import * as fromAlert from '@app/store/alert';
import { Store } from "@ngrx/store";
import { Status } from "../alert/alert.model";
import { Router } from "@angular/router";
import { OrderService } from "@app/main/shared/services/order.service";
@Injectable()
export class OrderEffects {
    constructor(
        private actions: Actions,
        private orderService: OrderService,
        private store: Store,
        private router: Router,
    ){}
    public addOrder = createEffect(()=> this.actions.pipe(
        ofType(fromActions.Types.ADD_ORDER),
        map((action: fromActions.AddOrder) => action.order),
        switchMap(data =>
                of(this.orderService.addOrder(data)).pipe(
                    map((order) => {
                        this.store.dispatch(new fromAlert.SetAlert({
                            message: `New order added`,
                            class: Status.Success
                        }));
                        return new fromActions.AddOrderSuccess(order);
                    }),
                    catchError(err => {
                        this.store.dispatch(new fromAlert.SetAlert({
                            message: err.message,
                            class: Status.Danger
                        }));
                        return of(new fromActions.AddOrderError(err.message));
                    })
                )
            )
    ));
    public updateOrder = createEffect(()=> this.actions.pipe(
        ofType(fromActions.Types.UPDATE_ORDER),
        map((action: fromActions.UpdateOrder) => action.order),
        switchMap(data =>
                of(this.orderService.updateOrder(data)).pipe(
                    map((order) => {
                        this.store.dispatch(new fromAlert.SetAlert({
                            message: `Order updated`,
                            class: Status.Success
                        }));
                        return new fromActions.UpdateOrderSuccess(order);
                    }),
                    catchError(err => {
                        this.store.dispatch(new fromAlert.SetAlert({
                            message: err.message,
                            class: Status.Danger
                        }));
                        return of(new fromActions.UpdateOrderError(err.message));
                    })
                )
            )
    ));
    public deleteOrder = createEffect(()=> this.actions.pipe(
        ofType(fromActions.Types.DELETE_ORDER),
        map((action: fromActions.DeleteOrder) => action.order),
        switchMap(data =>
                of(this.orderService.deleteOrder(data)).pipe(
                    map((order) => {
                        this.store.dispatch(new fromAlert.SetAlert({
                            message: `Order deleted`,
                            class: Status.Success
                        }));
                        return new fromActions.DeleteOrderSuccess(order);
                    }),
                    catchError(err => {
                        this.store.dispatch(new fromAlert.SetAlert({
                            message: err.message,
                            class: Status.Danger
                        }));
                        return of(new fromActions.UpdateOrderError(err.message));
                    })
                )
            )
    ));
}