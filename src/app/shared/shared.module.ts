import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedServiceService } from './shared-service.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[SharedServiceService]
})
export class SharedModule { }
