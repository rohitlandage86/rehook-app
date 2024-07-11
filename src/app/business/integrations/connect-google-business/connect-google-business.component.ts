import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NavigationStart, Router } from '@angular/router';
import { Options } from 'ngx-google-places-autocomplete/objects/options/options';
import { AuthService } from 'src/app/auth/auth.service';
import { SharedService } from 'src/app/shared/shared.service';
import { IntegrationsComponent } from '../integrations.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-connect-google-business',
  templateUrl: './connect-google-business.component.html',
  styleUrls: ['./connect-google-business.component.scss']
})
export class ConnectGoogleBusinessComponent implements OnInit {
  id: string = 'Not_connect';
  connectBusinessForm!: FormGroup;
  iscard_reputation = true;
  iscard_matching_location =false;
  iscard_ready_generate_review = false;
  iscard_congratulation = false;
  allBusinessList: Array<any> = [];
  searchBusinessValue: any
  search = {
    businessname: '',
  };
  selectedLocation: string = '';
  selectedLocationPlace_id : string = '';
  selectedLocationAddress: string = '';
  selectedLocationBusiness_status : string = '';
  options: Options = new Options({
    componentRestrictions: { country: 'IN' }
  });
  name: any;
  constructor(private fb: FormBuilder,private _authService: AuthService, private router: Router, private _sharedService: SharedService,private _toastrService: ToastrService,private dialogRef: MatDialogRef<IntegrationsComponent>,@Inject(MAT_DIALOG_DATA) public data: any,) { }
  ngOnInit() {
    this.createBusinessForm();
    let businessInfo:any =JSON.parse(localStorage.getItem('business')||'')
    console.log(businessInfo);

    this.controls['business_id'].patchValue(businessInfo.business_id);
    this.controls['email_id'].patchValue(businessInfo.email_id);
  }


