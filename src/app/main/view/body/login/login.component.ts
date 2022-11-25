import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import * as fromUser from '@app/store/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppStorage } from '@app/DB/dbpath';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  credential: FormGroup;
  constructor(
    private router: Router,
    private store: Store,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    // Initialize creds formgroup
    this.credential = this.formBuilder.group({
      username: [ null, Validators.required ],
      password: [ null, Validators.required ],
    });

    if(localStorage.getItem(AppStorage.Username)){
      this.store.dispatch(new fromUser.Login({
        username: localStorage.getItem(AppStorage.Username),
        password: localStorage.getItem(AppStorage.Password)
      }));
    }
  }

  goTo(route: string){
    this.router.navigate([route]);
  }
  login(){
    this.store.dispatch(new fromUser.Login(this.credential.value));
  }

}
