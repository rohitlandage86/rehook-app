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
  id: string = 'Not_connect';
  connectBusinessForm!: FormGroup;
  iscard_reputation = true;
  iscard_matching_location =false;
  iscard_ready_generate_review = false;
  iscard_congratulation = false;
  allBusinessList: Array<any> = [];
  allYelpBusinessList: Array<any> = [];
  searchBusinessValue: any
  search = {
    phone: '',
  };

  name: any;
  constructor(private fb: FormBuilder,private _authService: AuthService,private _businessService: BusinessService,private router: Router, private _sharedService: SharedService,private _toastrService: ToastrService,private dialogRef: MatDialogRef<IntegrationsComponent>,@Inject(MAT_DIALOG_DATA) public data: any,) { }
  ngOnInit() {
    this.createBusinessForm();
    let businessInfo:any =JSON.parse(localStorage.getItem('business')||'')
    console.log(businessInfo);

    this.controls['business_id'].patchValue(businessInfo.business_id);
    // this.controls['email_id'].patchValue(businessInfo.email_id);
  }


  createBusinessForm() {
    return this.connectBusinessForm = this.fb.group({
      business_id: ['', Validators.required],
      yelp_id: ['', Validators.required],
      business_name: ['',Validators.required],
      phone_number: ['', Validators.required],
    });
  
  }
  get controls() {
    return this.connectBusinessForm.controls;
  }
  //after busines search  then click add button...
  reputationcard() {
    this.iscard_reputation = false;
    this.iscard_matching_location =true;

  }
  //after matching location   then click add button...
  matchingLocationcard(){
this.iscard_ready_generate_review = true;
this.iscard_matching_location =false;

  }
  CongratulationsLocationcard(){
    console.log(this.connectBusinessForm.value);
    if (this.connectBusinessForm.valid) {
      this._businessService.connectYelpbusiness(this.connectBusinessForm.getRawValue()).subscribe({
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

  //get category list...
  getAllCategoryList(phone:any){
    this._businessService.getYelpBusiness(phone).subscribe({
      next:(res:any)=>{
        if (res.data.length > 0) {
          this.allYelpBusinessList = res.data;      
        }else
        {
          this.allYelpBusinessList = ['Not Found'];
   
        }
      }
    })
  }
  
  getAllBusinessType(event:any) {
    const name = event.target.value;
    this._authService.selectMyBusinessCategory(name).subscribe((res: any) => {
      console.log(res);
      this.name = res['results'];
      
    })
  }



}