  createBusinessForm() {
    return this.connectBusinessForm = this.fb.group({
      business_id: ['', Validators.required],
      place_id: ['', Validators.required],
      business_name: ['',Validators.required],
      email_id: ['', Validators.required],
      business_status: ['', Validators.required],
    });
  
  }
  get controls() {
    return this.connectBusinessForm.controls;
  }
  //after busines search  then click add button...
  reputationcard() {
    this.iscard_reputation = false;
    this.iscard_matching_location =true;
    console.log('this selected location ', this.selectedLocation);
    this.controls['business_name'].patchValue(this.selectedLocation);
    this.controls['place_id'].patchValue(this.selectedLocationPlace_id);
    this.controls['business_status'].patchValue(this.selectedLocationBusiness_status);
  }
  //after matching location   then click add button...
  matchingLocationcard(){
this.iscard_ready_generate_review = true;
this.iscard_matching_location =false;

  }
  CongratulationsLocationcard(){

    
    console.log(this.connectBusinessForm.value);
    if (this.connectBusinessForm.valid) {
      this._authService.connectgooglebusiness(this.connectBusinessForm.getRawValue()).subscribe({
        next: (res: any) => {
          if (res.status == 201 || res.status == 200) {
            this._toastrService.success(res.message);
            this.iscard_congratulation = true;
            this.iscard_ready_generate_review = false;
            setTimeout(() => {
              this.router.navigate(['/business', { outlets: { sub_Menu: 'admin' } }])
            }, 6000);
          } else {
            this._toastrService.warning(res.message);
          }
        },
        error: (err: any) => {
          if (err.error.status == 422) {
            this._toastrService.warning(err.error.message);
          } else {
            this._toastrService.error("Internal Server Error");
          }
        }
      });
    } 
    else {
      this.connectBusinessForm.markAllAsTouched();
      this._toastrService.warning("Fill required fields");
    }
  }
  //back btn search location card
  toggleReputationCard() {
    this.iscard_reputation = true;
    this.iscard_matching_location =false;
  }
  async searchMyBusines(event: any) {
    try {
      let name: any = event.target.value;
      console.log(name);

      const response = await this._authService.selectMyBusinessCategory(name).toPromise(); // Assuming selectMyBusinessCategory returns an Observable
      console.log(response);

      if (response && response.res && Array.isArray(response.res)) {
        this.allBusinessList = response.res;
      } else {
        console.error('Invalid response format:', response);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }


  // searchMyBusines(event: any) {
  //   let name = event.target.value;
  //   this._authService.getSubscriptionList(name).subscribe({
  //     next: (res: any) => {
  //       console.log(res);
  //       this.allBusinessList = [
  //         {
  //           "business_status": "OPERATIONAL",
  //           "formatted_address": "VH7C+3C3, Vakhar Bhag, Sangli, Sangli Miraj Kupwad, Maharashtra 416416, India",
  //           "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/shopping-71.png",
  //           "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/shopping_pinlet",
  //           "name": "W Aurelia",
  //           "photos": [
  //             {
  //               "height": 4160,
  //               "html_attributions": [
  //                 "<a href=\"https://maps.google.com/maps/contrib/106052929154861559428\">Prasad Gidde</a>"
  //               ],
  //               "photo_reference": "AWU5eFjZiLkikiF-pQ5_h87MwhAf2KGv3qCKegb-E-45i7czoh5HdEQmqLsaHPDann_ipG5P-TihtYOP7iNMGH9dAUD_ntgV5Qk4KUP08B2Zr2z-TTe9VxmUHM-0BX8z98JtXWmUfRIQUYVNjfigKJ3ht1l9SXGHjhrEO0tqebWVkKMW0kfX",
  //               "width": 3120
  //             }
  //           ],
  //           "place_id": "ChIJhf3cGRQZwTsRSOf-UsPtZP8",
  //           "rating": 3.3,
  //           "types": [
  //             "clothing_store",
  //             "point_of_interest",
  //             "store",
  //             "establishment"
  //           ],
  //           "user_ratings_total": 3
  //         },
  //         {
  //           "business_status": "OPERATIONAL",
  //           "formatted_address": "Shop No 1/2 Anad Park Urmila Nagar Bhag 1 Abhay Nagar Tal Miraj, Dist, Sangli, Maharashtra 416416, India",
  //           "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/shopping-71.png",
  //           "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/shopping_pinlet",
  //           "name": "Parsuram Sadashiv W Pushkar Aluminium",
  //           "place_id": "ChIJ9dNwagYZwTsRwKBw_HRKxdU",
  //           "plus_code": {
  //             "compound_code": "VH8R+3H Sangli, Maharashtra",
  //             "global_code": "7J8PVH8R+3H"
  //           },
  //           "rating": 0,
  //           "types": [
  //             "hardware_store",
  //             "point_of_interest",
  //             "store",
  //             "establishment"
  //           ],
  //           "user_ratings_total": 0
  //         }
  //       ]
  //     }
  //   })

  // }

  confirmNavigationBack(): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      const result = window.confirm('You are attempting to navigate back to the login page. Are you sure you want to proceed?');
      resolve(result);
    })
    .then((confirmed) => {
      if (!confirmed) {
        this.router.navigate(['/']); // Replace '/user/dashboard' with the desired page to stay on
      } else {
        localStorage.clear();
      }
      return confirmed;
    });
  }
 
  async onsearchbusiness(){
    // if (this.searchForm.valid) {
    //   console.log('  successfully:', this.search);
    //   // Your further processing logic goes here
    // } else {
    //   console.log(' Please check the fields.');
    // }
    // console.log('hiii' ,this.search);
    try {
      let name: any = this.search.businessname;
      console.log(name);

      const response = await this._authService.selectMyBusinessCategory(name).toPromise(); // Assuming selectMyBusinessCategory returns an Observable
      console.log(response);

      if (response && response.res && Array.isArray(response.res)) {
        this.allBusinessList = response.res;
      } else {
        console.error('Invalid response format:', response);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
  //selected business location patch next card
  onPlaceChanged(result: any): void {
    this.selectedLocation = result.name;
    this.selectedLocationAddress = result.formatted_address
    this.selectedLocationPlace_id= result.place_id;
    this.selectedLocationBusiness_status= result.business_status
  console.log('name',result.name);
  console.log('Address',result.formatted_address);
  
  }
  
  getAllBusinessType(event:any) {
    const name = event.target.value;
    this._authService.selectMyBusinessCategory(name).subscribe((res: any) => {
      console.log(res);
      this.name = res['results'];
      
    })
  }

  closeDialog(message?: any) {
    this.dialogRef.close(message);
  }

}
