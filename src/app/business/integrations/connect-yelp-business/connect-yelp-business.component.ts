import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/auth/auth.service';
import { SharedService } from 'src/app/shared/shared.service';
import { IntegrationsComponent } from '../integrations.component';
import { BusinessService } from '../../business.service';

@Component({
  selector: 'app-connect-yelp-business',
  templateUrl: './connect-yelp-business.component.html',
  styleUrls: ['./connect-yelp-business.component.scss']
})
export class ConnectYelpBusinessComponent implements OnInit{

  isConnected = false;
  connectBusinessForm!: FormGroup;
  iscard_reputation = true;
  iscard_matching_location =false;
  iscard_ready_generate_review = false;
  iscard_congratulation = false;
  yelpData:any;
    // allBusinessList: Array<any> = [];
  allYelpBusinessList: Array<any> = [];
  search: any = {
    combinedPhone: '',
    countryCode: '',
    phone: ''
  };
  countryCodes = ['+1', '+91', '+44', '+61', '+81', '+86'];
  name: any;
  constructor(private fb: FormBuilder,private _authService: AuthService,private _businessService: BusinessService,private router: Router, private _sharedService: SharedService,private _toastrService: ToastrService,private dialogRef: MatDialogRef<IntegrationsComponent>,@Inject(MAT_DIALOG_DATA) public data: any,) { }
  ngOnInit() {
    this.createBusinessForm();
    let businessInfo:any =JSON.parse(localStorage.getItem('business')||'')
    console.log(businessInfo);
    this.controls['business_id'].patchValue(businessInfo.business_id);
    this.getAllYelpBusinessList();

  }


  createBusinessForm() {
    return this.connectBusinessForm = this.fb.group({
      business_id: ['', Validators.required],
      yelp_id: ['', Validators.required],
      business_name: ['',Validators.required],
      phone_number: [ '', Validators.required],
    });
  
  }
  get controls() {
    return this.connectBusinessForm.controls;
  }
  //after busines search  then click add button...
  reputationcard() {
    this.iscard_reputation = false;
    this.iscard_matching_location =true;
    console.log('hiiisd yelp data',this.yelpData);
    
    this.controls['yelp_id'].patchValue(this.yelpData.id);
    this.controls['business_name'].patchValue(this.yelpData.name);
    this.controls['phone_number'].patchValue(this.yelpData.phone);
  }
  //after matching location   then click add button...
  matchingLocationcard(){
this.iscard_ready_generate_review = true;
this.iscard_matching_location =false;

  }
  CongratulationsLocationcard() {
    console.log(this.connectBusinessForm.value);
    if (this.connectBusinessForm.valid) {
      this._businessService.connectYelpbusiness(this.connectBusinessForm.getRawValue()).subscribe({
        next: (res: any) => {
          if (res.status == 201 || res.status == 200) {
            this.iscard_congratulation = true;
            this.iscard_ready_generate_review = false;
            setTimeout(() => {
              this.router.navigate([{ outlets: { sub_Menu: ['integration'] } }]);
            }, 6000);
            this._toastrService.success(res.message);
            this.isConnected = true; // Set the flag to true
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
    } else {
      this.connectBusinessForm.markAllAsTouched();
      this._toastrService.warning("Fill required fields");
    }
  }
  
  
  //back btn search location card
  toggleReputationCard() {
    this.iscard_reputation = true;
    this.iscard_matching_location = false;
  }

  //get yelp business search list...
  getAllYelpBusinessList() {
    const fullPhoneNumber = this.search.countryCode + this.search.phone;
    this._businessService.getYelpBusiness(fullPhoneNumber).subscribe({
      next: (res: any) => {
        if (res.data.length > 0) {
          this.yelpData=res.data[0];
          console.log('yelp data==', this.yelpData);
          this.allYelpBusinessList = res.data;
        } else {
          this.allYelpBusinessList = ['Not Found'];
        }
      }
    });
  }
  
  onPhoneInputChange() {
    const phoneInput = this.search.combinedPhone;
    const firstSpaceIndex = phoneInput.indexOf(' ');

    if (firstSpaceIndex !== -1) {
      this.search.countryCode = phoneInput.substring(0, firstSpaceIndex);
      this.search.phone = phoneInput.substring(firstSpaceIndex + 1);
    } else {
      this.search.countryCode = '';
      this.search.phone = phoneInput;
    }

    this.getAllYelpBusinessList();
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
