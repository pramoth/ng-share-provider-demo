import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Admin2HomeComponent} from './admin2-home/admin2-home.component'

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    component: Admin2HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Admin2RoutingModule { }
