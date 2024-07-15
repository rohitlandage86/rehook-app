import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConnectGoogleBusinessComponent } from './connect-google-business/connect-google-business.component';
import { ConnectYelpBusinessComponent } from './connect-yelp-business/connect-yelp-business.component';
import { BusinessService } from '../business.service';


@Component({
  selector: 'app-integrations',
  templateUrl: './integrations.component.html',
  styleUrls: ['./integrations.component.scss']
})
export class IntegrationsComponent implements OnInit {
  business_id: any;
  googlePlatformConnected: boolean = false;
  yelpPlatformConnected: boolean = false;
  bbbPlatformConnected: boolean = false;
  constructor(private url: ActivatedRoute, private dialog: MatDialog,private _businessService: BusinessService,){
   
  }
  
 
  ngOnInit() {
    // this.id = this.url.snapshot.queryParamMap.get('id');
    // this.isConnected = !!this.id;
    let businessInfo:any =JSON.parse(localStorage.getItem('business')||'')
    console.log(businessInfo);
    this.business_id=businessInfo.business_id;
    console.log('connect business id',this.business_id);
    
    this.getPlatformConnectedOrNot(this.business_id);
  }
  

  
  // check integrations platform connected or not
  getPlatformConnectedOrNot(id: any): void {
    this._businessService.getPlatformConnectedOrNotById(id).subscribe({
      next: (res: any) => {
        console.log('connected or not business id', res.data);
        this.googlePlatformConnected = res.data.goolge_platform;
        this.yelpPlatformConnected = res.data.yelp_platform;
        this.bbbPlatformConnected = res.data.bbb_platform;
      },
      error: (err: any) => {
        console.error('Error fetching platform connection status', err);
        this.googlePlatformConnected =false;
        this.yelpPlatformConnected = false;
        this.bbbPlatformConnected = false;
      }
    });
  }
  
  openDialog(): void {
    // Your dialog opening logic here
    const dialogRef = this.dialog.open(ConnectGoogleBusinessComponent, {
      width: '50%',
      panelClass: 'mat-mdc-dialog-container',
      data: { /* pass any data you want to the dialog */ }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // Handle any actions after the dialog is closed
    });
  }

  openYelpDialog(data?: any): void {
    const dialogRef = this.dialog.open(ConnectYelpBusinessComponent, {
      data: data,
      width: '50%',
      panelClass: 'mat-mdc-dialog-container'
    });

    dialogRef.afterClosed().subscribe((message: any) => {
      if (message === 'create' || message === 'update') {
        // Handle the create or update logic
      } else {
        console.log('nothing happen');
      }
    });
  }
}

