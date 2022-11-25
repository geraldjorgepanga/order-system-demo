import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { from, of } from "rxjs";
import { switchMap, map, tap, catchError } from 'rxjs/operators';
import { UserService } from "@app/main/shared/services/user.service";

import * as fromActions from './user.action';
import * as fromAlert from '@app/store/alert';
import { Store } from "@ngrx/store";
import { Status } from "../alert/alert.model";
import { Router } from "@angular/router";
import { UserRole } from "@app/models/user.model";
@Injectable()
export class UserEffects {
    constructor(
        private actions: Actions,
        private userService: UserService,
        private store: Store,
        private router: Router,
    ){}
    public loginUser = createEffect(()=> this.actions.pipe(
        ofType(fromActions.Types.LOGIN_USER),
        map((action: fromActions.Login) => action.credential),
        switchMap(data =>
                of(this.userService.loginUser(data.username, data.password)).pipe(
                    map((user) => {
                        if(user){
                            localStorage.setItem('username', data.username);
                            localStorage.setItem('password', data.password);

                            this.store.dispatch(new fromAlert.SetAlert({
                                message: `Logged in as: ${user.role.toUpperCase()}`,
                                class: Status.Success
                            }));
                            this.router.navigateByUrl((user.role === UserRole.Default) ? '/' : 'admin');
                            return new fromActions.LoginSuccess(user);
                        }else{
                            return new fromAlert.SetAlert({
                                message: "Invalid username and password",
                                class: Status.Danger
                            })
                        }
                    }),
                    catchError(err => {
                        this.store.dispatch(new fromAlert.SetAlert({
                            message: err.message,
                            class: Status.Danger
                        }));
                        return of(new fromActions.LoginError(err.message));
                    })
                )
            )
    ));
}