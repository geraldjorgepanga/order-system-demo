import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromAlert from '@app/store/alert';
import * as fromUser from '@app/store/user';

import { Alert } from '@app/store/alert/alert.model';
import { User } from '@app/models/user.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private store: Store,
    private router: Router,
  ) {}
  
  alert$: Observable<Alert>;
  user$: Observable<User>;
  ngOnInit(): void {

    //Subscribe to user
    this.user$ = this.store.select(fromUser.getUser);
    // Subscribe to alert
    this.alert$ = this.store.select(fromAlert.getAlert);

    this.store.select(fromAlert.getAlert).subscribe(alert => {
      if(alert){
        setTimeout(() => {
          this.store.dispatch(new fromAlert.SetAlert(null));
        }, 3000);
      }
    })
  }

  closeAlert(){
    this.store.dispatch(new fromAlert.SetAlert(null));
  }

  logout(){
    this.store.dispatch(new fromUser.LogoutUser());
    this.router.navigateByUrl('login');
  }

}
