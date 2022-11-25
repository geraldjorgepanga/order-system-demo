import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainRoutingModule, Components} from './main-routing.module';
import { ButtonsModule, CardsModule, CheckboxModule, DropdownModule, IconsModule, InputsModule, InputUtilitiesModule, NavbarModule, TableModule, WavesModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrdersComponent } from './view/body/orders/orders.component';
import { AdminComponent } from './view/body/admin/admin.component';


@NgModule({
  declarations: [
    MainComponent,
    Components,
    OrdersComponent,
    AdminComponent,
  ],
  imports: [
    CommonModule,
    CheckboxModule,
    WavesModule,
    ButtonsModule,
    InputsModule,
    IconsModule,
    CardsModule,
    FormsModule,
    ReactiveFormsModule,  
    NavbarModule,
    MainRoutingModule,
    TableModule,
    DropdownModule,
    // Modules used in SignUp Component
    InputUtilitiesModule,  // <- used in formGroups and formControls


  ]
})
export class MainModule { }
