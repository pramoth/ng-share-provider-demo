import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from 'src/app/shared/shared-service.service';
import {AdminServiceService} from '../admin-service.service'

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  constructor(
    public adminService:AdminServiceService,
    public sharedService:SharedServiceService) {
     }

  ngOnInit(): void {
  }

}
