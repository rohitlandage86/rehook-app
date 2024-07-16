import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-business-dashboard',
  templateUrl: './business-dashboard.component.html',
  styleUrls: ['./business-dashboard.component.scss']
})
export class BusinessDashboardComponent implements OnInit {
  businessInfo:any;
  firstName: string = '';
  lastName: string = '';
  emailId: string = '';
  constructor (private router:Router,private _sharedService:SharedService){}

  ngOnInit(): void {
  this.businessinfo();
    let confirmationDisplayed = false;
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if ((event.url === '/'|| event.url==='/business/(sub_Menu:admin)'||event.url === '/auth/welcome-board') && event.navigationTrigger === 'popstate' && !confirmationDisplayed) {
          // Set the flag to true to prevent multiple executions
          confirmationDisplayed = true;
  
          // Perform your desired action here
          this.confirmNavigationBack().then(result => {
            if (result) {
              // User confirmed, proceed with navigation to login page
              this.router.navigate(['login']);
              localStorage.clear();
              this._sharedService.setIsLogin(false)
            } else {
              // Reset the flag if the user cancels the confirmation
              confirmationDisplayed = false;
            }
          });
        }
      }
    });
  }
  businessinfo(){
    let businessInfo:any =JSON.parse(localStorage.getItem('business')||'')
    console.log(businessInfo);
    this.firstName=businessInfo.first_name;
    this.lastName=businessInfo.last_name;
    this.emailId=businessInfo.email_id;
  }
  confirmNavigationBack(): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      const result = window.confirm('You are attempting to navigate back to the login page. Are you sure you want to proceed?');
      resolve(result);
    })
    .then((confirmed) => {
      if (!confirmed) {
        this.router.navigate(['business/(sub_Menu:admin)']); // Replace '/user/dashboard' with the desired page to stay on
      } else {
        localStorage.clear();
        this._sharedService.setIsLogin(false)
      }
      return confirmed;
    });
  }
}
