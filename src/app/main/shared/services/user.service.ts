import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from '@app/models/user.model';
import { DBPath } from '../dbpath';

import * as fromAlert from '@app/store/alert';
import { Store } from '@ngrx/store';
import { Status } from '@app/store/alert/alert.model';
import { Users } from '@app/DB/account.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  public userDB: User[];

  constructor(
    private afs: AngularFirestore,
    private store: Store,
  ) { this.userDB = Users; }


  public loginUser(username: string, password: string): User{    
    
    return this.userDB.find(user => user.username === username && user.password === password);

  }
}
