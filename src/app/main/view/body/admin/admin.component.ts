import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromOrder from '@app/store/order';
import { Observable } from 'rxjs';
import { Order, Status } from '@app/models/order.model';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  public headElements: string[] = [ 'ID', 'Order', 'Status', 'Action' ];
  public orders$: Observable<Order[]>;
  
  constructor(
    public store: Store,
  ) { }

  ngOnInit(): void {

    this.orders$ = this.store.select(fromOrder.getOrders);
  }

  accept(order:Order){
    this.store.dispatch(new fromOrder.UpdateOrder({...order, status: Status.Approved}));
  }
  reject(order:Order){
    this.store.dispatch(new fromOrder.UpdateOrder({...order, status: Status.Rejected}));
  }
}
