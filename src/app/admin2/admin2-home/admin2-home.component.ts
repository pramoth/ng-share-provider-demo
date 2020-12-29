import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from 'src/app/admin/admin-service.service';
import { SharedServiceService } from 'src/app/shared/shared-service.service';

@Component({
  selector: 'app-admin2-home',
  templateUrl: './admin2-home.component.html',
  styleUrls: ['./admin2-home.component.css']
})
export class Admin2HomeComponent implements OnInit {

  constructor(
    public adminService: AdminServiceService,
    public sharedService: SharedServiceService) {
  }

  ngOnInit(): void {
  }

}
