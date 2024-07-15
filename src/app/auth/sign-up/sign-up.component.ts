import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';
import { AdminService } from 'src/app/admin/admin.service';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from 'src/app/shared/shared.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  sign_upForm!: FormGroup;
  allBusinesstypelist: Array<any> = [];
  allSubscriptionlist: Array<any> = [];
  allDurationlist: Array<any> = [];
  passwordVisible: boolean = false;

  constructor(private fb: FormBuilder, private router: Router, private _authService: AuthService, private _adminservice: AdminService,private toastr: ToastrService,private _sharedService: SharedService,) { }
ngOnInit() {
  this.createSign_upFormGroup();
  this.getAllBusinesstypeWma();
  this.getAllSubscriptionWam();
}
createSign_upFormGroup() {
  return this.sign_upForm = this.fb.group({
    first_name: ['', Validators.required],
    last_name: ['', Validators.required],
    contact_number: ['', [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    business_type_id: [null, Validators.required],
    subscription_id: [null, Validators.required],
    period_id: [null, Validators.required],
    business_name: ['', Validators.required],
    email_id: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    ip:["198.234.234"],
    type:["login"],
  });

}
get controls() {
  return this.sign_upForm.controls;
}
getAllSubscriptionWam() {
  this._adminservice.getAllSubscriptionWma().subscribe((res: any) => {
    this.allSubscriptionlist = res.data
    console.log(this.allSubscriptionlist)
  });
}

getAllBusinesstypeWma() {
  this._adminservice.getAllBusinesstypeWma().subscribe((res: any) => {
    this.allBusinesstypelist = res.data
    console.log(this.allBusinesstypelist)
  });
}

OnchangeSubscription(event: any) {
  console.log(event.target.value);
  let id = event.target.value;
  if (id) {
    this._adminservice.getSubscriptionById(id).subscribe((res: any) => {
      this.allDurationlist = res.data.subscription_details
      console.log(this.allDurationlist);
    })
  }
}

togglePasswordVisibility() {
  this.passwordVisible = !this.passwordVisible;
}
SubmitSign_up(){
  let data = this.sign_upForm.value;
  // console.log('datata-',data);

  if (this.sign_upForm.valid) {
    this._authService.businessSignUp(data).subscribe({
      next: (res: any) => {
        if (res.status == 200 || res.status == 201) {
          localStorage.setItem('accessToken', res.token);
          localStorage.setItem("business_id", (res.business.business_id));
          localStorage.setItem("business_name", (res.business.business_name));
          localStorage.setItem('expiresin', res.expiresIn);
          localStorage.setItem("business", JSON.stringify(res.business));
          localStorage.setItem('isLogin', 'true');
          this._sharedService.setIsLogin(true);
          this.router.navigate(['/auth', 'connect-my-business']);
          this.toastr.success(res.message);
          this.sign_upForm.reset();
        } else {
          this.toastr.warning(res.message);
        }
      },
      error: (error: any) => {

        if (error.error.status == 422) {
          this.toastr.warning(error.error.message);
        } else {
          this.toastr.error(error.error.message);

        }
      },
    })
    
  } else {
    this.sign_upForm.markAllAsTouched();
    this.toastr.warning('Please fill required fields');
  }
}
}
