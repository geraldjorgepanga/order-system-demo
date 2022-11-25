import { Component, OnInit } from '@angular/core';

import * as fromOrder from '@app/store/order';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private store:Store) { }

  ngOnInit(): void {
    this.store.dispatch(new fromOrder.InitOrder());
  }

}
