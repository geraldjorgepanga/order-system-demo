import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { OrderService } from '@app/main/shared/services/order.service';
import { UserService } from '@app/main/shared/services/user.service';
import { Order, Status } from '@app/models/order.model';
import { OrderState } from '@app/store/order';
import { provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { AdminComponent } from './admin.component';

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;
  let mockOrderService: jasmine.SpyObj<OrderService>;
  beforeEach(
    waitForAsync(() => {
      mockOrderService = jasmine.createSpyObj<OrderService>('OrderService', ['orders']);
      let initialState: OrderState = {
        orders: [
        ],loading: false, error: null
      };
      TestBed.configureTestingModule({
        imports: [

        ],
        declarations: [AdminComponent],
        providers: [
          provideMockStore({
            initialState
          }),
         { provide: OrderService, useValue: mockOrderService },
        ],
      })
        .compileComponents()
        .then(() => {
          fixture = TestBed.createComponent(AdminComponent);
          component = fixture.componentInstance as any;          
        });
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check if accept was called', fakeAsync(() => {
    spyOn(component, 'accept')

    let button = fixture.debugElement.query(By.css('.acceptButton'));
    expect(button).toBeDefined();
  }));
});
