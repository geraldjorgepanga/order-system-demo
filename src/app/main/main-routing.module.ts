import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRole } from '@app/models/user.model';
import { MainComponent } from './main.component';
import { AuthGuard } from './shared/auth.guard';
import { AdminComponent } from './view/body/admin/admin.component';
import { LoginComponent } from './view/body/login/login.component';
import { OrdersComponent } from './view/body/orders/orders.component';
import { HeaderComponent } from './view/header/header.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard],
        data: {
          role: UserRole.Admin
        }
      },
      {
        path: '',
        component: OrdersComponent,
        canActivate: [AuthGuard],
        data: {
          role: UserRole.Default
        }
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class MainRoutingModule { 

}

export const Components = [
  HeaderComponent,
  MainComponent,
  LoginComponent,
  OrdersComponent,
  AdminComponent
]