import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent  implements OnInit{
  firstName: string = '';
  lastName: string = '';
  emailId: string = '';
  constructor(){}
  
  ngOnInit() {
    this.businessinfo();
  }
  businessinfo(){
    let businessInfo:any =JSON.parse(localStorage.getItem('business')||'')
    console.log(businessInfo);
    this.firstName=businessInfo.first_name;
    this.lastName=businessInfo.last_name;
    this.emailId=businessInfo.email_id;
  }
}
