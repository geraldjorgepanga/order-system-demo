import { Injectable } from '@angular/core';
import { AppStorage } from '@app/DB/dbpath';
import { Orders } from '@app/DB/orders.model';
import { Order } from '@app/models/order.model';
import { from, Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  public orders: Order[] = [];
  public tempId: number = 1;
  constructor() { 
    if(localStorage.getItem(AppStorage.Orders)){
      this.orders = JSON.parse(localStorage.getItem(AppStorage.Orders));
    }
  }

  addOrder(order:Order){

    let newOrder = {
      id: this.generateId(),
      description: order.description,
      status: order.status
    };
    let temp = [ ...this.orders, newOrder ];

    this.setOrders(temp);

    return this.orders;
  }
  updateOrder(order:Order){
    let copy = [...this.orders];
    let index = copy.findIndex(x => x.id === order.id); 
    copy[index] = order;

    this.setOrders(copy);

    return this.orders;
  }
  deleteOrder(order:Order){
    let index = this.orders.findIndex(x => x.id === order.id);

    let copy = [...this.orders];
    copy.splice(index, 1);
    this.setOrders(copy);
    return this.orders;
  }
  getOrders(){
    return this.orders;
  }
  setOrders(orders : Order[]){
    localStorage.setItem(AppStorage.Orders, JSON.stringify(orders));
    this.orders = orders;
  }
  generateId(): string{
   return Math.random().toString(36).substring(2,7);
  }
}
