import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 //api
 url = "http://localhost:3000/"
 httpHeaders = new HttpHeaders({
   'Content-Type': 'application/json'
 });
  constructor(private http: HttpClient) { }
      //ip address
      public getIPAddress()  
      {  
        return this.http.get("http://api.ipify.org/?format=json");  
      } 

      login(data:any):Observable<any>{
        return this.http.post(this.url+"api/business/login",data,{
          headers:this.httpHeaders
        });
      }
      public isAuthenticated(): boolean {
        return this.getToken() !== null;
      }
  
  // get subscription wma
  getAllSubscriptionWma() {
    return this.http.get(this.url + 'api/subscription/wma')
  }
  //sign-in
  //login-business
  businessLogin(data: any) {
    return this.http.post(this.url + 'api/business/login', data);
  }

  
  
  //sign-up
  //business sign-up
  businessSignUp(data: any) {
    return this.http.post(this.url + 'api/business/sign-up', data);
  }
      
        getToken() {
          let accessToken = localStorage.getItem('accessToken');
          if (accessToken != null) {
            return accessToken;
          }
          return null;
        }

  
  //connect-my-business
  //select business  category
  selectMyBusinessCategory(name: any): Observable<any> {
    let params:any = {
      'name': name,
    };
  
    return this.http.get(this.url + 'api/google/business/search',{params:params,headers:this.httpHeaders});
  }
  getSubscriptionList(key:any):Observable<any>{
    let params:any= {
      name:key,
      demo:'demo'
    }
   
    return this.http.get(this.url+'api/google/business/search',{
      params:params,headers: new HttpHeaders({
        'Content-Type':  'application/json',
        })
    })
  }
  
  //add connect google business  ...
  connectgooglebusiness(data:any):Observable<any>{
    return this.http.post(this.url+"api/google-platform",data,{
      headers:this.httpHeaders
    });
  }
}
