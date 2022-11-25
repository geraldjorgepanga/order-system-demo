import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrderService } from '@app/main/shared/services/order.service';
import { Store } from '@ngrx/store';

import * as fromOrder from '@app/store/order';
import { Observable } from 'rxjs';
import { Order, Status } from '@app/models/order.model';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  public headElements: string[] = [ 'ID', 'Order', 'Status', 'Action' ];
  public orders$: Observable<Order[]>;
  
  order: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private orderService: OrderService,
    private store: Store,
  ) { }

  ngOnInit(): void {

    this.orders$ = this.store.select(fromOrder.getOrders);

    // Initialize order form
    this.order = this.formBuilder.group({
      id: [],
      status: [ Status.Pending ],
      description: [null, Validators.required],
    })
  }
  upsert(){
    if(this.order.valid){      
      if(this.order.value.id){
        this.store.dispatch(new fromOrder.UpdateOrder(this.order.value));
      }else{
        this.store.dispatch(new fromOrder.AddOrder(this.order.value));
      }
      this.clearForm();
    }
  }
  clearForm(){
    this.order.setValue({
      id: null,
      description: null,
      status: Status.Pending
    });
  }
  update(order:Order){
    this.order.setValue(order);
  }
  delete(order:Order){
    if(confirm(`Continue delete ${order.description}?`)){
      this.store.dispatch(new fromOrder.DeleteOrder(order));
    }
  }
}
