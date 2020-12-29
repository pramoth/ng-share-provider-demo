import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Admin2RoutingModule } from './admin2-routing.module';
import { Admin2HomeComponent } from './admin2-home/admin2-home.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [Admin2HomeComponent],
  imports: [
    CommonModule,
    Admin2RoutingModule,
    SharedModule
  ]
})
export class Admin2Module { }
