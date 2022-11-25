import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, map, take, tap } from 'rxjs/operators';

import * as fromUser from '@app/store/user';
import * as fromAlert from '@app/store/alert';
import { Status } from '@app/store/alert/alert.model';
import { UserRole } from '@app/models/user.model';
import { AppStorage } from '@app/DB/dbpath';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private store: Store,
    private router: Router
  ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      return this.check(route);
  }

  private check(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.store.pipe(select(fromUser.getUserState)).pipe(
        filter(state => !state.loading),
        take(1),
        tap(state => {
            
            if (!state.user) {
                this.router.navigateByUrl('login');
            }
           if(route.data.role && route.data.role.indexOf(state.user.role) === -1 ){
              this.store.dispatch(new fromAlert.SetAlert({
                message: "You don't have the permission to access this page, Re-routing",
                class: Status.Danger
              }))
              this.router.navigateByUrl((state.user.role === UserRole.Default) ? '' : 'admin');
            }
        }),
        map(state => !!state.user)
    );

}
  
}
