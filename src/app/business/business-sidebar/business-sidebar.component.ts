import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-business-sidebar',
  templateUrl: './business-sidebar.component.html',
  styleUrls: ['./business-sidebar.component.scss']
})
export class BusinessSidebarComponent implements OnInit {
 
  constructor(private _sharedService:SharedService,private router:Router){
   
  }
  
  ngOnInit(){
 
  }
  logOut(){
   localStorage.clear();
   this._sharedService.setIsLogin(false);
   this.router.navigate([''])
  }
}
