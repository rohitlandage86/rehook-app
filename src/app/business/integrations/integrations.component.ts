import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConnectGoogleBusinessComponent } from './connect-google-business/connect-google-business.component';
import { ConnectYelpBusinessComponent } from './connect-yelp-business/connect-yelp-business.component';


@Component({
  selector: 'app-integrations',
  templateUrl: './integrations.component.html',
  styleUrls: ['./integrations.component.scss']
})
export class IntegrationsComponent implements OnInit {
  id: any;
  isConnected: boolean = false;
  constructor(private url: ActivatedRoute, private dialog: MatDialog,){
   
  }
  
 
  ngOnInit() {
    this.id = this.url.snapshot.queryParamMap.get('id');
    this.isConnected = !!this.id;
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
  openYelpDialog(): void {
    // Your dialog opening logic here
    const dialogRef = this.dialog.open(ConnectYelpBusinessComponent, {
      width: '50%',
      panelClass: 'mat-mdc-dialog-container',
      data: { /* pass any data you want to the dialog */ }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // Handle any actions after the dialog is closed
    });
  }

}

