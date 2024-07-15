import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared/shared.service';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  password: string = '';
  passwordVisible: boolean = false;
  isSubmitted = false
  api_key = 'YOUR API KEY';
  url = 'https://ipgeolocation.abstractapi.com/v1/?api_key=' +  this.api_key;
  ipAddress = '';

  constructor( private fb: FormBuilder,  private http:HttpClient,  private _sharedService: SharedService,   private router: Router, private _authService: AuthService,    private _toastrService: ToastrService,) { }

  ngOnInit() { 
    this.createForm();
 
  }
  createForm() {
    this.form = this.fb.group({
      email_id: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
      ip:["198.234.234"],
      type:["login"],
    });
  }
  get controls() {
    return this.form.controls;
  }

  login() {
    let data = this.form.value;
    this._sharedService.setIsLogin(true);
    console.log(data);
    if (this.form.valid) {
      this._authService.login(data).subscribe({
        next: (res: any) => {
          if (res.status == 200 || res.status == 201) {
            this.form.reset();
            localStorage.setItem('accessToken', res.token);
            localStorage.setItem("business_id", (res.business.business_id));
            localStorage.setItem("business_name", (res.business.business_name));
            localStorage.setItem('expiresin', res.expiresIn);
            localStorage.setItem("business", JSON.stringify(res.business));
            localStorage.setItem('isLogin', 'true');
            this._sharedService.setIsLogin(true);
            this.router.navigate(['/business', { outlets: { sub_Menu: 'admin' } }])
            this._sharedService.sendUserData(res.business);
            // if (res.category == 1) {
            //   this.router.navigate(['/admin', { outlets: { sub_Menu: 'admin' } }]);
            //   console.log('category admin');

            // } else {
            //   console.log('category business');
            //   this.router.navigate(['/business', { outlets: { sub_Menu: 'admin' } }]);

            // }
      
            this._toastrService.success(res.message);
            
   
          } else {
            this._toastrService.warning(res.message);
          }
        },
        error: (error: any) => {

          if (error.error.status == 422) {
            this._toastrService.warning(error.error.message);
          } else {
            this._toastrService.error(error.error.message);

          }
        },
      })
      
    } else {
      this.form.markAllAsTouched();
      this._toastrService.warning('Please fill required fields');
    }

  }
  
  //password hide show
  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }
}
